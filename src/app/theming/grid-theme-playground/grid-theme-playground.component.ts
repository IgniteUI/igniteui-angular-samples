import { Component, ElementRef, afterNextRender, computed, inject, signal, viewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxNumberSummaryOperand, IgxSummaryResult } from 'igniteui-angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxDialogActionsDirective, IgxDialogComponent, IgxDialogTitleDirective } from 'igniteui-angular/dialog';
import { IgxButtonDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IGX_EXPANSION_PANEL_DIRECTIVES } from 'igniteui-angular/expansion-panel';
import { IgxCellTemplateDirective, IgxColumnComponent, IPivotConfiguration, IgxPivotNumericAggregate } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { INVOICE_DATA } from '../../data/invoiceData';
import { DATA as PIVOT_DATA } from '../../data/pivot-data';
import { SINGERS } from '../../data/singersData';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../../tree-grid/data/employees-flat-avatars';
import { ThemeColorFieldComponent } from './theme-color-field.component';

type TokenKey = 'background' | 'accentColor' | 'foreground' | 'headerBackground' | 'headerForeground';

interface TokenDescriptor {
    key: TokenKey;
    cssVar: string;
    scss: string;
    label: string;
}
class CompactSummary extends IgxNumberSummaryOperand {
    public override operate(data?: any[]): IgxSummaryResult[] {
        return super.operate(data).filter(r => r.key === 'count' || r.key === 'sum');
    }
}
const PRIMARY_TOKENS: TokenDescriptor[] = [
    { key: 'background', cssVar: '--ig-grid-background', scss: '$background', label: 'Background' },
    { key: 'accentColor', cssVar: '--ig-grid-accent-color', scss: '$accent-color', label: 'Accent' },
    { key: 'foreground', cssVar: '--ig-grid-foreground', scss: '$foreground', label: 'Foreground' }
];
const HEADER_TOKENS: TokenDescriptor[] = [
    { key: 'headerBackground', cssVar: '--ig-grid-header-background', scss: '$header-background', label: 'Header background' },
    { key: 'headerForeground', cssVar: '--ig-grid-header-text-color', scss: '$header-text-color', label: 'Header foreground' }
];

const ALL_TOKENS = [...PRIMARY_TOKENS, ...HEADER_TOKENS];

const EMPTY_COLORS: Record<TokenKey, string> = {
    background: '', accentColor: '', foreground: '', headerBackground: '', headerForeground: ''
};
/** What Sass emits for header text once $header-background is declared. */
const HEADER_TEXT_ON_HEADER = 'hsla(from color(from var(--ig-grid-header-background) var(--y-contrast)) h 0 l/1)';
const DIVIDER = 'hsl(from color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background)) h s l/0.38)';
const ZEBRA = 'color-mix(in srgb, var(--ig-grid-foreground) 4%, var(--ig-grid-background))';
const NO_DIVIDER = 'var(--ig-grid-background)';

@Component({
    selector: 'app-grid-theme-playground',
    styleUrls: ['./grid-theme-playground.component.scss'],
    templateUrl: './grid-theme-playground.component.html',
    imports: [
        IgxAccordionComponent, IGX_EXPANSION_PANEL_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective,
        IgxButtonGroupComponent, IgxCellTemplateDirective, IgxColumnComponent,
        IgxDialogActionsDirective, IgxDialogComponent, IgxDialogTitleDirective, IgxGridComponent,
        IgxHierarchicalGridComponent, IgxIconButtonDirective, IgxIconComponent, IgxPaginatorComponent, IgxPivotGridComponent, IgxRowIslandComponent,
        IgxSwitchComponent, IgxTreeGridComponent, ThemeColorFieldComponent
    ]
})
export class GridThemePlaygroundComponent {
    protected readonly primaryTokens = PRIMARY_TOKENS;
    protected readonly headerTokens = HEADER_TOKENS;
    protected readonly compactSummary = CompactSummary;

    protected readonly colors = signal<Record<TokenKey, string>>({ ...EMPTY_COLORS });
    protected readonly size = signal<'small' | 'medium' | 'large'>('medium');
    protected readonly radiusFactor = signal(0.4);
    protected readonly horizontalDividers = signal(true);
    protected readonly verticalDividers = signal(false);
    protected readonly zebra = signal(false);
    protected readonly preview = signal<'grid' | 'tree' | 'hierarchical' | 'pivot'>('grid');

