/* tslint:disable:object-literal-sort-keys */
import {
    IgxButtonModule, IgxIconModule, IgxLayoutModule, IgxNavigationDrawerModule,
    IgxRadioModule, IgxRippleModule, IgxSwitchModule, IgxToggleModule
} from "igniteui-angular/main";
import { NavDrawerMiniComponent } from "../../src/app/navdrawer/nav-drawer-mini/nav-drawer-mini.component";
import { NavDrawerPinComponent } from "../../src/app/navdrawer/nav-drawer-pin/nav-drawer-pin.component";
import { NavDrawerSimpleComponent } from "../../src/app/navdrawer/nav-drawer-simple/nav-drawer-simple.component";
import { NavdrawerComponent } from "../../src/app/navdrawer/navdrawer.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class NavdrawerConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: NavdrawerComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxLayoutModule,
                    IgxNavigationDrawerModule, IgxRadioModule, IgxRippleModule,
                    IgxSwitchModule, IgxToggleModule, NavdrawerComponent],
                ngDeclarations: [NavdrawerComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxLayoutModule, IgxNavigationDrawerModule,
                    IgxRadioModule, IgxRippleModule, IgxSwitchModule, IgxToggleModule]
            })
        }));

        configs.push(new Config({
            component: NavDrawerSimpleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule,
                    IgxRippleModule, IgxToggleModule, NavDrawerSimpleComponent],
                ngDeclarations: [NavDrawerSimpleComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule,
                    IgxRippleModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/navdrawer/"
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
            shortenComponentPathBy: "/navdrawer/"
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
            shortenComponentPathBy: "/navdrawer/"
        }));

        return configs;
    }
}
