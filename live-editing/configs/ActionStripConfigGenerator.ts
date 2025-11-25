/* eslint-disable max-len */
import { IgxActionStripModule } from 'igniteui-angular/action-strip';
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxButtonGroupModule } from 'igniteui-angular/button-group';
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
