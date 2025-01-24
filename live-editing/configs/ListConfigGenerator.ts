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
export class ListConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // list
        configs.push(new Config({
            component: 'ListComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxAvatarModule', 'IgxFilterOptions', 'IgxFilterModule', 'IgxIconModule',
                    'IgxInputGroupModule', 'IgxListModule', 'ListComponent'],
                ngDeclarations: ['ListComponent'],
                ngImports: ['IgxAvatarModule', 'IgxFilterModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxListModule']
            }),
            shortenComponentPathBy: "/lists/"
        }));

        // list sample 1
        configs.push(new Config({
            component: 'ListSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxListModule', 'ListSample1Component'],
                ngDeclarations: ['ListSample1Component'],
                ngImports: ['IgxListModule']
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 2
        configs.push(new Config({
            component: 'ListSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxListModule', 'ListSample2Component'],
                ngDeclarations: ['ListSample2Component'],
                ngImports: ['IgxListModule']
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 3
        configs.push(new Config({
            component: 'ListSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxListModule', 'IgxRippleModule', 'ListSample3Component'],
                ngDeclarations: ['ListSample3Component'],
                ngImports: ['IgxListModule', 'IgxRippleModule' ]
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 4
        configs.push(new Config({
            component: 'ListSample4Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxAvatarModule', 'IgxFilterModule', 'IgxIconModule', 'IgxListModule',
                    'IgxInputGroupModule', 'IgxButtonGroupModule', 'IgxRippleModule', 'ListSample4Component'],
                ngDeclarations: ['ListSample4Component'],
                ngImports: ['IgxAvatarModule', 'IgxFilterModule', 'IgxIconModule', 'IgxListModule',
                    'IgxInputGroupModule', 'IgxButtonGroupModule', 'IgxRippleModule']
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 5
        configs.push(new Config({
            component: 'ListSample5Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxListModule', 'ListSample5Component'],
                ngDeclarations: ['ListSample5Component'],
                ngImports: ['IgxListModule']
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 6
        configs.push(new Config({
            component: 'ListSample6Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxListModule', 'IgxRippleModule', 'ListSample6Component'],
                ngDeclarations: ['ListSample6Component'],
                ngImports: ['IgxButtonModule', 'IgxListModule', 'IgxRippleModule']
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 7
        configs.push(new Config({
            component: 'ListSample7Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxAvatarModule', 'IgxIconModule', 'IgxListModule', 'IgxRippleModule',
                    'ListSample7Component', 'IgxSliderModule', 'IgxToastModule', 'IgxButtonModule'],
                ngDeclarations: ['ListSample7Component'],
                ngImports: ['IgxAvatarModule', 'IgxIconModule', 'IgxListModule', 'IgxRippleModule',
                    'IgxSliderModule', 'IgxToastModule', 'IgxButtonModule']
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list chat sample
        configs.push(new Config({
            component: 'ListChatSampleComponent',
            additionalFiles: ["/src/app/lists/list/list-chat-sample/services/contacts.service.ts",
                "/src/app/lists/list/list-chat-sample/services/messages.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxAvatarModule', 'IgxIconModule', 'IgxListModule', 'IgxInputGroupModule', 'ListChatSampleComponent'],
                ngDeclarations: ['ListChatSampleComponent'],
                ngImports: ['IgxAvatarModule', 'IgxIconModule', 'IgxListModule', 'IgxInputGroupModule']
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list chat sample
        configs.push(new Config({
            component: 'ListSample8Component',
            additionalFiles: ["/src/app/lists/list/list-chat-sample/services/contacts.service.ts", "/src/app/lists/list/list-sample-8/layout.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxToastModule', 'IgxListModule', 'IgxIconModule', 'ListSample8Component', 'IgxAvatarModule'],
                ngDeclarations: ['ListSample8Component'],
                ngImports: ['IgxToastModule', 'IgxListModule', 'IgxIconModule', 'IgxAvatarModule']
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list item selection
        configs.push(new Config({
            component: 'ListItemSelectionComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxAvatarModule', 'IgxFilterModule', 'IgxIconModule', 'IgxListModule',
                    'IgxInputGroupModule', 'ListItemSelectionComponent'],
                ngDeclarations: ['ListItemSelectionComponent'],
                ngImports: ['IgxAvatarModule', 'IgxFilterModule', 'IgxIconModule', 'IgxListModule',
                    'IgxInputGroupModule']
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        return configs;
    }
}
