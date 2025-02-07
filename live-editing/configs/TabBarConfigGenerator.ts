import {RouterModule} from '@angular/router';
import {IgxBottomNavModule, IgxIconModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class TabBarConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        TabbarSample3Module: '../../src/app/layouts/tabbar/tabbar-sample-3/tabbar-sample-3.module',
        TabbarView1Component: '../../src/app/layouts/tabbar/views/view1/view1.component',
        TabbarView2Component: '../../src/app/layouts/tabbar/views/view2/view2.component',
        TabbarView3Component: '../../src/app/layouts/tabbar/views/view3/view3.component'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // tabbar sample 1
        configs.push(new Config({
            component: 'TabbarSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tabbar/"
        }));

        // tabbar sample 2
        configs.push(new Config({
            component: 'TabbarSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tabbar/"
        }));

        // tabbar sample 3
        configs.push(new Config({
            component: 'TabbarSample3Component',
            additionalFiles: [
                "/src/app/layouts/tabbar/views/view1/view1.component.ts",
                "/src/app/layouts/tabbar/views/view1/view1.component.html",
                "/src/app/layouts/tabbar/views/view2/view2.component.ts",
                "/src/app/layouts/tabbar/views/view2/view2.component.html",
                "/src/app/layouts/tabbar/views/view3/view3.component.ts",
                "/src/app/layouts/tabbar/views/view3/view3.component.html"
            ],
            /* TODO: Adding the correct router config needs to be done separately */
            appConfig: { ...BaseAppConfig, ...{ router: true }},
            shortenComponentPathBy: "/layouts/tabbar/"
        }));

        // tabbar styling sample
        configs.push(new Config({
            component: 'TabbarStyleComponent',
            additionalFiles: ["/src/app/layouts/tabbar/tabbar-style/layout.scss"],
            appConfig: BaseAppConfig,
            additionalFiles: ["/src/app/layouts/tabbar/tabbar-style/layout.scss"],
            shortenComponentPathBy: "/layouts/tabbar/"
        }));

        return configs;
    }
}
