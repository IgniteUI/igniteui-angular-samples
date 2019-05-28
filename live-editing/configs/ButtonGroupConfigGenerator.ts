/* tslint:disable:object-literal-sort-keys */
import { IgxButtonGroupModule, IgxButtonModule, IgxIconModule, IgxRippleModule } from "igniteui-angular";
import {
    ButtonGroupSample1Component
} from "../../src/app/data-entries/buttonGroup/button-group-sample-1/button-group-sample-1.component";
import {
    ButtonGroupSample2Component
} from "../../src/app/data-entries/buttonGroup/button-group-sample-2/button-group-sample-2.component";
import {
    ButtonGroupSample3Component
} from "../../src/app/data-entries/buttonGroup/button-group-sample-3/button-group-sample-3.component";
import {
    ButtonGroupSampleComponent
} from "../../src/app/data-entries/buttonGroup/button-group-sample-4/button-group-sample.component";
import {
    ButtonGroupSample5Component
} from "../../src/app/data-entries/buttonGroup/button-group-sample-5/button-group-sample-5.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ButtonGroupConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // button group 1
        configs.push(new Config({
            component: ButtonGroupSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonGroupModule, ButtonGroupSample1Component, IgxRippleModule,
                    IgxIconModule, IgxButtonModule],
                ngDeclarations: [ButtonGroupSample1Component],
                ngImports: [IgxButtonGroupModule, IgxRippleModule, IgxIconModule, IgxButtonModule]
            }),
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group 2
        configs.push(new Config({
            component: ButtonGroupSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonGroupModule, ButtonGroupSample2Component, IgxButtonModule, IgxRippleModule],
                ngDeclarations: [ButtonGroupSample2Component],
                ngImports: [IgxButtonGroupModule, IgxButtonModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group 3
        configs.push(new Config({
            component: ButtonGroupSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonGroupModule, ButtonGroupSample3Component],
                ngDeclarations: [ButtonGroupSample3Component],
                ngImports: [IgxButtonGroupModule]
            }),
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group 4
        configs.push(new Config({
            component: ButtonGroupSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonGroupModule, ButtonGroupSampleComponent, IgxIconModule,
                    IgxButtonModule, IgxRippleModule],
                ngDeclarations: [ButtonGroupSampleComponent],
                ngImports: [IgxButtonGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group 5
        configs.push(new Config({
            component: ButtonGroupSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonGroupModule, ButtonGroupSample5Component],
                ngDeclarations: [ButtonGroupSample5Component],
                ngImports: [IgxButtonGroupModule]
            }),
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        return configs;
    }
}
