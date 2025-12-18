import { Component } from '@angular/core';
import { IgxNavbarActionDirective, IgxNavbarComponent } from 'igniteui-angular/navbar';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-navbar-tailwind-style',
    styleUrls: ['./navbar-tailwind-style.component.scss'],
    templateUrl: './navbar-tailwind-style.component.html',
    imports: [IgxNavbarComponent, IgxNavbarActionDirective, IgxIconButtonDirective, IgxIconComponent]
})

export class NavbarTailwindStyleComponent { }
