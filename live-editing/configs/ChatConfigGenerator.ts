import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class ChatConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // chat overview sample
        configs.push(new Config({
            component: 'ChatOverviewSampleComponent',
            appConfig: BaseAppConfig,
            additionalDependencies: ['igniteui-webcomponents', 'shiki', 'marked', 'marked-shiki', 'dompurify'],
            shortenComponentPathBy: "/interactions/chat/"
        }));

        // chat features sample
        configs.push(new Config({
            component: 'ChatFeaturesSampleComponent',
            additionalDependencies: ['igniteui-webcomponents', 'shiki', 'marked', 'marked-shiki', 'dompurify'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/chat/"
        }));

        // chat styling sample
        configs.push(new Config({
            component: 'ChatStylingSampleComponent',
            additionalDependencies: ['igniteui-webcomponents', 'shiki', 'marked', 'marked-shiki', 'dompurify'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/chat/"
        }));

        return configs;
    }
}
