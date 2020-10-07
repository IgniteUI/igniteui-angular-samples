import {IgxButtonModule,
IgxIconModule,
IgxInputGroupModule,
IgxSliderModule} from 'igniteui-angular';
import {AppModuleConfig} from './core/AppModuleConfig';
import {Config} from './core/Config';
import {IConfigGenerator} from './core/IConfigGenerator';
export class SliderConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // slider sample 1
        configs.push(new Config({
            component: 'SliderSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'IgxSliderModule', 'SliderSample1Component'],
                ngDeclarations: ['SliderSample1Component'],
                ngImports: ['IgxInputGroupModule', 'IgxSliderModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 2
        configs.push(new Config({
            component: 'SliderSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'SliderSample2Component'],
                ngDeclarations: ['SliderSample2Component'],
                ngImports: ['IgxSliderModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 3
        configs.push(new Config({
            component: 'SliderSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'IgxSliderModule', 'SliderSample3Component'],
                ngDeclarations: ['SliderSample3Component'],
                ngImports: ['IgxInputGroupModule', 'IgxSliderModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 4
        configs.push(new Config({
            component: 'SliderSample4Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'SliderSample4Component'],
                ngDeclarations: ['SliderSample4Component'],
                ngImports: ['IgxSliderModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 5
        configs.push(new Config({
            component: 'SliderSample5Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'SliderSample5Component'],
                ngDeclarations: ['SliderSample5Component'],
                ngImports: ['IgxSliderModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 6
        configs.push(new Config({
            component: 'SliderSample6Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'SliderSample6Component'],
                ngDeclarations: ['SliderSample6Component'],
                ngImports: ['IgxSliderModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'SliderSecondaryTicksMirrorComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxSliderModule', 'SliderSecondaryTicksMirrorComponent'],
                ngDeclarations: ['SliderSecondaryTicksMirrorComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxSliderModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'SliderDiscreteTicksBottomComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'SliderDiscreteTicksBottomComponent'],
                ngDeclarations: ['SliderDiscreteTicksBottomComponent'],
                ngImports: ['IgxSliderModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'SliderTicksBottomtotopLabelsComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'IgxSliderModule', 'SliderTicksBottomtotopLabelsComponent'],
                ngDeclarations: ['SliderTicksBottomtotopLabelsComponent'],
                ngImports: ['IgxInputGroupModule', 'IgxSliderModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'SliderPrimaryTicksTopComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'SliderPrimaryTicksTopComponent'],
                ngDeclarations: ['SliderPrimaryTicksTopComponent'],
                ngImports: ['IgxSliderModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'SliderTimeframeComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'SliderTimeframeComponent'],
                ngDeclarations: ['SliderTimeframeComponent'],
                ngImports: ['IgxSliderModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'TickLabelsTemplateComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'TickLabelsTemplateComponent'],
                ngDeclarations: ['TickLabelsTemplateComponent'],
                ngImports: ['IgxSliderModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'AppSliderStylingComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'AppSliderStylingComponent'],
                ngDeclarations: ['AppSliderStylingComponent'],
                ngImports: ['IgxSliderModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));
        return configs;
    }
}
