/* tslint:disable:object-literal-sort-keys */
import { IgxButtonModule, IgxIconModule, IgxInputGroupModule, IgxSliderModule } from "igniteui-angular";
import {
    SliderDiscreteTicksBottomComponent
} from "../../src/app/interactions/slider/discrete-slider-ticks-bottom/discrete-slider-ticks-bottom.component";
import {
    SliderPrimaryTicksTopComponent
} from "../../src/app/interactions/slider/slider-primary-ticks-top/slider-primary-ticks-top.component";
import { SliderSample1Component } from "../../src/app/interactions/slider/slider-sample-1/slider-sample-1.component";
import { SliderSample2Component } from "../../src/app/interactions/slider/slider-sample-2/slider-sample-2.component";
import { SliderSample3Component } from "../../src/app/interactions/slider/slider-sample-3/slider-sample-3.component";
import { SliderSample4Component } from "../../src/app/interactions/slider/slider-sample-4/slider-sample-4.component";
import { SliderSample5Component } from "../../src/app/interactions/slider/slider-sample-5/slider-sample-5.component";
import { SliderSample6Component } from "../../src/app/interactions/slider/slider-sample-6/slider-sample-6.component";
import {
    SliderSecondaryTicksMirrorComponent
} from "../../src/app/interactions/slider/slider-secondary-ticks-mirror/slider-secondary-ticks-mirror.component";
import {
    TickLabelsTemplateComponent
} from "../../src/app/interactions/slider/slider-tick-labels-template/tick-labels-template.component";
import {
    SliderTicksBottomtotopLabelsComponent
} from "../../src/app/interactions/slider/slider-ticks-bottomtotop-labels/slider-ticks-bottomtotop-labels.component";
import {
    SliderTimeframeComponent
} from "../../src/app/interactions/slider/slider-timeframe/slider-timeframe.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class SliderConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // slider sample 1
        configs.push(new Config({
            component: SliderSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxInputGroupModule, IgxSliderModule, SliderSample1Component],
                ngDeclarations: [SliderSample1Component],
                ngImports: [IgxInputGroupModule, IgxSliderModule]
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 2
        configs.push(new Config({
            component: SliderSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSliderModule, SliderSample2Component],
                ngDeclarations: [SliderSample2Component],
                ngImports: [IgxSliderModule]
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 3
        configs.push(new Config({
            component: SliderSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxInputGroupModule, IgxSliderModule, SliderSample3Component],
                ngDeclarations: [SliderSample3Component],
                ngImports: [IgxInputGroupModule, IgxSliderModule]
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 4
        configs.push(new Config({
            component: SliderSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSliderModule, SliderSample4Component],
                ngDeclarations: [SliderSample4Component],
                ngImports: [IgxSliderModule]
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 5
        configs.push(new Config({
            component: SliderSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSliderModule, SliderSample5Component],
                ngDeclarations: [SliderSample5Component],
                ngImports: [IgxSliderModule]
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        // slider sample 6
        configs.push(new Config({
            component: SliderSample6Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSliderModule, SliderSample6Component],
                ngDeclarations: [SliderSample6Component],
                ngImports: [IgxSliderModule]
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: SliderSecondaryTicksMirrorComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxSliderModule, SliderSecondaryTicksMirrorComponent],
                ngDeclarations: [SliderSecondaryTicksMirrorComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxSliderModule]
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: SliderDiscreteTicksBottomComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSliderModule, SliderDiscreteTicksBottomComponent],
                ngDeclarations: [SliderDiscreteTicksBottomComponent],
                ngImports: [IgxSliderModule]
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: SliderTicksBottomtotopLabelsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxInputGroupModule, IgxSliderModule, SliderTicksBottomtotopLabelsComponent],
                ngDeclarations: [SliderTicksBottomtotopLabelsComponent],
                ngImports: [IgxInputGroupModule, IgxSliderModule]
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: SliderPrimaryTicksTopComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSliderModule, SliderPrimaryTicksTopComponent],
                ngDeclarations: [SliderPrimaryTicksTopComponent],
                ngImports: [IgxSliderModule]
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: SliderTimeframeComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSliderModule, SliderTimeframeComponent],
                ngDeclarations: [SliderTimeframeComponent],
                ngImports: [IgxSliderModule]
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        configs.push(new Config({
            component: TickLabelsTemplateComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSliderModule, TickLabelsTemplateComponent],
                ngDeclarations: [TickLabelsTemplateComponent],
                ngImports: [IgxSliderModule]
            }),
            shortenComponentPathBy: "/interactions/slider/"
        }));

        return configs;
    }
}
