import { IgxButtonGroupModule } from 'igniteui-angular/button-group';
import { IgxButtonModule } from 'igniteui-angular/directives';
import { IgxDropDownModule } from 'igniteui-angular/drop-down';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
import { IgxSelectModule } from 'igniteui-angular/select';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class SelectConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'SelectSample1Component',
            shortenComponentPathBy: "/data-entries/select/"
        }));

        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'SelectSample2Component',
            shortenComponentPathBy: "/data-entries/select/"
        }));

        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'SelectSample4Component',
            shortenComponentPathBy: "/data-entries/select/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/data-entries/select/select-styling/layout.scss"],
            appConfig: BaseAppConfig,
            component: 'SelectStylingComponent',
            shortenComponentPathBy: "/data-entries/select/"
        }));

        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'SelectInputDirectivesComponent'
        }));

        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'SelectHeaderFooterComponent',
            shortenComponentPathBy: "/data-entries/select/"
        }));

        return configs;
    }
}
