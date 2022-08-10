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
import { NavDrawerHierarchicalComponent } from './navdrawer/nav-drawer-hierarchical/nav-drawer-hierarchical.component';

export const menusRoutes: Routes = [
    {
        component: NavDrawerHierarchicalComponent,
        path: 'navigation-drawer-hierarchical',
        data: { displayName: 'Hierachical Drawer Menu' },
        children: [
            { path: 'grid', component: NavDrawerHierarchicalComponent, data: { displayName: 'Grid' } },
            { path: 'tree-grid', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Tree Grid' } },
            { path: 'hierarchical-grid', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Hierarchical Grid' } },
            { path: 'pivot-grid', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Pivot Grid' } },
            { path: 'area-chart', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Area Chart' } },
            { path: 'bar-chart', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Bar Chart' } },
            { path: 'column-chart', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Column Chart' } },
            { path: 'pie-chart', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Pie Chart' } },
            { path: 'action-strip', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Action Strip' } },
            { path: 'dialog', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Dialog' } },
            { path: 'drag-drop', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Drag and Drop' } },
            { path: 'dock-manager', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Dock Manager' } },
            { path: 'expansion-panel', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Exspansion Panel' } },
            { path: 'layout', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Layout Manager' } },
            { path: 'banner', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Banner' } },
            { path: 'snackbar', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Snackbar' } },
            { path: 'toast', component:  NavDrawerHierarchicalComponent, data: { displayName: 'Toast' } }
        ]
    },
    {
        component: NavDrawerSimpleComponent,
        path: 'navigation-drawer-simple',
        data: { displayName: 'Simple Nav Drawer' }
    },
    {
        component: NavDrawerRoutingComponent,
        path: 'navigation-drawer-routing',
        data: { displayName: 'Nav Drawer Routing' },
        children: [
            { path: '', redirectTo: 'avatar', pathMatch: 'full', data: { displayName: 'Redirect to Avatar' } },
            { path: 'avatar', component: NavDrawerRoutingComponent, data: { displayName: 'Avatar' } },
            { path: 'badge', component:  NavDrawerRoutingComponent, data: { displayName: 'Badge' } },
            { path: 'button-group', component:  NavDrawerRoutingComponent, data: { displayName: 'Button Group' } }
        ]
    },
    {
        component: NavDrawerPinComponent,
        path: 'navigation-drawer-pin',
        data: { displayName: 'Pinned Nav Drawer' }
    },
    {
        component: NavDrawerStylingComponent,
        path: 'navigation-drawer-styling',
        data: { displayName: 'Nav Drawer Styling' },
        children: [
            { path: '', redirectTo: 'avatar', pathMatch: 'full', data: { displayName: 'Redirect to Avatar' } },
            { path: 'avatar', component: NavDrawerStylingComponent, data: { displayName: 'Avatar' } },
            { path: 'badge', component: NavDrawerStylingComponent, data: { displayName: 'Badge' } },
            { path: 'button-group', component: NavDrawerStylingComponent, data: { displayName: 'Button Group' } }
        ]
    },
    {
        component: NavDrawerMiniComponent,
        path: 'navigation-drawer-mini',
        data: { displayName: 'Mini Nav Drawer' }
    },
    {
        component: NavbarComponent,
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
