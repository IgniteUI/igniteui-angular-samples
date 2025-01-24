import {RouterModule} from '@angular/router';
import {IgxButtonModule,
IgxIconModule,
IgxLayoutModule,
IgxNavigationDrawerModule,
IgxRippleModule,
IgxToggleModule,
IgxTreeModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class NavdrawerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'NavDrawerSimpleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxNavigationDrawerModule',
                    'IgxRippleModule', 'IgxToggleModule', 'NavDrawerSimpleComponent'],
                ngDeclarations: ['NavDrawerSimpleComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxNavigationDrawerModule',
                    'IgxRippleModule', 'IgxToggleModule']
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: 'NavDrawerPinComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxLayoutModule',
                    'IgxNavigationDrawerModule', 'IgxRippleModule', 'IgxToggleModule', 'NavDrawerPinComponent'],
                ngDeclarations: ['NavDrawerPinComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxLayoutModule',
                    'IgxNavigationDrawerModule', 'IgxRippleModule', 'IgxToggleModule']
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: 'NavDrawerMiniComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxLayoutModule',
                    'IgxNavigationDrawerModule', 'IgxRippleModule', 'IgxToggleModule',
                    'NavDrawerMiniComponent'],
                ngDeclarations: ['NavDrawerMiniComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxLayoutModule',
                    'IgxNavigationDrawerModule', 'IgxRippleModule', 'IgxToggleModule']
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: 'NavDrawerRoutingComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxLayoutModule',
                    'IgxNavigationDrawerModule',
                    'IgxRippleModule',
                    'IgxToggleModule',
                    'NavDrawerRoutingComponent',
                    'RouterModule'
                ],
                ngDeclarations: ['NavDrawerRoutingComponent'],
                ngImports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxLayoutModule',
                    'IgxNavigationDrawerModule',
                    'IgxRippleModule',
                    'IgxToggleModule',
                    `
                    RouterModule.forRoot([
                        {path: "avatar", component: NavDrawerRoutingComponent},
                        {path: "badge", component: NavDrawerRoutingComponent},
                        {path: "button-group", component: NavDrawerRoutingComponent}
                    ])
                    `
                ]
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: 'NavDrawerStylingComponent',
            additionalFiles: [
                "/src/app/menus/navdrawer/nav-drawer-routing/nav-drawer-routing.component.ts",
                "/src/app/menus/navdrawer/nav-drawer-routing/nav-drawer-routing.component.html",
                "/src/app/menus/navdrawer/nav-drawer-routing/nav-drawer-routing.component.scss",
                "/src/app/menus/navdrawer/nav-drawer-styling/layout.scss"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxLayoutModule',
                    'IgxNavigationDrawerModule',
                    'IgxRippleModule',
                    'IgxToggleModule',
                    'NavDrawerRoutingComponent',
                    'NavDrawerStylingComponent',
                    'RouterModule'
                ],
                ngDeclarations: [
                    'NavDrawerRoutingComponent',
                    'NavDrawerStylingComponent'
                ],
                ngImports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxLayoutModule',
                    'IgxNavigationDrawerModule',
                    'IgxRippleModule',
                    'IgxToggleModule',
                    `
                    RouterModule.forRoot([
                        {path: "avatar", component: NavDrawerRoutingComponent},
                        {path: "badge", component: NavDrawerRoutingComponent},
                        {path: "button-group", component: NavDrawerRoutingComponent}
                    ])
                    `
                ]
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: 'NavDrawerHierarchicalComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxLayoutModule',
                    'IgxNavigationDrawerModule',
                    'IgxRippleModule',
                    'IgxToggleModule',
                    'NavDrawerHierarchicalComponent',
                    'IgxTreeModule',
                    'RouterModule'
                ],
                ngDeclarations: ['NavDrawerHierarchicalComponent'],
                ngImports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxLayoutModule',
                    'IgxNavigationDrawerModule',
                    'IgxRippleModule',
                    'IgxToggleModule',
                    'IgxTreeModule',
                    `
                    RouterModule.forRoot([
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
                    ])
                    `
                ]
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        return configs;
    }
}
