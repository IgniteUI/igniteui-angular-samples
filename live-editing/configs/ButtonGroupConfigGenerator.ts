import {IgxButtonGroupModule,
IgxButtonModule,
IgxIconModule,
IgxRippleModule} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class ButtonGroupConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // button group 1
        configs.push(new Config({
            component: 'ButtonGroupSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonGroupModule', 'ButtonGroupSample1Component', 'IgxRippleModule',
                    'IgxIconModule', 'IgxButtonModule'],
                ngDeclarations: ['ButtonGroupSample1Component'],
                ngImports: ['IgxButtonGroupModule', 'IgxRippleModule', 'IgxIconModule', 'IgxButtonModule']
            }),
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group 2
        configs.push(new Config({
            component: 'ButtonGroupSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonGroupModule', 'ButtonGroupSample2Component', 'IgxButtonModule', 'IgxRippleModule'],
                ngDeclarations: ['ButtonGroupSample2Component'],
                ngImports: ['IgxButtonGroupModule', 'IgxButtonModule', 'IgxRippleModule']
            }),
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group 3
        configs.push(new Config({
            component: 'ButtonGroupSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonGroupModule', 'ButtonGroupSample3Component'],
                ngDeclarations: ['ButtonGroupSample3Component'],
                ngImports: ['IgxButtonGroupModule']
            }),
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group 4
        configs.push(new Config({
            component: 'ButtonGroupSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonGroupModule', 'ButtonGroupSampleComponent', 'IgxIconModule',
                    'IgxButtonModule', 'IgxRippleModule'],
                ngDeclarations: ['ButtonGroupSampleComponent'],
                ngImports: ['IgxButtonGroupModule', 'IgxIconModule', 'IgxButtonModule', 'IgxRippleModule']
            }),
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group 5
        configs.push(new Config({
            component: 'ButtonGroupSample5Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonGroupModule', 'ButtonGroupSample5Component'],
                ngDeclarations: ['ButtonGroupSample5Component'],
                ngImports: ['IgxButtonGroupModule']
            }),
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group style
        configs.push(new Config({
            component: 'ButtonGroupStyleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonGroupModule', 'ButtonGroupStyleComponent', 'IgxRippleModule', 'IgxIconModule', 'IgxButtonModule'],
                ngDeclarations: ['ButtonGroupStyleComponent'],
                ngImports: ['IgxButtonGroupModule', 'IgxRippleModule', 'IgxIconModule', 'IgxButtonModule']
            }),
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        return configs;
    }
}
