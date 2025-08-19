import { Component } from '@angular/core';
import { IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-navbar-tailwind-style',
    styleUrls: ['./navbar-tailwind-style.component.scss'],
    templateUrl: './navbar-tailwind-style.component.html',
    imports: [IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent]
})

export class NavbarTailwindStyleComponent { }
