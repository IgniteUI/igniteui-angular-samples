import { IgxAvatarModule } from 'igniteui-angular/avatar';
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxCardModule } from 'igniteui-angular/card';
import { IgxExpansionPanelModule } from 'igniteui-angular/expansion-panel';
import { IgxGridModule } from 'igniteui-angular/grids/grid';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
import { IgxToastModule } from 'igniteui-angular/toast';
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
            shortenComponentPathBy: "/layouts/expansion-panel/"
        }));

        return configs;
    }
}
