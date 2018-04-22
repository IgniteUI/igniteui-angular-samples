/* tslint:disable:object-literal-sort-keys */
import { IgxCheckboxModule } from "igniteui-angular/checkbox/checkbox.component";
import {
    CheckboxSample2Component
} from "../../src/app/form-elements/checkbox/checkbox-sample-2/checkbox-sample-2.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class CheckboxConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // checkbox sample 2
        configs.push(new Config({
            component: CheckboxSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCheckboxModule, CheckboxSample2Component],
                ngDeclarations: [CheckboxSample2Component],
                ngImports: [IgxCheckboxModule]
            }),
            shortenComponentPathBy: "/form-elements/checkbox/"
        }));

        return configs;
    }
}
