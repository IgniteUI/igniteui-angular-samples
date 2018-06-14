/* tslint:disable:object-literal-sort-keys */
import { IgxRadioModule } from "igniteui-angular";
import { RadioSample2Component } from "../../src/app/form-elements/radio/radio-sample-2/radio-sample-2.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class RadioConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // radio sample 2
        configs.push(new Config({
            component: RadioSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxRadioModule, RadioSample2Component],
                ngDeclarations: [RadioSample2Component],
                ngImports: [IgxRadioModule]
            }),
            shortenComponentPathBy: "/form-elements/radio/"
        }));

        return configs;
    }
}
