/* tslint:disable:object-literal-sort-keys */
import {
    IgxButtonModule, IgxIconModule, IgxLayoutModule,
    IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule
} from "igniteui-angular";
import { NavDrawerMiniComponent } from "../../src/app/menus/navdrawer/nav-drawer-mini/nav-drawer-mini.component";
import { NavDrawerPinComponent } from "../../src/app/menus/navdrawer/nav-drawer-pin/nav-drawer-pin.component";
import { NavDrawerSimpleComponent } from "../../src/app/menus/navdrawer/nav-drawer-simple/nav-drawer-simple.component";
import { NavDrawerStyledComponent } from "../../src/app/menus/navdrawer/nav-drawer-styled/nav-drawer-styled.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class NavdrawerConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: NavDrawerSimpleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule,
                    IgxRippleModule, IgxToggleModule, NavDrawerSimpleComponent],
                ngDeclarations: [NavDrawerSimpleComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule,
                    IgxRippleModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: NavDrawerPinComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxLayoutModule,
                    IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule, NavDrawerPinComponent],
                ngDeclarations: [NavDrawerPinComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxLayoutModule,
                    IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: NavDrawerMiniComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxLayoutModule,
                    IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule,
                    NavDrawerMiniComponent],
                ngDeclarations: [NavDrawerMiniComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxLayoutModule,
                    IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: NavDrawerStyledComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxLayoutModule,
                    IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule,
                    NavDrawerStyledComponent],
                ngDeclarations: [NavDrawerStyledComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxLayoutModule,
                    IgxNavigationDrawerModule, IgxRippleModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        return configs;
    }
}
