import {IgxAutocompleteModule,
IgxDropDownModule,
IgxInputGroupModule} from 'igniteui-angular';

import { Config, IConfigGenerator, AppModuleConfig } from 'igniteui-live-editing';

export class AutocompleteConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        AutocompletePipeStartsWith: '../../src/app/data-entries/autocomplete/autocomplete/autocomplete.component'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxAutocompleteModule', 'IgxDropDownModule', 'IgxInputGroupModule',
                    'AutocompleteBasicComponent', 'AutocompletePipeStartsWith'],
                ngDeclarations: ['AutocompleteBasicComponent', 'AutocompletePipeStartsWith'],
                ngImports: ['IgxAutocompleteModule', 'IgxDropDownModule', 'IgxInputGroupModule']
            }),
            component: 'AutocompleteBasicComponent',
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
