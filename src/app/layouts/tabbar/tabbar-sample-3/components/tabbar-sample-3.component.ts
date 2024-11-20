import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-tabbar-sample-3',
    styleUrls: ['./tabbar-sample-3.component.scss'],
    templateUrl: './tabbar-sample-3.component.html',
    standalone: false
})
export class TabbarSample3Component implements OnInit {
    public path: string;

    constructor(private router: Router) { }

    public ngOnInit() {
        this.path = this.router.url;

        this.router.events.pipe(
            filter(e => e instanceof NavigationEnd)
        ).subscribe(args => this.path = args['url']);
    }
}
