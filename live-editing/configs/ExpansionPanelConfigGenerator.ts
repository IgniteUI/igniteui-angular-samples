import {IgxAvatarModule,
IgxButtonModule,
IgxCardModule,
IgxExpansionPanelModule,
IgxGridModule,
IgxIconModule,
IgxInputGroupModule,
IgxRippleModule,
IgxToastModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class ExpansionPanelConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'ExpansionPanelSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/expansion-panel/"
        }));

        configs.push(new Config({
            component: 'ExpansionPanelSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/expansion-panel/"
        }));

        configs.push(new Config({
            component: 'ExpansionPanelSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/expansion-panel/"
        }));

        configs.push(new Config({
            component: 'ExpansionPanelSample4Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/expansion-panel/"
        }));

        configs.push(new Config({
            component: 'ExpansionPanelSample5Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/layouts/expansion-panel/"
        }));

        configs.push(new Config({
            component: 'ExpansionPanelStylingComponent',
            additionalFiles: ["/src/app/layouts/expansion-panel/expansion-styling/layout.scss"],
            appConfig: BaseAppConfig,
            additionalFiles: ["/src/app/layouts/expansion-panel/expansion-styling/layout.scss"],
            shortenComponentPathBy: "/layouts/expansion-panel/"
        }));

        return configs;
    }
}
