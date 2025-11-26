import {
    IgxAutocompleteModule,
    IgxDropDownModule,
    IgxInputGroupModule
} from 'igniteui-angular';

import { Config, IConfigGenerator, AppModuleConfig } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';

export class AutocompleteConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        AutocompletePipeStartsWith: '../../src/app/data-entries/autocomplete/autocomplete/autocomplete.component',
        AutocompletePipeStartsWith2: '../../src/app/data-entries/autocomplete/movie/movie.component'
    };

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'AutocompleteBasicComponent',
            shortenComponentPathBy: "/data-entries/autocomplete/"
        }));

        configs.push(new Config({
            appConfig: BaseAppConfig,
            component: 'MovieComponent'
        }));

        return configs;
    }
}
