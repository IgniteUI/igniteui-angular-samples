import { isPlatformBrowser } from '@angular/common';
import { DOCUMENT, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { THEME_TOKEN, type IgxTheme } from 'igniteui-angular/core';

/**
 * Message type posted by the documentation site's theming widget into the
 * sample iframe. See `ThemeService.handleMessage`.
 */
export const THEME_MESSAGE = 'igd-sample-theme';

/** Color modes the theming widget can request. */
export type ThemeMode = 'light' | 'dark' | 'system';

/** `system` resolved against the OS preference. */
export type ColorScheme = 'light' | 'dark';

/**
 * Prebuilt Ignite UI stylesheets, one per theme/scheme pair. They are copied
 * out of `igniteui-angular/styles` into `assets/themes` at build time - see the
 * `assets` section of angular.json.
 */
const THEME_STYLESHEETS: Record<IgxTheme, Record<ColorScheme, string>> = {
    material: { light: 'igniteui-angular.css', dark: 'igniteui-angular-dark.css' },
    fluent: { light: 'igniteui-fluent-light.css', dark: 'igniteui-fluent-dark.css' },
    bootstrap: { light: 'igniteui-bootstrap-light.css', dark: 'igniteui-bootstrap-dark.css' },
    indigo: { light: 'igniteui-indigo-light.css', dark: 'igniteui-indigo-dark.css' }
};

const THEMES_PATH = 'assets/themes/';

/** Id of the `<link>` in index.html that carries the active theme. */
const THEME_LINK_ID = 'igniteui-theme';

const TYPEFACE_URL = 'https://fonts.googleapis.com/css?family=';
const TYPEFACE_WEIGHTS = ':300,400,600,700';

/**
 * Font families that never need to be fetched: generic CSS keywords and the
 * system fonts the Bootstrap theme is built on.
 */
const LOCAL_FAMILIES = new Set([
    'sans-serif', 'serif', 'monospace', 'cursive', 'fantasy',
    'system-ui', 'ui-sans-serif', 'ui-serif', 'ui-monospace',
    'segoe ui', 'helvetica', 'helvetica neue', 'arial', 'roboto'
]);

const isTheme = (value: unknown): value is IgxTheme =>
    typeof value === 'string' && value in THEME_STYLESHEETS;

const isMode = (value: unknown): value is ThemeMode =>
    value === 'light' || value === 'dark' || value === 'system';

/**
 * Swaps the Ignite UI theme of the samples application at runtime.
 *
 * Samples are embedded in the documentation as iframes and the site's theming
 * widget posts the visitor's selection into them, so the whole application has
 * to be able to move between the Material, Fluent, Bootstrap and Indigo themes
 * (each in a light and a dark variant) without reloading. That is done by
 * pointing a single `<link>` at one of the prebuilt stylesheets instead of
 * compiling a single theme into `styles.scss`.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
    private document = inject(DOCUMENT);
    private themeToken = inject(THEME_TOKEN);
    private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

    /** The selected theme. */
    public readonly theme = signal<IgxTheme>('material');

    /** The selected color mode, `system` included. */
    public readonly mode = signal<ThemeMode>('light');

    /** The color mode actually in effect, with `system` already resolved. */
    public readonly colorScheme = signal<ColorScheme>('light');

    private prefersDark: MediaQueryList;
    private typefaces = new Set<string>();

    /**
     * Applies the initial theme and starts following the OS color preference.
     * Safe to call more than once.
     */
    public init(): void {
        if (this.isBrowser && !this.prefersDark) {
            this.prefersDark = this.document.defaultView?.matchMedia('(prefers-color-scheme: dark)');
            // Only relevant while the widget is on `system`; `apply` ignores it otherwise.
            this.prefersDark?.addEventListener('change', () => this.apply());
        }

        this.apply();
    }

    /**
     * Handles a `message` event coming from the documentation site.
     *
     * The widget posts `{ type: 'igd-sample-theme', theme, themeName, mode }`
     * once when the iframe loads and again on every change. The message is
     * trusted for its shape rather than for its origin - the documentation is
     * served from a number of hosts, and the only thing acted upon is a choice
     * between the four known themes and the three known modes.
     *
     * @returns whether the message was recognized and applied.
     */
    public handleMessage(event: MessageEvent): boolean {
        const data = event.data;

        if (!data || (data.type !== THEME_MESSAGE && data.event !== THEME_MESSAGE)) {
            return false;
        }

        return this.set(data.theme ?? data.themeName, data.mode);
    }

    /**
     * Switches to `theme` / `mode`. Unknown or missing values leave the
     * corresponding part of the selection untouched.
     *
     * @returns whether anything was recognized.
     */
    public set(theme?: unknown, mode?: unknown): boolean {
        let known = false;

        if (isTheme(theme)) {
            this.theme.set(theme);
            known = true;
        }

        if (isMode(mode)) {
            this.mode.set(mode);
            known = true;
        }

        if (known) {
            this.apply();
        }

        return known;
    }

    private apply(): void {
        if (!this.isBrowser) {
            return;
        }

        const theme = this.theme();
        const scheme = this.resolveScheme();
        this.colorScheme.set(scheme);

        // Exposed for samples that need to react to the selection. Deliberately
        // not used to paint a page background: the documentation's Sample
        // component owns the surface behind the iframe.
        const root = this.document.documentElement;
        root.dataset.igTheme = theme;
        root.dataset.igMode = scheme;

        const href = THEMES_PATH + THEME_STYLESHEETS[theme][scheme];
        const link = this.themeLink();

        if (!link.getAttribute('href')?.endsWith(href)) {
            link.addEventListener('load', () => this.loadTypeface(), { once: true });
            link.href = href;
        }

        // Components such as igx-input-group render differently per theme and
        // take the theme from this token rather than from the stylesheet.
        this.themeToken.set(theme);
    }

    private resolveScheme(): ColorScheme {
        const mode = this.mode();

        if (mode !== 'system') {
            return mode;
        }

        return this.prefersDark?.matches ? 'dark' : 'light';
    }

    private themeLink(): HTMLLinkElement {
        let link = this.document.getElementById(THEME_LINK_ID) as HTMLLinkElement;

        if (!link) {
            link = this.document.createElement('link');
            link.id = THEME_LINK_ID;
            link.rel = 'stylesheet';
            // Ahead of everything else in the head, so that the application's
            // own styles keep overriding the theme as they do in index.html.
            this.document.head.insertBefore(link, this.document.head.firstChild);
        }

        return link;
    }

    /**
     * Each theme comes with its own typeface. Once a theme stylesheet is in
     * place, take the first family off `--ig-font-family` and pick it up from
     * Google Fonts unless it is one the browser already has.
     */
    private loadTypeface(): void {
        const view = this.document.defaultView;

        if (!view) {
            return;
        }

        const family = view.getComputedStyle(this.document.body)
            .getPropertyValue('--ig-font-family')
            .split(',')[0]
            .trim()
            .replace(/['"]/g, '');

        if (!family || family.startsWith('-') || LOCAL_FAMILIES.has(family.toLowerCase())) {
            return;
        }

        if (this.typefaces.has(family)) {
            return;
        }

        this.typefaces.add(family);

        // A link per family, so that switching back to an earlier theme does
        // not have to fetch its typeface again.
        const link = this.document.createElement('link');
        link.rel = 'stylesheet';
        link.href = TYPEFACE_URL + family.split(' ').join('+') + TYPEFACE_WEIGHTS;
        this.document.head.appendChild(link);
    }
}
