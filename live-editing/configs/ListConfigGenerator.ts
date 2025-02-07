import {IgxAvatarModule,
IgxButtonGroupModule,
IgxButtonModule,
IgxFilterModule,
IgxFilterOptions,
IgxIconModule,
IgxInputGroupModule,
IgxListModule,
IgxSliderModule,
IgxToastModule,
IgxRippleModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class ListConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // list
        configs.push(new Config({
            component: 'ListComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/lists/"
        }));

        // list sample 1
        configs.push(new Config({
            component: 'ListSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 2
        configs.push(new Config({
            component: 'ListSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 3
        configs.push(new Config({
            component: 'ListSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 4
        configs.push(new Config({
            component: 'ListSample4Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 5
        configs.push(new Config({
            component: 'ListSample5Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 6
        configs.push(new Config({
            component: 'ListSample6Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 7
        configs.push(new Config({
            component: 'ListSample7Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/lists/list/"
        }));

        // list chat sample
        configs.push(new Config({
            component: 'ListChatSampleComponent',
            additionalFiles: ["/src/app/lists/list/list-chat-sample/services/contacts.service.ts",
                "/src/app/lists/list/list-chat-sample/services/messages.service.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/lists/list/"
        }));

        // list chat sample
        configs.push(new Config({
            component: 'ListSample8Component',
            additionalFiles: ["/src/app/lists/list/list-chat-sample/services/contacts.service.ts", "/src/app/lists/list/list-sample-8/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/lists/list/"
        }));

        // list item selection
        configs.push(new Config({
            component: 'ListItemSelectionComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/lists/list/"
        }));

        return configs;
    }
}
