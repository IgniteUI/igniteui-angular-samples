import { Component, ViewEncapsulation } from '@angular/core';
import { IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-navbar-sample-1',
    styleUrls: ['./navbar-sample-1.component.scss'],
    templateUrl: './navbar-sample-1.component.html',
    imports: [IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent]
})
export class NavbarSample1Component { }
