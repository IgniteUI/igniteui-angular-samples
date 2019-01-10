import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavdrawerComponent } from './navdrawer/navdrawer.component';
import { NavDrawerMiniComponent } from './navdrawer/nav-drawer-mini/nav-drawer-mini.component';
import { NavDrawerPinComponent } from './navdrawer/nav-drawer-pin/nav-drawer-pin.component';
import { NavDrawerSimpleComponent } from './navdrawer/nav-drawer-simple/nav-drawer-simple.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarSample1Component } from './navbar/navbar-sample-1/navbar-sample-1.component';
import { NavbarSample2Component } from './navbar/navbar-sample-2/navbar-sample-2.component';
import { FormsModule } from '@angular/forms';
import { MenusRoutingModule } from './menus-routing.module';
import { IgxButtonModule, IgxIconModule, IgxLayoutModule, IgxNavigationDrawerModule, IgxRadioModule, IgxRippleModule, IgxSwitchModule, IgxToggleModule, IgxNavbarModule } from 'igniteui-angular';

@NgModule({
    declarations: [
        NavdrawerComponent,
        NavDrawerMiniComponent,
        NavDrawerPinComponent,
        NavDrawerSimpleComponent,
        NavbarComponent,
        NavbarSample1Component,
        NavbarSample2Component
    ],
    imports: [
        CommonModule,
        FormsModule,
        MenusRoutingModule,
        IgxButtonModule,
        IgxIconModule,
        IgxLayoutModule,
        IgxNavigationDrawerModule,
        IgxRadioModule,
        IgxRippleModule,
        IgxSwitchModule,
        IgxToggleModule,
        IgxNavbarModule
    ]
})
export class MenusModule { }
