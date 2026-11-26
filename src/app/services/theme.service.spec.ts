import { DOCUMENT, PLATFORM_ID, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { THEME_TOKEN, type IgxTheme } from 'igniteui-angular/core';
import { THEME_MESSAGE, ThemeService } from './theme.service';

describe('ThemeService theme validation', () => {
    let service: ThemeService;
    let document: Document;

    beforeEach(() => {
        document = window.document.implementation.createHTMLDocument();
        TestBed.configureTestingModule({
            providers: [
                { provide: DOCUMENT, useValue: document },
                { provide: PLATFORM_ID, useValue: 'browser' },
                { provide: THEME_TOKEN, useValue: signal<IgxTheme>('material') }
            ]
        });
        service = TestBed.inject(ThemeService);
        service.init();
    });

    for (const theme of ['toString', 'constructor', '__proto__', 'hasOwnProperty']) {
        it(`rejects inherited theme key ${theme}`, () => {
            const link = document.getElementById('igniteui-theme');
            const href = link.getAttribute('href');

            expect(service.handleMessage(new MessageEvent('message', {
                data: { type: THEME_MESSAGE, theme }
            }))).toBeFalse();
            expect(service.theme()).toBe('material');
            expect(link.getAttribute('href')).toBe(href);

            expect(service.set(theme, 'dark')).toBeTrue();
            expect(service.theme()).toBe('material');
            expect(service.mode()).toBe('dark');
            expect(link.getAttribute('href')).toBe('assets/themes/igniteui-angular-dark.css');
        });
    }

    for (const [theme, stylesheet] of [
        ['material', 'igniteui-angular.css'],
        ['fluent', 'igniteui-fluent-light.css'],
        ['bootstrap', 'igniteui-bootstrap-light.css'],
        ['indigo', 'igniteui-indigo-light.css']
    ] as const) {
        it(`accepts supported theme ${theme}`, () => {
            expect(service.handleMessage(new MessageEvent('message', {
                data: { type: THEME_MESSAGE, theme }
            }))).toBeTrue();
            expect(service.theme()).toBe(theme);
            expect(document.getElementById('igniteui-theme').getAttribute('href'))
                .toBe(`assets/themes/${stylesheet}`);
        });
    }

    it('reflects the color mode as the root color-scheme', () => {
        const root = document.documentElement;
        expect(root.style.colorScheme).toBe('light');

        expect(service.set('bootstrap', 'dark')).toBeTrue();
        expect(root.style.colorScheme).toBe('dark');

        expect(service.set('bootstrap', 'light')).toBeTrue();
        expect(root.style.colorScheme).toBe('light');
    });
});

describe('ThemeService selection in the URL', () => {
    it('applies the theme and mode that the documentation passes when it opens the sample in its own tab', () => {
        const document = window.document.implementation.createHTMLDocument();
        // A test document has no location, so the query of the sample's URL is stubbed.
        const withQuery = new Proxy(document, {
            get: (target, key) => {
                if (key === 'location') {
                    return { search: '?igd-theme=fluent&igd-mode=dark' };
                }
                const value = Reflect.get(target, key);
                return typeof value === 'function' ? value.bind(target) : value;
            }
        });
        TestBed.configureTestingModule({
            providers: [
                { provide: DOCUMENT, useValue: withQuery },
                { provide: PLATFORM_ID, useValue: 'browser' },
                { provide: THEME_TOKEN, useValue: signal<IgxTheme>('material') }
            ]
        });
        const service = TestBed.inject(ThemeService);
        service.init();

        expect(service.theme()).toBe('fluent');
        expect(service.mode()).toBe('dark');
        expect(document.getElementById('igniteui-theme').getAttribute('href'))
            .toBe('assets/themes/igniteui-fluent-dark.css');
    });
});
