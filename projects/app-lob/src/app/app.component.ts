import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { SEOService } from './seo.service';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    public title = 'app-lob';
    private isIE = !((window as any).ActiveXObject) && 'ActiveXObject' in window;
    private theme = 'default-theme';
    private styleElem: HTMLStyleElement;
    private typefacesLoaded = ['Titillium Web', 'Roboto'];
    private typefaceUrl = 'https://fonts.googleapis.com/css?family=';

    constructor(@Inject(DOCUMENT) private document: Document, private router: Router,
        private activatedRoute: ActivatedRoute, private seoService: SEOService) { }

    public ngOnInit() {
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => {
                let route = this.activatedRoute.firstChild;
                while (route.firstChild) {route = route.firstChild;}
                return route;
            })
        )
            .subscribe((event) => {
                this.seoService.updateHeadProperties(event.snapshot.data['title'] ?? event.parent.snapshot.data['title'],
                    event.snapshot.data['title'] ?? event.parent.snapshot.data['description'], window.location.href);
            });
        this.createThemeStyle();
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    @HostListener('window:message', ['$event'])
    private onMessage(e: MessageEvent) {
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
        const typefaceElem = this.document.createElement('link');
        typefaceElem.rel = 'stylesheet';
        typefaceElem.id = 'ignteui-theme-typeface';
        typefaceElem.href = this.typefaceUrl + typeface.split(' ').join('+');
        document.head.insertBefore(typefaceElem, this.document.head.lastElementChild);
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
}

