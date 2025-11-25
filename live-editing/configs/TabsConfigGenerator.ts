import {RouterModule} from '@angular/router';
import { IgxAvatarModule } from 'igniteui-angular/avatar';
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxCardModule } from 'igniteui-angular/card';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxNavbarModule } from 'igniteui-angular/navbar';
import { IgxTabsModule } from 'igniteui-angular/tabs';
import { IgxButtonGroupModule } from 'igniteui-angular/button-group';
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
                "/src/app/layouts/tabs/views/view3/view3.component.html",
                "/src/app/layouts/tabs/tabs-sample-4/routes.ts"
            ],
             appConfig: {
                ...BaseAppConfig,
                routesConfig: {
                    router: true,
                    routesImportPath: './tabs-sample-4/routes'
                }
            },
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        configs.push(new Config({
            component: 'TabsStyleComponent',
            additionalFiles: ["/src/app/layouts/tabs/tabs-style/layout.scss"],
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
