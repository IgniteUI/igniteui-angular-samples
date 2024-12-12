import {RouterModule} from '@angular/router';
import {IgxAvatarModule,
IgxButtonModule,
IgxCardModule,
IgxIconModule,
IgxNavbarModule,
IgxRippleModule,
IgxTabsModule,
IgxButtonGroupModule } from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';;
export class TabsConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        TabsSample4Module: '../../src/app/layouts/tabs/tabs-sample-4/tabs-sample-4.module',
        View1Component: '../../src/app/layouts/tabs/views/view1/view1.component',
        View2Component: '../../src/app/layouts/tabs/views/view2/view2.component',
        View3Component: '../../src/app/layouts/tabs/views/view3/view3.component'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'TabsSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        configs.push(new Config({
            component: 'TabsSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        configs.push(new Config({
            component: 'TabsSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        configs.push(new Config({
            component: 'TabsSample4Component',
            additionalFiles: [
                "/src/app/layouts/tabs/views/view1/view1.component.ts",
                "/src/app/layouts/tabs/views/view1/view1.component.html",
                "/src/app/layouts/tabs/views/view2/view2.component.ts",
                "/src/app/layouts/tabs/views/view2/view2.component.html",
                "/src/app/layouts/tabs/views/view3/view3.component.ts",
                "/src/app/layouts/tabs/views/view3/view3.component.html"
            ],
            /* TODO: Adding the correct router config needs to be done separately */
            appConfig: { ...BaseAppConfig, ...{ router: true }},
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        configs.push(new Config({
            component: 'TabsStyleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        configs.push(new Config({
            component: 'TabsAlignmentComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        configs.push(new Config({
            component: 'TabsHeaderPrefixSuffixComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        return configs;
    }
}
