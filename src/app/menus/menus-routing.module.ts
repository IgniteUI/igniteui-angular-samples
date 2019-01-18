import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavbarSample1Component } from "./navbar/navbar-sample-1/navbar-sample-1.component";
import { NavbarSample2Component } from "./navbar/navbar-sample-2/navbar-sample-2.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NavDrawerMiniComponent } from "./navdrawer/nav-drawer-mini/nav-drawer-mini.component";
import { NavDrawerPinComponent } from "./navdrawer/nav-drawer-pin/nav-drawer-pin.component";
import { NavDrawerSimpleComponent } from "./navdrawer/nav-drawer-simple/nav-drawer-simple.component";
import { NavdrawerComponent } from "./navdrawer/navdrawer.component";

export const menusRoutes: Routes = [
    {
        component: NavdrawerComponent,
        path: "navigation-drawer"
    },
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
        data: { displayName: "Navbar Overview", parentName: "Navbar" },
        path: "navbar"
    },
    {
        component: NavbarSample1Component,
        data: { displayName: "Navbar Action Button Icon", parentName: "Navbar" },
        path: "navbar-sample-1"
    },
    {
        component: NavbarSample2Component,
        data: { displayName: "Navbar Custom Action Icon", parentName: "Navbar" },
        path: "navbar-sample-2"
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
