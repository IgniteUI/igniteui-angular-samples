/* tslint:disable:object-literal-sort-keys */
import { ReactiveFormsModule } from "@angular/forms";
import { IgxButtonModule, IgxInputGroupModule, IgxRadioModule } from "igniteui-angular";
import { RadioGroupSampleComponent
} from "../../src/app/data-entries/radio/radio-group-sample/radio-group-sample.component";
import { RadioSample1Component } from "../../src/app/data-entries/radio/radio-sample-1/radio-sample-1.component";
import { RadioSample2Component } from "../../src/app/data-entries/radio/radio-sample-2/radio-sample-2.component";
import { RadioStylingSampleComponent
} from "../../src/app/data-entries/radio/radio-styling-sample/radio-styling-sample.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class RadioConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: RadioSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxRadioModule, RadioSample1Component],
                ngDeclarations: [RadioSample1Component],
                ngImports: [IgxRadioModule]
            }),
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: RadioSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxRadioModule, RadioSample2Component],
                ngDeclarations: [RadioSample2Component],
                ngImports: [IgxRadioModule]
            }),
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: RadioGroupSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule,
                          IgxRadioModule,
                          RadioGroupSampleComponent,
                          IgxInputGroupModule,
                          ReactiveFormsModule],
                ngDeclarations: [RadioGroupSampleComponent],
                ngImports: [IgxButtonModule, IgxRadioModule, IgxInputGroupModule, ReactiveFormsModule]
            }),
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: RadioStylingSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxRadioModule, RadioStylingSampleComponent],
                ngDeclarations: [RadioStylingSampleComponent],
                ngImports: [IgxRadioModule]
            }),
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        return configs;
    }
}