    protected readonly copied = signal<'scss' | 'css' | null>(null);

    protected readonly sizes = [
        { label: 'Small', selected: false },
        { label: 'Medium', selected: true },
        { label: 'Large', selected: false }
    ];
    protected readonly roundnessOptions = [
        { label: 'Square', selected: false },
        { label: 'Soft', selected: true },
        { label: 'Round', selected: false }
    ];
    protected readonly previews = [
        { label: 'Flat', selected: true },
        { label: 'Tree', selected: false },
        { label: 'Hierarchical', selected: false },
        { label: 'Pivot', selected: false }
    ];

    public readonly data = INVOICE_DATA;
    public readonly treeData = EMPLOYEE_FLAT_AVATARS_DATA();
    public readonly hierarchicalData = SINGERS;
    public readonly pivotData = PIVOT_DATA;

    public pivotConfig: IPivotConfiguration = {
        columns: [{ memberName: 'Product', memberFunction: (data) => data.Product.Name, enabled: true }],
        rows: [{
            memberName: 'City',
            memberFunction: (data) => data.Seller.City,
            enabled: true,
            childLevel: { memberName: 'Seller', memberFunction: (data) => data.Seller.Name, enabled: true }
        }],
        values: [{
            member: 'NumberOfUnits',
            aggregate: { aggregator: IgxPivotNumericAggregate.sum, key: 'sum', label: 'Sum' },
            enabled: true
        }],
        filters: null
    };

    private readonly sanitizer = inject(DomSanitizer);

    protected readonly scssHtml = signal<SafeHtml | null>(null);
    protected readonly cssHtml = signal<SafeHtml | null>(null);

    private highlighter: { codeToHtml: (code: string, opts: { lang: string; theme: string }) => string } | null = null;

    private readonly stage = viewChild.required<ElementRef<HTMLElement>>('stage');
    /** The compiled theme, read from the stylesheet: the CSS export needs every
     *  token, not just the roots, to work in an app with no grid-theme(). */
    private readonly themeTokens = signal<Array<[string, string]>>([]);

    constructor() {
        afterNextRender(() => {
            this.seedFromStylesheet();
            this.readCompiledTheme();
        });
    }
    protected readonly previewStyle = computed<Record<string, string>>(() => {
        const style: Record<string, string> = {};
        const colors = this.colors();

        for (const token of ALL_TOKENS) {
            if (colors[token.key]) {
                style[token.cssVar] = colors[token.key];
            }
        }
        if (colors.headerBackground && !colors.headerForeground) {
            style['--ig-grid-header-text-color'] = HEADER_TEXT_ON_HEADER;
        }

        style['--ig-size'] = `var(--ig-size-${this.size()})`;
        style['--ig-radius-factor'] = `${this.radiusFactor()}`;
        style['--ig-grid-row-border-color'] = this.horizontalDividers() ? DIVIDER : NO_DIVIDER;

        const columnRule = this.verticalDividers() ? DIVIDER : NO_DIVIDER;
        style['--ig-grid-body-column-border-color-odd'] = columnRule;
        style['--ig-grid-body-column-border-color-even'] = columnRule;

        if (this.zebra()) {
            style['--ig-grid-row-even-background'] = ZEBRA;
        }

        return style;
    });
    protected readonly exportScss = computed(() => {
        const colors = this.colors();
        const themeLines = ALL_TOKENS
            .filter(token => colors[token.key])
            .map(token => `    ${token.scss}: ${colors[token.key]},`);

        if (!this.horizontalDividers()) {
            themeLines.push(`    $row-border-color: ${NO_DIVIDER},`);
        }
        if (this.verticalDividers()) {
            themeLines.push(`    $body-column-border-color-odd: ${DIVIDER},`);
            themeLines.push(`    $body-column-border-color-even: ${DIVIDER},`);
        }
        if (this.zebra()) {
            themeLines.push(`    $row-even-background: ${ZEBRA},`);
        }

        const varLines = [
            `  --ig-size: var(--ig-size-${this.size()});`,
            `  --ig-radius-factor: ${this.radiusFactor()};`
        ];

        if (!themeLines.length) {
            return `.my-grid {\n${varLines.join('\n')}\n}`;
        }

        return `.my-grid {\n${varLines.join('\n')}\n\n  @include tokens(grid-theme(\n${themeLines.join('\n')}\n  ));\n}`;
    });

