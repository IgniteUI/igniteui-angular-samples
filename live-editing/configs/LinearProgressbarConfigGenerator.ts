import {IgxButtonModule,
IgxIconModule,
IgxProgressBarModule,
IgxRippleModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class LinearProgressbarConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'LinearProgressbarComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxProgressBarModule', 'LinearProgressbarComponent'],
                ngDeclarations: ['LinearProgressbarComponent'],
                ngImports: ['IgxProgressBarModule']
            }),
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: 'LinearDynamicSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxProgressBarModule',
                    'IgxRippleModule',
                    'LinearDynamicSampleComponent'
                ],
                ngDeclarations: ['LinearDynamicSampleComponent'],
                ngImports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxProgressBarModule',
                    'IgxRippleModule'
                ]
            }),
            shortenComponentPathBy: "/data-display/linear-progressbar/"
        }));

        configs.push(new Config({
            component: 'LinearProgressbarSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxProgressBarModule', 'LinearProgressbarSample1Component'],
                ngDeclarations: ['LinearProgressbarSample1Component'],
                ngImports: ['IgxProgressBarModule']
            }),
            shortenComponentPathBy: "/data-display/linear-progressbar/"
        }));

        configs.push(new Config({
            component: 'LinearProgressbarSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxProgressBarModule', 'LinearProgressbarSample2Component'],
                ngDeclarations: ['LinearProgressbarSample2Component'],
                ngImports: ['IgxProgressBarModule']
            }),
            shortenComponentPathBy: "/data-display/linear-progressbar/"
        }));

        configs.push(new Config({
            component: 'LinearProgressbarStylingComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxProgressBarModule', 'LinearProgressbarStylingComponent'],
                ngDeclarations: ['LinearProgressbarStylingComponent'],
                ngImports: ['IgxProgressBarModule']
            }),
            shortenComponentPathBy: "/data-display/linear-progressbar"
        }));

        return configs;
    }
}
