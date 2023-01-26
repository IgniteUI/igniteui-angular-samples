import {IgxAutocompleteModule,
    IgxDropDownModule,
    IgxInputGroupModule} from '@infragistics/igniteui-angular';
    
    import { Config, IConfigGenerator, AppModuleConfig } from 'igniteui-live-editing';
    
    export class AutocompleteConfigGenerator implements IConfigGenerator {
        public additionalImports = {
            AutocompletePipeStartsWith: '../../src/app/data-entries/autocomplete/autocomplete/autocomplete.component',
            AutocompletePipeStartsWith2: '../../src/app/data-entries/autocomplete/movie/movie.component'
    
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
                        'MovieComponent',
                        'AutocompletePipeStartsWith2'
                    ],
                    ngDeclarations: ['MovieComponent', 'AutocompletePipeStartsWith2'],
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
    