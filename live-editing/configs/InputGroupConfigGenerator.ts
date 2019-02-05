/* tslint:disable:object-literal-sort-keys */
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IgxAutocompleteModule, IgxButtonModule, IgxComboModule, IgxDatePickerModule, IgxDropDownModule,
    IgxIconModule, IgxInputGroupModule, IgxRippleModule, IgxTimePickerModule } from "igniteui-angular";
import { InputGroupSample2Component
} from "../../src/app/data-entries/input-group/input-group-sample-2/input-group-sample-2.component";
import { InputGroupSample5Component
} from "../../src/app/data-entries/input-group/input-group-sample-5/input-group-sample-5.component";
import { InputGroupSample6Component
} from "../../src/app/data-entries/input-group/input-group-sample-6/input-group-sample-6.component";
import { ReactiveFormsSampleComponent
} from "../../src/app/data-entries/input-group/reactive-forms/reactive-forms.component";
import { AutocompleteGenrePipeContains, AutocompletePipeStartsWith } from "../../src/app/data-entries/pipes/pipes";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class InputGroupConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // input group sample 2
        configs.push(new Config({
            component: InputGroupSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxInputGroupModule, InputGroupSample2Component],
                ngDeclarations: [InputGroupSample2Component],
                ngImports: [IgxInputGroupModule]
            }),
            shortenComponentPathBy: "/data-entries/input-group/"
        }));

        // input group sample 5
        configs.push(new Config({
            component: InputGroupSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxInputGroupModule, InputGroupSample5Component],
                ngDeclarations: [InputGroupSample5Component],
                ngImports: [IgxIconModule, IgxInputGroupModule]
            }),
            shortenComponentPathBy: "/data-entries/input-group/"
        }));

        // input group sample 6
        configs.push(new Config({
            additionalFiles: ["/src/app/data-entries/pipes/pipes.ts"],
            component: InputGroupSample6Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxInputGroupModule, IgxButtonModule,
                     IgxRippleModule, InputGroupSample6Component, IgxDatePickerModule, IgxTimePickerModule,
                     IgxComboModule, IgxDropDownModule, IgxAutocompleteModule,
                     AutocompleteGenrePipeContains, AutocompletePipeStartsWith],
                ngDeclarations: [InputGroupSample6Component, AutocompleteGenrePipeContains, AutocompletePipeStartsWith],
                ngImports: [IgxIconModule, IgxInputGroupModule, IgxButtonModule,
                     IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule,
                     IgxDropDownModule, IgxAutocompleteModule],
                ngProviders: [AutocompleteGenrePipeContains]
            })
        }));

        // reactive forms
        configs.push(new Config({
            additionalFiles: ["/src/app/data-entries/pipes/pipes.ts"],
            component: ReactiveFormsSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxInputGroupModule, IgxButtonModule,
                     IgxRippleModule, ReactiveFormsSampleComponent, IgxDatePickerModule, IgxTimePickerModule,
                     IgxComboModule, FormsModule, ReactiveFormsModule, IgxDropDownModule, IgxAutocompleteModule,
                     AutocompleteGenrePipeContains, AutocompletePipeStartsWith],
                ngDeclarations: [ReactiveFormsSampleComponent,
                        AutocompleteGenrePipeContains, AutocompletePipeStartsWith],
                ngImports: [IgxIconModule, IgxInputGroupModule, IgxButtonModule,
                     IgxRippleModule, IgxDatePickerModule, IgxTimePickerModule, IgxComboModule,
                     FormsModule, ReactiveFormsModule, IgxDropDownModule, IgxAutocompleteModule],
                ngProviders: [AutocompleteGenrePipeContains]
            })
        }));

        return configs;
    }
}
