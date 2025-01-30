import {IgxQueryBuilderModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class QueryBuilderConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'QueryBuilderSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/query-builder/"
        }));

        configs.push(new Config({
            component: 'QueryBuilderStyleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/query-builder/"
        }));

        return configs;
    }
}
