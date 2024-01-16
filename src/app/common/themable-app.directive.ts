import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Inject, OnInit } from '@angular/core';

const PREBUILT_THEME_MAP = {
    'igx-theme': 'material-light',
    'igx-dark-theme': 'material-dark',
    'igx-fluent-theme': 'fluent-light',
    'igx-fluent-dark-theme': 'fluent-dark',
    'igx-bootstrap-theme': 'bootstrap-light',
    'igx-bootstrap-dark-theme': 'bootstrap-dark',
    'igx-indigo-light-theme': 'indigo-light',
    'igx-indigo-dark-theme': 'indigo-dark'
}

@Directive()
export abstract class ThemableDirective implements OnInit {
    private theme = 'igx-theme';
    private linkElem: HTMLLinkElement;
    private styleElem: HTMLStyleElement;
    private typefacesLoaded = ['Titillium Web', 'Roboto', 'Nunito Sans'];
    private typefaceUrl = 'https://fonts.googleapis.com/css?family=';

    constructor(@Inject(DOCUMENT) private document: Document) { }

    public ngOnInit() {
        this.updateThemeLink(PREBUILT_THEME_MAP[this.theme]);
        this.createThemeStyle();
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    @HostListener('window:message', ['$event'])
    private onMessage(e: MessageEvent) {
        if (e.origin === e.data.origin && typeof e.data.themeStyle === 'string') {
            const theme = JSON.parse(e.data.themeStyle);
            this.updateThemeLink(PREBUILT_THEME_MAP[theme.globalTheme]);
            this.styleElem.textContent = theme.data;
            const typeface = theme.typeface.family;
            if (!(typeface.match(/,/g) || []).length &&
                !this.typefacesLoaded.includes(typeface)) {
                this.typefacesLoaded.push(typeface);
                this.createTypefaceLink(typeface);
            }
        } else if (e.origin === e.data.origin && typeof e.data.theme === 'string') {
            this.document.body.classList.remove(this.theme);
            this.document.body.classList.add(e.data.theme);
            this.theme = e.data.theme;
        }
    }

    private createTypefaceLink(typeface: string) {
        const typefaceElem = this.document.createElement('link');
        typefaceElem.rel = 'stylesheet';
        typefaceElem.id = 'ignteui-theme-typeface';
        typefaceElem.href = this.typefaceUrl + typeface.split(' ').join('+');
        document.head.insertBefore(typefaceElem, this.document.head.lastElementChild);
    }

    private updateThemeLink(name: string) {
        const elem = document.createElement('link');
        elem.rel = 'stylesheet';
        elem.id = 'igniteui-theme';
        elem.href = `${name}.css`;
        if (!this.linkElem) {
            document.head.insertBefore(elem, this.document.head.lastElementChild);
            this.linkElem = elem;
            this.document.body.classList.add('custom-body');
        } else {
            elem.onload = () => {
                this.linkElem.remove();
                this.linkElem = elem;
            };
            this.linkElem.parentNode.insertBefore(elem, this.linkElem);
        }
    }

    private createThemeStyle() {
        this.styleElem = document.createElement('style');
        this.styleElem.id = 'igniteui-theme';
        document.head.insertBefore(this.styleElem, this.document.head.lastElementChild);
        this.document.body.classList.add('custom-body');
    }
}
