import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    ActionStripParagraphMenuComponent
} from './action-strip/action-strip-paragraph-menu/action-strip-paragraph-menu.component';
import {
    ActionStripStylingComponent
} from './action-strip/action-strip-paragraph-styling/action-strip-paragraph-styling.component';
import {
    ActionStripParagraphComponent
} from './action-strip/action-strip-paragraph/action-strip-paragraph.component';
import { menusRoutesData } from './menus-routes-data';
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

export const menusRoutes: Routes = [
    {
        component: NavDrawerSimpleComponent,
        data: menusRoutesData['navigation-drawer-simple'],
        path: 'navigation-drawer-simple'
    },
    // {
    //     component: NavDrawerRoutingComponent,
    //     data: menusRoutesData['navigation-drawer-routing'],
    //     path: 'navigation-drawer-routing',
    //     children: [
    //         { path: '', redirectTo: 'avatar' },
    //         { path: 'avatar', component: null},
    //         { path: 'badge', component:  null},
    //         { path: 'button-group', component:  null}
    //     ]
    // },
    {
        component: NavDrawerPinComponent,
        path: 'navigation-drawer-pin'
    },
    // {
    //     component: NavDrawerStylingComponent,
    //     path: 'navigation-drawer-styling',
    //     children: [
    //         { path: '', redirectTo: 'avatar' },
    //         { path: 'avatar', component: null },
    //         { path: 'badge', component: null },
    //         { path: 'button-group', component: null }
    //     ]
    // },
    {
        component: NavDrawerMiniComponent,
        path: 'navigation-drawer-mini'
    },
    {
        component: NavbarComponent,
        // tslint:disable-next-line:no-string-literal
        data: menusRoutesData['navbar'],
        path: 'navbar'
    },
    {
        component: NavbarSample1Component,
        data: menusRoutesData['navbar-sample-1'],
        path: 'navbar-sample-1'
    },
    {
        component: NavbarSample2Component,
        data: menusRoutesData['navbar-sample-2'],
        path: 'navbar-sample-2'
    },
    {
        component: NavbarSample3Component,
        data: menusRoutesData['navbar-sample-3'],
        path: 'navbar-sample-3'
    },
    {
        component: NavbarStyleComponent,
        data: menusRoutesData['navbar-style'],
        path: 'navbar-style'
    },
    {
        component: NavbarCustomTitleComponent,
        data: menusRoutesData['navbar-custom-title'],
        path: 'navbar-custom-title'
    },
    {
        component: ActionStripParagraphComponent,
        data: menusRoutesData['action-strip-paragraph'],
        path: 'action-strip-paragraph'
    },
    {
        component: ActionStripParagraphMenuComponent,
        data: menusRoutesData['action-strip-paragraph-menu'],
        path: 'action-strip-paragraph-menu'
    },
    {
        component: ActionStripStylingComponent,
        data: menusRoutesData['action-strip-styling'],
        path: 'action-strip-styling'
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(menusRoutes)
    ]
})
export class MenusRoutingModule { }
