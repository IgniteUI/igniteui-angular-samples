import { Config, IConfigGenerator} from 'igniteui-live-editing'
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
            component: 'QueryBuilderTemplateSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/query-builder/"
        }));

        configs.push(new Config({
            component: 'QueryBuilderStyleComponent',
            additionalFiles: ["/src/app/interactions/query-builder/query-builder-style/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/query-builder/"
        }));

        return configs;
    }
}
