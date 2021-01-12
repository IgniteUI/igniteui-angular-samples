import {IgxButtonGroupModule,
IgxButtonModule,
IgxDropDownModule,
IgxIconModule,
IgxInputGroupModule,
IgxSelectModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class SelectConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSelectModule', 'SelectSample1Component', 'IgxInputGroupModule'],
                ngDeclarations: ['SelectSample1Component'],
                ngImports: ['IgxSelectModule', 'IgxInputGroupModule']
            }),
            component: 'SelectSample1Component',
            shortenComponentPathBy: "/data-entries/select/"
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSelectModule', 'SelectSample2Component', 'IgxInputGroupModule',
                    'IgxDropDownModule', 'IgxIconModule'],
                ngDeclarations: ['SelectSample2Component'],
                ngImports: ['IgxSelectModule', 'IgxInputGroupModule', 'IgxDropDownModule', 'IgxIconModule']
            }),
            component: 'SelectSample2Component',
            shortenComponentPathBy: "/data-entries/select/"
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSelectModule', 'SelectSample4Component', 'IgxInputGroupModule'],
                ngDeclarations: ['SelectSample4Component'],
                ngImports: ['IgxSelectModule', 'IgxInputGroupModule']
            }),
            component: 'SelectSample4Component',
            shortenComponentPathBy: "/data-entries/select/"
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSelectModule', 'SelectInputDirectivesComponent', 'IgxInputGroupModule', 'IgxIconModule'],
                ngDeclarations: ['SelectInputDirectivesComponent'],
                ngImports: ['IgxSelectModule', 'IgxInputGroupModule', 'IgxIconModule']
            }),
            component: 'SelectInputDirectivesComponent'
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSelectModule', 'SelectHeaderFooterComponent', 'IgxInputGroupModule',
                    'IgxDropDownModule', 'IgxIconModule', 'IgxButtonGroupModule', 'IgxButtonModule'],
                ngDeclarations: ['SelectHeaderFooterComponent'],
                ngImports: ['IgxSelectModule', 'IgxInputGroupModule',
                    'IgxDropDownModule', 'IgxIconModule', 'IgxButtonGroupModule', 'IgxButtonModule']
            }),
            component: 'SelectHeaderFooterComponent',
            shortenComponentPathBy: "/data-entries/select/"
        }));

        return configs;
    }
}
