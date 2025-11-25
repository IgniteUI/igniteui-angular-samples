import { Component, ViewEncapsulation } from '@angular/core';
import { IgxNavbarComponent } from 'igniteui-angular/navbar';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-navbar',
    styleUrls: ['./navbar.component.scss'],
    templateUrl: './navbar.component.html',
    imports: [IgxNavbarComponent]
})
export class NavbarComponent { }
