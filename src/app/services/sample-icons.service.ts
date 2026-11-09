import { DestroyRef, Injectable, inject } from '@angular/core';
import { THEME_TOKEN, type IgxTheme } from 'igniteui-angular/core';
import { IgxIconService } from 'igniteui-angular/icon';

interface IconRef {
    name: string;
    family: string;
}

interface ThemeIcon extends IconRef {
    /** The icon to show instead while a given theme is active. */
    themes: Partial<Record<IgxTheme, IconRef>>;
}

/**
 * Icons the samples use, mapped to the icon Ignite UI bundles for a theme.
 * IgxIconService registers the Indigo versions of the icons its components
 * use in the `internal_indigo` family.
 */
const THEME_ICONS: ThemeIcon[] = [
    {
        name: 'arrow_upward',
        family: 'material',
        themes: {
            indigo: { name: 'arrow_upward', family: 'internal_indigo' }
        }
    }
];

/**
 * Gives sample icons their theme-specific look while the documentation
 * re-themes the samples application (see `ThemeService`).
 *
 * Samples use their icons by name as usual, e.g. `<igx-icon name="arrow_upward">`.
 * On every theme change, each icon in `THEME_ICONS` is pointed at the icon
 * Ignite UI bundles for that theme, the same way IgxIconService switches the
 * icons of the components themselves. Outside the samples application
 * (exported or standalone samples) a sample keeps its own icon.
 */
@Injectable({ providedIn: 'root' })
export class SampleIconsService {
    private iconService = inject(IgxIconService);
    private themeToken = inject(THEME_TOKEN);
    private destroyRef = inject(DestroyRef);

    /** Starts following the active theme, the current one included. */
    public init(): void {
        const subscription = this.themeToken.onChange((theme) => this.apply(theme));
        this.destroyRef.onDestroy(() => subscription.unsubscribe());
    }

    private apply(theme: IgxTheme): void {
        for (const icon of THEME_ICONS) {
            // A reference can't be removed, so themes without an override
            // point the icon back at the one the sample uses.
            const target = icon.themes[theme] ?? { name: icon.name, family: icon.family };
            this.iconService.setIconRef(icon.name, icon.family, target);
        }
    }
}
