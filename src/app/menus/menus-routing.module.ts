import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { menusRoutesData } from "./menus-routes-data";
import { NavbarSample1Component } from "./navbar/navbar-sample-1/navbar-sample-1.component";
import { NavbarSample2Component } from "./navbar/navbar-sample-2/navbar-sample-2.component";
import { NavbarStyleComponent } from "./navbar/navbar-style/navbar-style.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavDrawerMiniComponent } from "./navdrawer/nav-drawer-mini/nav-drawer-mini.component";
import { NavDrawerPinComponent } from "./navdrawer/nav-drawer-pin/nav-drawer-pin.component";
import { NavDrawerSimpleComponent } from "./navdrawer/nav-drawer-simple/nav-drawer-simple.component";

export const menusRoutes: Routes = [
    {
        component: NavDrawerSimpleComponent,
        path: "navigation-drawer-simple"
    },
    {
        component: NavDrawerPinComponent,
        path: "navigation-drawer-pin"
    },
    {
        component: NavDrawerMiniComponent,
        path: "navigation-drawer-mini"
    },
    {
        component: NavbarComponent,
        // tslint:disable-next-line:no-string-literal
        data: menusRoutesData["navbar"],
        path: "navbar"
    },
    {
        component: NavbarSample1Component,
        data: menusRoutesData["navbar-sample-1"],
        path: "navbar-sample-1"
    },
    {
        component: NavbarSample2Component,
        data: menusRoutesData["navbar-sample-2"],
        path: "navbar-sample-2"
    },
    {
        component: NavbarStyleComponent,
        data: menusRoutesData["navbar-style"],
        path: "navbar-style"
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
