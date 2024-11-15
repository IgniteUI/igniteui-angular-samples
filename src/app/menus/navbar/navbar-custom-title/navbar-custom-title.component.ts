import { Component } from '@angular/core';
import { IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent, IgxNavbarTitleDirective } from 'igniteui-angular';

@Component({
    selector: 'app-navbar-custom-title',
    templateUrl: './navbar-custom-title.component.html',
    styleUrls: ['./navbar-custom-title.component.scss'],
    imports: [IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent, IgxNavbarTitleDirective]
})
export class NavbarCustomTitleComponent { }
