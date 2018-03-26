import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { CheckboxSample2Component } from "../../src/app/form-elements/checkbox/checkbox-sample-2/checkbox-sample-2.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxCheckboxModule } from "igniteui-angular/checkbox/checkbox.component";

export class CheckboxConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

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