    protected readonly exportCss = computed(() => {
        const overrides = this.previewStyle();
        const base = this.themeTokens();

        if (!base.length) {
            const lines = Object.entries(overrides).map(([name, value]) => `  ${name}: ${value};`);
            return `/* Overrides only -- requires a grid-theme() base to derive from. */\n.my-grid {\n${lines.join('\n')}\n}`;
        }

        const emitted = new Set<string>();
        const lines = base.map(([name, value]) => {
            emitted.add(name);
            return `  ${name}: ${overrides[name] ?? value};`;
        });
        const extras = Object.entries(overrides)
            .filter(([name]) => !emitted.has(name))
            .map(([name, value]) => `  ${name}: ${value};`);

        return `.my-grid {\n${[...extras, ...lines].join('\n')}\n}`;
    });

    protected setColor(key: TokenKey, value: string): void {
        this.colors.update(current => ({ ...current, [key]: value }));
    }

    protected reset(): void {
        this.colors.set({ ...EMPTY_COLORS });
        this.size.set('medium');
        this.radiusFactor.set(0.4);
        this.horizontalDividers.set(true);
        this.verticalDividers.set(false);
        this.zebra.set(false);
        this.seedFromStylesheet();
    }

    protected async showCode(dialog: IgxDialogComponent): Promise<void> {
        // Loaded on demand so shiki stays out of the initial bundle.
        if (!this.highlighter) {
            // shiki/core with explicit grammars: the bundled entry point resolves
            // languages dynamically and emits a chunk for every one it ships.
            const [core, engine, scss, css, theme] = await Promise.all([
                import('shiki/core'),
                import('shiki/engine/javascript'),
                import('shiki/langs/scss.mjs'),
                import('shiki/langs/css.mjs'),
                import('shiki/themes/material-theme-lighter.mjs')
            ]);

            this.highlighter = await core.createHighlighterCore({
                themes: [theme.default],
                langs: [scss.default, css.default],
                engine: engine.createJavaScriptRegexEngine()
            });
        }

        const render = (code: string | null, lang: string) => code
            ? this.sanitizer.bypassSecurityTrustHtml(this.highlighter.codeToHtml(code, { lang, theme: 'material-theme-lighter' }))
            : null;

        this.scssHtml.set(render(this.exportScss(), 'scss'));
        this.cssHtml.set(render(this.exportCss(), 'css'));
        dialog.open();
    }

    protected copy(code: string | null, format: 'scss' | 'css'): void {
        if (!code) return;
        navigator.clipboard.writeText(code).then(() => {
            this.copied.set(format);
            setTimeout(() => this.copied.set(null), 2000);
        });
    }

    protected onSize(args: { index: number }): void {
        this.size.set((['small', 'medium', 'large'] as const)[args.index]);
    }

    protected onRoundness(args: { index: number }): void {
        this.radiusFactor.set([0, 0.4, 1][args.index]);
    }

    protected onPreview(args: { index: number }): void {
        this.preview.set((['grid', 'tree', 'hierarchical', 'pivot'] as const)[args.index]);
    }
    private readCompiledTheme(): void {
        const tokens: Array<[string, string]> = [];

        for (const sheet of Array.from(document.styleSheets)) {
            let rules: CSSRuleList;

            try {
                rules = sheet.cssRules;
            } catch {
                continue; // cross-origin sheet, not ours
            }

            for (const rule of Array.from(rules)) {
                if (!(rule instanceof CSSStyleRule) || !rule.selectorText.includes('playground__stage')) {
                    continue;
                }

                for (let i = 0; i < rule.style.length; i++) {
                    const name = rule.style.item(i);
                    if (name.startsWith('--ig-')) {
                        tokens.push([name, rule.style.getPropertyValue(name).trim()]);
                    }
                }
            }
        }

        this.themeTokens.set(tokens);
    }

    private seedFromStylesheet(): void {
        const styles = getComputedStyle(this.stage().nativeElement);

        this.colors.update(current => ({
            ...current,
            background: styles.getPropertyValue('--ig-grid-background').trim(),
            accentColor: styles.getPropertyValue('--ig-grid-accent-color').trim()
        }));
    }
}
