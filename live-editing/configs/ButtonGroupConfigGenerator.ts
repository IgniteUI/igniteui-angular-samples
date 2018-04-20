/* tslint:disable:object-literal-sort-keys */
import { IgxButtonGroupModule } from "igniteui-angular/main";
import {
    ButtonGroupSample1Component
 } from "../../src/app/buttonGroup/button-group-sample-1/button-group-sample-1.component";
import {
    ButtonGroupSample2Component
} from "../../src/app/buttonGroup/button-group-sample-2/button-group-sample-2.component";
import {
    ButtonGroupSample3Component
} from "../../src/app/buttonGroup/button-group-sample-3/button-group-sample-3.component";
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
                imports: [IgxButtonGroupModule, ButtonGroupSample1Component],
                ngDeclarations: [ButtonGroupSample1Component],
                ngImports: [IgxButtonGroupModule]
            }),
            shortenComponentPathBy: "/buttonGroup/"
        }));

        // button group 2
        configs.push(new Config({
            component: ButtonGroupSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonGroupModule, ButtonGroupSample2Component],
                ngDeclarations: [ButtonGroupSample2Component],
                ngImports: [IgxButtonGroupModule]
            }),
            shortenComponentPathBy: "/buttonGroup/"
        }));

        // button group 3
        configs.push(new Config({
            component: ButtonGroupSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonGroupModule, ButtonGroupSample3Component],
                ngDeclarations: [ButtonGroupSample3Component],
                ngImports: [IgxButtonGroupModule]
            }),
            shortenComponentPathBy: "/buttonGroup/"
        }));

        return configs;
    }
}
