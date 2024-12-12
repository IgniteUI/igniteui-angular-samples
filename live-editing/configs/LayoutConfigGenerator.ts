import {IgxButtonGroupModule,
IgxButtonModule,
IgxLayoutModule,
IgxRippleModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class LayoutConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(
            new Config({
                component: 'LayoutAlignItemsComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: 'LayoutContentSpaceComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: 'LayoutCustomOrderComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: 'LayoutDirectionColumnComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: 'LayoutDirectionRowComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: 'LayoutJustifyContentComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: 'LayoutSampleComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/layouts/"
            }),
            new Config({
                component: 'LayoutWrapComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/layouts/"
            })
        );

        return configs;
    }
}
