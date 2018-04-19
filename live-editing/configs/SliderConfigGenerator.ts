/* tslint:disable:object-literal-sort-keys */
import { IgxInputGroupModule, IgxSliderModule } from "igniteui-angular/main";
import { SliderSample1Component } from "../../src/app/slider/slider-sample-1/slider-sample-1.component";
import { SliderSample2Component } from "../../src/app/slider/slider-sample-2/slider-sample-2.component";
import { SliderSample3Component } from "../../src/app/slider/slider-sample-3/slider-sample-3.component";
import { SliderSample4Component } from "../../src/app/slider/slider-sample-4/slider-sample-4.component";
import { SliderSample5Component } from "../../src/app/slider/slider-sample-5/slider-sample-5.component";
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
            shortenComponentPathBy: "/slider/"
        }));

        // slider sample 2
        configs.push(new Config({
            component: SliderSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSliderModule, SliderSample2Component],
                ngDeclarations: [SliderSample2Component],
                ngImports: [IgxSliderModule]
            }),
            shortenComponentPathBy: "/slider/"
        }));

        // slider sample 3
        configs.push(new Config({
            component: SliderSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxInputGroupModule, IgxSliderModule, SliderSample3Component],
                ngDeclarations: [SliderSample3Component],
                ngImports: [IgxInputGroupModule, IgxSliderModule]
            }),
            shortenComponentPathBy: "/slider/"
        }));

        // slider sample 4
        configs.push(new Config({
            component: SliderSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSliderModule, SliderSample4Component],
                ngDeclarations: [SliderSample4Component],
                ngImports: [IgxSliderModule]
            }),
            shortenComponentPathBy: "/slider/"
        }));

        // slider sample 5
        configs.push(new Config({
            component: SliderSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSliderModule, SliderSample5Component],
                ngDeclarations: [SliderSample5Component],
                ngImports: [IgxSliderModule]
            }),
            shortenComponentPathBy: "/slider/"
        }));

        return configs;
    }
}
