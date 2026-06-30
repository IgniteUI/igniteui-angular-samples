import { Component, ViewEncapsulation } from '@angular/core';
import { IgxNavbarActionDirective, IgxNavbarComponent } from 'igniteui-angular/navbar';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-navbar-sample-2',
    styleUrls: ['./navbar-sample-2.component.scss'],
    templateUrl: './navbar-sample-2.component.html',
    imports: [IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent]
})
export class NavbarSample2Component { }
