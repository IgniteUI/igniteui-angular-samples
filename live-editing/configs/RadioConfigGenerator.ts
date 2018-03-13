import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { RadioSample2Component } from "../../src/app/form-elements/radio/radio-sample-2/radio-sample-2.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxRadioModule } from "igniteui-angular/main";

export class RadioConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

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
