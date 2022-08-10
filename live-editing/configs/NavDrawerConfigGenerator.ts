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
                "/src/app/menus/navdrawer/nav-drawer-routing/nav-drawer-routing.component.scss"
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
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxLayoutModule',
                    'IgxNavigationDrawerModule', 'IgxRippleModule', 'IgxToggleModule',
                    'NavDrawerHierarchicalComponent', 'IgxTreeModule'],
                ngDeclarations: ['NavDrawerHierarchicalComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxLayoutModule',
                    'IgxNavigationDrawerModule', 'IgxRippleModule', 'IgxToggleModule', 'IgxTreeModule']
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        return configs;
    }
}
