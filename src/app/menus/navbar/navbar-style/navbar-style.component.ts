import { Component } from '@angular/core';
import { IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-navbar-style',
    styleUrls: ['./navbar-style.component.scss'],
    templateUrl: './navbar-style.component.html',
    imports: [IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent]
})
export class NavbarStyleComponent { }
