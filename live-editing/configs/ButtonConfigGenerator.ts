import {IgxButtonGroupModule,
IgxButtonModule,
IgxIconModule,
IgxRippleModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { ButtonsRoundnessComponent } from '../../src/app/data-entries/buttons/buttons-roundness-sample/buttons-roundness-sample';
export class ButtonConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // buttons sample 1
        configs.push(new Config({
            component: 'ButtonsSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'ButtonsSample1Component'],
                ngDeclarations: ['ButtonsSample1Component'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule']
            }),
            shortenComponentPathBy: "/data-entries/buttons/"
        }));

        // buttons roundness
        configs.push(new Config({
            component: 'ButtonsDisabledComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'ButtonsDisabledComponent'],
                ngDeclarations: ['ButtonsDisabledComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule']
            }),
            shortenComponentPathBy: "/data-entries/buttons/"
        }));

        // buttons display density
        configs.push(new Config({
            component: 'ButtonsDisplayDensityComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxButtonGroupModule',
                    'ButtonsDisplayDensityComponent'],
                ngDeclarations: ['ButtonsDisplayDensityComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxButtonGroupModule']
            }),
            shortenComponentPathBy: "/data-entries/buttons/"
        }));

        configs.push(new Config({
            component: 'ButtonsRoundnessComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'ButtonsRoundnessComponent'],
                ngDeclarations: ['ButtonsRoundnessComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule']
            }),
            shortenComponentPathBy: "/data-entries/buttons/"
        }));

        // button style
        configs.push(new Config({
            component: 'ButtonsStyleComponent',
            additionalFiles: ["/src/app/data-entries/buttons/buttons-style/layout.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxButtonGroupModule',
                    'ButtonsStyleComponent'],
                ngDeclarations: ['ButtonsStyleComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxRippleModule', 'IgxButtonGroupModule']
            }),
            shortenComponentPathBy: "/data-entries/buttons/"
        }));

        return configs;
    }
}
