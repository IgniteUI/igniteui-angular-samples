import {IgxButtonModule,
IgxToggleModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class ToggleConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // toggle sample
        configs.push(new Config({
            component: 'ToggleComponent',
            additionalFiles: ["/src/app/interactions/toggle/toggle-samples.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxToggleModule', 'ToggleComponent'],
                ngDeclarations: ['ToggleComponent'],
                ngImports: ['IgxButtonModule', 'IgxToggleModule']
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        // toggle sample 1
        configs.push(new Config({
            component: 'ToggleSample1Component',
            additionalFiles: ["/src/app/interactions/toggle/toggle-samples.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxToggleModule', 'ToggleSample1Component'],
                ngDeclarations: ['ToggleSample1Component'],
                ngImports: ['IgxButtonModule', 'IgxToggleModule']
            }),
            shortenComponentPathBy: "/interactions/toggle/"
        }));

        // toggle sample 2
        configs.push(new Config({
            component: 'ToggleSample2Component',
            additionalFiles: ["/src/app/interactions/toggle/toggle-samples.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxToggleModule', 'ToggleSample2Component'],
                ngDeclarations: ['ToggleSample2Component'],
                ngImports: ['IgxButtonModule', 'IgxToggleModule']
            }),
            shortenComponentPathBy: "/interactions/toggle/"
        }));

        // toggle sample 3
        configs.push(new Config({
            component: 'ToggleSample3Component',
            additionalFiles: ["/src/app/interactions/toggle/toggle-samples.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxToggleModule', 'ToggleSample3Component'],
                ngDeclarations: ['ToggleSample3Component'],
                ngImports: ['IgxButtonModule', 'IgxToggleModule']
            }),
            shortenComponentPathBy: "/interactions/toggle/"
        }));

        // toggle sample 4
        configs.push(new Config({
            component: 'ToggleSample4Component',
            additionalFiles: ["/src/app/interactions/toggle/toggle-samples.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxToggleModule', 'ToggleSample4Component'],
                ngDeclarations: ['ToggleSample4Component'],
                ngImports: ['IgxButtonModule', 'IgxToggleModule']
            }),
            shortenComponentPathBy: "/interactions/toggle/"
        }));

        return configs;
    }
}
