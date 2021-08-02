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
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';

export class PaginationConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'PaginationSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPaginatorModule','IgxRippleModule',
                'IgxButtonGroupModule', 'IgxButtonModule', 'IgxIconModule', 'IgxCardModule'],
                ngDeclarations: ['PaginationSampleComponent'],
                ngImports: ['IgxPaginatorModule', 'IgxRippleModule', 'IgxButtonGroupModule',
                'IgxButtonModule', 'IgxIconModule', 'IgxCardModule']
            })
        }));

        return configs;
    }

}
