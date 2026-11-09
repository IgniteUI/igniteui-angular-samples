import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, RouterLinkActive, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IgxBottomNavComponent, IgxBottomNavHeaderComponent, IgxBottomNavHeaderIconDirective, IgxBottomNavItemComponent } from 'igniteui-angular/bottom-nav';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-tabbar-sample-3',
    styleUrls: ['./tabbar-sample-3.component.scss'],
    templateUrl: './tabbar-sample-3.component.html',
    imports: [RouterOutlet, IgxBottomNavComponent, IgxBottomNavItemComponent, RouterLinkActive, IgxBottomNavHeaderComponent, RouterLink, IgxIconComponent, IgxBottomNavHeaderIconDirective]
})
export class TabbarSample3Component implements OnInit {
    private router = inject(Router);

    public path: string;

    public ngOnInit() {
        this.path = this.router.url;

        this.router.events.pipe(
            filter(e => e instanceof NavigationEnd)
        ).subscribe(args => this.path = args['url']);
    }
}
