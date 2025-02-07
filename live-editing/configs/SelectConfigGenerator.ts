import {IgxButtonGroupModule,
IgxButtonModule,
IgxDropDownModule,
IgxIconModule,
IgxInputGroupModule,
IgxSelectModule} from 'igniteui-angular';
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
            appConfig: BaseAppConfig,
            additionalFiles: ["/src/app/data-entries/select/select-styling/layout.scss"],
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
