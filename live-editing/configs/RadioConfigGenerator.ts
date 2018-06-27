/* tslint:disable:object-literal-sort-keys */
import { ReactiveFormsModule } from "@angular/forms";
import { IgxInputGroupModule, IgxRadioModule } from "igniteui-angular";
import {
    RadioGroupSampleComponent
} from "../../src/app/form-elements/radio/radio-group-sample/radio-group-sample.component";
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

        // radio-group sample
        configs.push(new Config({
            component: RadioGroupSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxRadioModule, RadioGroupSampleComponent, IgxInputGroupModule, ReactiveFormsModule],
                ngDeclarations: [RadioGroupSampleComponent],
                ngImports: [IgxRadioModule, IgxInputGroupModule, ReactiveFormsModule]
            }),
            shortenComponentPathBy: "/form-elements/radio/"
        }));

        return configs;
    }
}
