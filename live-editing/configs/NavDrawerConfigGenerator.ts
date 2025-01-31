import {RouterModule} from '@angular/router';
import {IgxButtonModule,
IgxIconModule,
IgxLayoutModule,
IgxNavigationDrawerModule,
IgxRippleModule,
IgxToggleModule,
IgxTreeModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class NavdrawerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'NavDrawerSimpleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: 'NavDrawerPinComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: 'NavDrawerMiniComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: 'NavDrawerRoutingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: 'NavDrawerStylingComponent',
            additionalFiles: [
                "/src/app/menus/navdrawer/nav-drawer-routing/nav-drawer-routing.component.ts",
                "/src/app/menus/navdrawer/nav-drawer-routing/nav-drawer-routing.component.html",
                "/src/app/menus/navdrawer/nav-drawer-routing/nav-drawer-routing.component.scss"
            ],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        configs.push(new Config({
            component: 'NavDrawerHierarchicalComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/menus/navdrawer/"
        }));

        return configs;
    }
}
