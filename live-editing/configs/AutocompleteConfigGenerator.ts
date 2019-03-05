import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { IgxAutocompleteModule, IgxButtonModule, IgxDatePickerModule, IgxDialogModule,
    IgxDropDownModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
    IgxSelectModule, IgxTimePickerModule } from "igniteui-angular";
import { AutocompleteRemote
    } from "../../src/app/data-entries/autocomplete/autocomplete-remote/autocomplete-remote.component";
import { AutocompleteBasic, AutocompletePipeStartsWith
    } from "../../src/app/data-entries/autocomplete/autocomplete/autocomplete.component";
import { AutocompleteGroupPipeContains,
        AutocompletePipeContains,
        MovieComponent
} from "../../src/app/data-entries/autocomplete/movie/movie.component";
import { RemoteService } from "../../src/app/grid/services/remote.service";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class AutocompleteConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule,
                    AutocompleteBasic, AutocompletePipeStartsWith],
                ngDeclarations: [AutocompleteBasic, AutocompletePipeStartsWith],
                ngImports: [IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule]
            }),
            component: AutocompleteBasic,
            shortenComponentPathBy: "/data-entries/autocomplete/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/grid/services/remote.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxIconModule, AutocompleteRemote, HttpClientModule, RemoteService],
                ngDeclarations: [AutocompleteRemote],
                ngImports: [IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule,
                    IgxProgressBarModule, IgxIconModule],
                ngProviders: [RemoteService]
            }),
            component: AutocompleteRemote
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAutocompleteModule, IgxButtonModule, IgxDropDownModule, IgxInputGroupModule,
                    IgxDatePickerModule, IgxDialogModule, IgxIconModule, IgxSelectModule, IgxTimePickerModule,
                    MovieComponent, AutocompletePipeContains, AutocompleteGroupPipeContains, ReactiveFormsModule],
                ngDeclarations: [MovieComponent, AutocompletePipeContains, AutocompleteGroupPipeContains],
                ngImports: [IgxAutocompleteModule, IgxButtonModule,
                    IgxDatePickerModule, IgxDropDownModule, IgxInputGroupModule,
                    IgxDialogModule, IgxIconModule, IgxSelectModule, IgxTimePickerModule, ReactiveFormsModule]
            }),
            component: MovieComponent
        }));

        return configs;
    }
}
