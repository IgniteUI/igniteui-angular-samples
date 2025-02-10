/* eslint-disable max-len */
import {
    IgxActionStripModule,
    IgxRippleModule,
    IgxButtonModule,
    IgxIconModule,
    IgxButtonGroupModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class ActionStripConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'ActionStripParagraphComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/menus/action-strip/'
        }));

        configs.push(new Config({
            component: 'ActionStripParagraphMenuComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/menus/action-strip/'
        }));

        configs.push(new Config({
            component: 'ActionStripStylingComponent',
            additionalFiles: ["/src/app/menus/action-strip/action-strip-paragraph-styling/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/menus/action-strip/'
        }));

        return configs;
    }
}
