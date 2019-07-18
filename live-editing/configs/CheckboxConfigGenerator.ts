/* tslint:disable:object-literal-sort-keys */
import { IgxCheckboxModule } from "igniteui-angular";
import { CheckboxSample2Component
} from "../../src/app/data-entries/checkbox/checkbox-sample-2/checkbox-sample-2.component";
// tslint:disable-next-line: max-line-length
import { CheckboxStylingComponent
} from "../../src/app/data-entries/checkbox/checkbox-styling/checkbox-styling.component";
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
            shortenComponentPathBy: "/data-entries/checkbox/"
        }));

        // checkbox styling
        configs.push(new Config({
            component: CheckboxStylingComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCheckboxModule, CheckboxStylingComponent],
                ngDeclarations: [CheckboxStylingComponent],
                ngImports: [IgxCheckboxModule]
            }),
            shortenComponentPathBy: "/data-entries/checkbox/"
        }));

        return configs;
    }
}
