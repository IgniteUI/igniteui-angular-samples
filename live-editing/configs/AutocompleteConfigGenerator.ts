import {
    IgxAutocompleteModule,
    IgxDropDownModule,
    IgxInputGroupModule
 } from "igniteui-angular";
import { AutocompleteBasic, AutocompletePipeStartsWith
    } from "../../src/app/data-entries/autocomplete/autocomplete/autocomplete.component";
import { MovieComponent } from "../../src/app/data-entries/autocomplete/movie/movie.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class AutocompleteConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxAutocompleteModule', 'IgxDropDownModule', 'IgxInputGroupModule',
                    'AutocompleteBasic', 'AutocompletePipeStartsWith'],
                ngDeclarations: ['AutocompleteBasic', 'AutocompletePipeStartsWith'],
                ngImports: ['IgxAutocompleteModule', 'IgxDropDownModule', 'IgxInputGroupModule']
            }),
            component: 'AutocompleteBasic',
            shortenComponentPathBy: "/data-entries/autocomplete/"
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxAutocompleteModule',
                    'IgxDropDownModule',
                    'IgxInputGroupModule',
                    'MovieComponent'
                ],
                ngDeclarations: ['MovieComponent' ],
                ngImports: [
                    'IgxAutocompleteModule',
                    'IgxDropDownModule',
                    'IgxInputGroupModule'
                ]
            }),
            component: 'MovieComponent'
        }));

        return configs;
    }
}
