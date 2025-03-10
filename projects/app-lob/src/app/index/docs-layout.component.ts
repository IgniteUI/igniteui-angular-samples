import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-docs-layout',
    styleUrls: ['./docs-layout.component.scss'],
    template: `<router-outlet></router-outlet>`,
    imports: [RouterOutlet]
})

export class DocsLayoutComponent implements OnInit {
    private isIE = !((window as any).ActiveXObject) && 'ActiveXObject' in window;
    private theme = 'default-theme';
    private styleElem: HTMLStyleElement;
    private typefacesLoaded = ['Titillium Web', 'Roboto'];
    private typefaceUrl = 'https://fonts.googleapis.com/css?family=';

    constructor(@Inject(DOCUMENT) private document: Document) {}

    @HostListener('window:message', ['$event'])
    private onMessage(e: MessageEvent) {
        if (e.origin === e.data.origin && typeof e.data.themeStyle === 'string') {
            this.styleElem.textContent = e.data.themeStyle;

            const typeface = window.getComputedStyle(this.document.body).fontFamily.replace(/\'/g, '');
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

    public ngOnInit() {
        this.createThemeStyle();
    }

    private createThemeStyle() {
        if (this.isIE) {
            this.document.body.classList.add(this.theme);
        } else {
            this.styleElem = document.createElement('style');
            this.styleElem.id = 'igniteui-theme';
            document.head.insertBefore(this.styleElem, this.document.head.lastElementChild);
            this.document.body.classList.add('custom-body');
        }
    }

    private createTypefaceLink(typeface: string) {
        const typefaceElem = this.document.createElement('link');
        typefaceElem.rel = 'stylesheet';
        typefaceElem.id = 'ignteui-theme-typeface';
        typefaceElem.href = this.typefaceUrl + typeface.split(' ').join('+');
        document.head.insertBefore(typefaceElem, this.document.head.lastElementChild);
    }
}
