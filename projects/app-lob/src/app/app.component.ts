import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { ThemableDirective } from '../../../../src/app/common/themable-app.directive';
import { SEOService } from './seo.service';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent extends ThemableDirective implements OnInit {
    public title = 'app-lob';

    constructor(
        @Inject(DOCUMENT) document: Document,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private seoService: SEOService) {
        super(document);
    }

    public ngOnInit() {
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            map(() => {
                let route = this.activatedRoute.firstChild;
                while (route.firstChild) { route = route.firstChild; }
                return route;
            })
        ).subscribe((event) => {
            this.seoService.updateHeadProperties(event.snapshot.data['title'] ?? event.parent.snapshot.data['title'],
                event.snapshot.data['title'] ?? event.parent.snapshot.data['description'], window.location.href);
        });
        super.ngOnInit();
    }
}

