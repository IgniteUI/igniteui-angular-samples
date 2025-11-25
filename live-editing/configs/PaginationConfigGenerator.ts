import { IgxAccordionModule } from 'igniteui-angular/accordion';
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxButtonGroupModule } from 'igniteui-angular/button-group';
import { IgxCardModule } from 'igniteui-angular/card';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxPaginatorModule } from 'igniteui-angular/paginator';
import { IgxSliderModule } from 'igniteui-angular/slider';
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
