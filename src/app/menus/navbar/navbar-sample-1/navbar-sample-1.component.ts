import { Component, ViewEncapsulation } from '@angular/core';
import { IgxNavbarActionDirective, IgxNavbarComponent } from 'igniteui-angular/navbar';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-navbar-sample-1',
    styleUrls: ['./navbar-sample-1.component.scss'],
    templateUrl: './navbar-sample-1.component.html',
    imports: [IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent]
})
export class NavbarSample1Component { }
