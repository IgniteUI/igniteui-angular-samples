import { HttpClientModule } from "@angular/common/http";
import { IgxAutocompleteModule, IgxDialogModule, IgxDropDownModule,
        IgxInputGroupModule, IgxProgressBarModule } from "igniteui-angular";
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
                        AutocompleteRemote, HttpClientModule, RemoteService],
                ngDeclarations: [AutocompleteRemote],
                ngImports: [IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule, IgxProgressBarModule],
                ngProviders: [RemoteService]
            }),
            component: AutocompleteRemote
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule, IgxDialogModule,
                        MovieComponent, AutocompletePipeContains, AutocompleteGroupPipeContains],
                ngDeclarations: [MovieComponent],
                ngImports: [IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule, IgxDialogModule]
            }),
            component: MovieComponent
        }));

        return configs;
    }
}
