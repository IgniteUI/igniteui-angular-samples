import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    IgxActionStripModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxToggleModule,
    IgxTreeModule
} from '@infragistics/igniteui-angular';
import {
    ActionStripParagraphMenuComponent
} from './action-strip/action-strip-paragraph-menu/action-strip-paragraph-menu.component';
import {
    ActionStripStylingComponent
} from './action-strip/action-strip-paragraph-styling/action-strip-paragraph-styling.component';
import {
    ActionStripParagraphComponent
} from './action-strip/action-strip-paragraph/action-strip-paragraph.component';
import { MenusRoutingModule } from './menus-routing.module';
import { NavbarSample1Component } from './navbar/navbar-sample-1/navbar-sample-1.component';
import { NavbarSample2Component } from './navbar/navbar-sample-2/navbar-sample-2.component';
import { NavbarSample3Component } from './navbar/navbar-sample-3/navbar-sample-3.component';
import { NavbarStyleComponent } from './navbar/navbar-style/navbar-style.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavDrawerMiniComponent } from './navdrawer/nav-drawer-mini/nav-drawer-mini.component';
import { NavDrawerPinComponent } from './navdrawer/nav-drawer-pin/nav-drawer-pin.component';
import { NavDrawerRoutingComponent } from './navdrawer/nav-drawer-routing/nav-drawer-routing.component';
import { NavDrawerSimpleComponent } from './navdrawer/nav-drawer-simple/nav-drawer-simple.component';
import { NavDrawerStylingComponent } from './navdrawer/nav-drawer-styling/nav-drawer-styling.component';
import { NavbarCustomTitleComponent } from './navbar/navbar-custom-title/navbar-custom-title.component';
import { NavDrawerHierarchicalComponent } from './navdrawer/nav-drawer-hierarchical/nav-drawer-hierarchical.component';

@NgModule({
    declarations: [
        NavDrawerMiniComponent,
        NavDrawerPinComponent,
        NavDrawerSimpleComponent,
        NavDrawerRoutingComponent,
        NavDrawerStylingComponent,
        NavbarComponent,
        NavbarSample1Component,
        NavbarSample2Component,
        NavbarSample3Component,
        NavbarStyleComponent,
        ActionStripParagraphComponent,
        ActionStripParagraphMenuComponent,
        ActionStripStylingComponent,
        NavbarCustomTitleComponent,
        NavDrawerHierarchicalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MenusRoutingModule,
        IgxActionStripModule,
        IgxButtonGroupModule,
        IgxButtonModule,
        IgxIconModule,
        IgxLayoutModule,
        IgxNavigationDrawerModule,
        IgxRadioModule,
        IgxRippleModule,
        IgxSwitchModule,
        IgxToggleModule,
        IgxNavbarModule,
        IgxTreeModule
    ]
})
export class MenusModule { }
