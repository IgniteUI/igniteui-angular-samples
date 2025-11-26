import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective } from 'igniteui-angular';

@Component({
    selector: 'app-tabs-sample-4',
    styleUrls: ['./tabs-sample-4.component.scss'],
    templateUrl: './tabs-sample-4.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, RouterLinkActive, IgxTabHeaderComponent, RouterLink, IgxTabHeaderLabelDirective, RouterOutlet]
})
export class TabsSample4Component implements OnInit {
    private router = inject(Router);

    public path: string;

    public ngOnInit() {
        this.path = this.router.url;

        this.router.events.pipe(
            filter(e => e instanceof NavigationEnd)
        ).subscribe(args => this.path = args['url']);
    }
}
