
import { Component, HostListener, OnInit, DOCUMENT, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html',
    imports: [RouterOutlet]
})
export class AppComponent implements OnInit {
    private document = inject<Document>(DOCUMENT);

    public title = 'Samples';
    private theme = 'default-theme';
    private styleElem: HTMLStyleElement;
    private typefacesLoaded = ['Titillium Web', 'Roboto'];
    private typefaceUrl = 'https://fonts.googleapis.com/css?family=';

    public ngOnInit() {
        this.createThemeStyle();
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    @HostListener('window:message', ['$event'])
    protected onMessage(e: MessageEvent) {
        if (e.origin === e.data.origin && typeof e.data.themeStyle === 'string') {
            this.styleElem.textContent = e.data.themeStyle;
            const typeface = window.getComputedStyle(this.document.body).fontFamily.replace(/[\'\"]/g, '');
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
        let typefaceElem = this.document.getElementById('igniteui-theme-typeface') as HTMLLinkElement;
        if (!typefaceElem) {
            typefaceElem = this.document.createElement('link');
            typefaceElem.rel = 'stylesheet';
            typefaceElem.id = 'igniteui-theme-typeface';
            this.document.head.appendChild(typefaceElem);
        }
        typefaceElem.href = this.typefaceUrl + typeface.split(' ').join('+');
    }

    private createThemeStyle() {
        this.styleElem = this.document.createElement('style');
        this.styleElem.id = 'igniteui-theme';
        this.document.head.appendChild(this.styleElem);
        this.document.body.classList.add('custom-body');
    }
}
