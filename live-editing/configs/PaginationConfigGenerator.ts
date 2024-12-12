import {
    IgxAccordionModule,
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxCardModule,
    IgxIconModule,
    IgxPaginatorModule,
    IgxRippleModule,
    IgxSliderModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';;

export class PaginationConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'PaginationSampleComponent',
            additionalFiles: ['/src/app/data/product.ts'],
            appConfig: BaseAppConfig
        }));

        return configs;
    }

}
