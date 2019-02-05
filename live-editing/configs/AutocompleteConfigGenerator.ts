import { HttpClientModule } from "@angular/common/http";
import { IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule, IgxProgressBarModule } from "igniteui-angular";
import { AutocompleteRemote
    } from "../../src/app/data-entries/autocomplete/autocomplete-remote/autocomplete-remote.component";
import { AutocompleteBasic } from "../../src/app/data-entries/autocomplete/autocomplete/autocomplete.component";
import { AutocompletePipeStartsWith } from "../../src/app/data-entries/pipes/pipes";
import { RemoteService } from "../../src/app/grid/services/remote.service";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class AutocompleteConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ["/src/app/data-entries/pipes/pipes.ts"],
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
            additionalFiles: ["/src/app/grid/services/remote.service.ts", "/src/app/data-entries/pipes/pipes.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule, IgxProgressBarModule,
                        AutocompleteRemote, HttpClientModule, RemoteService],
                ngDeclarations: [AutocompleteRemote],
                ngImports: [IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule, IgxProgressBarModule],
                ngProviders: [RemoteService]
            }),
            component: AutocompleteRemote
        }));

        return configs;
    }
}
