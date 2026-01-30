import { Component } from '@angular/core';
import { IgxNavbarActionDirective, IgxNavbarComponent, IgxNavbarTitleDirective } from 'igniteui-angular/navbar';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-navbar-custom-title',
    templateUrl: './navbar-custom-title.component.html',
    styleUrls: ['./navbar-custom-title.component.scss'],
    imports: [IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent, IgxNavbarTitleDirective]
})
export class NavbarCustomTitleComponent { }
