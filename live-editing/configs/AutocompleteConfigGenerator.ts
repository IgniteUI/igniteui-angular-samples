<<<<<<< HEAD
import {IgxAutocompleteModule,
IgxDropDownModule,
IgxInputGroupModule} from 'igniteui-angular';
import {AppModuleConfig} from './core/AppModuleConfig';
import {Config} from './core/Config';
import {IConfigGenerator} from './core/IConfigGenerator';
export class AutocompleteConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        AutocompletePipeStartsWith: '../../src/app/data-entries/autocomplete/autocomplete/autocomplete.component'
=======
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { ConfigGenerator} from "./core/IConfigGenerator";
export class AutocompleteConfigGenerator extends ConfigGenerator{
    public additionalImports = {
        'AutocompletePipeStartsWith': '../../src/app/data-entries/autocomplete/autocomplete/autocomplete.component'
>>>>>>> 5835f0692b85fd2fa8a274f2a973ea5b958cb772
};
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
