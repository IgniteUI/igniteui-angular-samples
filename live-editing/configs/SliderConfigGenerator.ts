import {IgxButtonModule,
IgxIconModule,
IgxInputGroupModule,
IgxSliderModule} from 'igniteui-angular';
import { HammerModule } from '@angular/platform-browser';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class SliderConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // slider sample 1
        configs.push(new Config({
            component: 'SliderSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'IgxSliderModule', 'SliderSample1Component', 'HammerModule'],
                ngDeclarations: ['SliderSample1Component'],
                ngImports: ['IgxInputGroupModule', 'IgxSliderModule', 'HammerModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 2
        configs.push(new Config({
            component: 'SliderSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'SliderSample2Component', 'HammerModule'],
                ngDeclarations: ['SliderSample2Component'],
                ngImports: ['IgxSliderModule', 'HammerModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 3
        configs.push(new Config({
            component: 'SliderSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'IgxSliderModule', 'SliderSample3Component', 'HammerModule'],
                ngDeclarations: ['SliderSample3Component'],
                ngImports: ['IgxInputGroupModule', 'IgxSliderModule', 'HammerModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 4
        configs.push(new Config({
            component: 'SliderSample4Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'SliderSample4Component', 'HammerModule'],
                ngDeclarations: ['SliderSample4Component'],
                ngImports: ['IgxSliderModule', 'HammerModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 5
        configs.push(new Config({
            component: 'SliderSample5Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'SliderSample5Component', 'HammerModule'],
                ngDeclarations: ['SliderSample5Component'],
                ngImports: ['IgxSliderModule', 'HammerModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 6
        configs.push(new Config({
            component: 'SliderSample6Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'SliderSample6Component', 'HammerModule'],
                ngDeclarations: ['SliderSample6Component'],
                ngImports: ['IgxSliderModule', 'HammerModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'SliderSecondaryTicksMirrorComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxIconModule', 'IgxSliderModule', 'SliderSecondaryTicksMirrorComponent', 'HammerModule'],
                ngDeclarations: ['SliderSecondaryTicksMirrorComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule', 'IgxSliderModule', 'HammerModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'SliderDiscreteTicksBottomComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'SliderDiscreteTicksBottomComponent', 'HammerModule'],
                ngDeclarations: ['SliderDiscreteTicksBottomComponent'],
                ngImports: ['IgxSliderModule', 'HammerModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'SliderTicksBottomtotopLabelsComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'IgxSliderModule', 'SliderTicksBottomtotopLabelsComponent', 'HammerModule'],
                ngDeclarations: ['SliderTicksBottomtotopLabelsComponent'],
                ngImports: ['IgxInputGroupModule', 'IgxSliderModule', 'HammerModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'SliderPrimaryTicksTopComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'SliderPrimaryTicksTopComponent', 'HammerModule'],
                ngDeclarations: ['SliderPrimaryTicksTopComponent'],
                ngImports: ['IgxSliderModule', 'HammerModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'SliderTimeframeComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'SliderTimeframeComponent', 'HammerModule'],
                ngDeclarations: ['SliderTimeframeComponent'],
                ngImports: ['IgxSliderModule', 'HammerModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'TickLabelsTemplateComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'TickLabelsTemplateComponent', 'HammerModule'],
                ngDeclarations: ['TickLabelsTemplateComponent'],
                ngImports: ['IgxSliderModule', 'HammerModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: 'AppSliderStylingComponent',
            additionalFiles: ["/src/app/interactions/slider/slider-styling-sample/layout.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSliderModule', 'AppSliderStylingComponent', 'HammerModule'],
                ngDeclarations: ['AppSliderStylingComponent'],
                ngImports: ['IgxSliderModule', 'HammerModule']
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));
        return configs;
    }
}
