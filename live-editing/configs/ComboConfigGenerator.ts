import {HttpClientModule} from '@angular/common/http';
import {IgxButtonModule,
IgxCardModule,
IgxComboModule,
IgxSelectModule,
IgxSwitchModule,
IgxToastModule,
IgxIconModule,
IgxPrefixModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class ComboConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        RemoteService: '../../src/app/grid/services/remote.service'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ["/src/app/lists/combo/combo-features/local-data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxSwitchModule', 'ComboFeatures'],
                ngDeclarations: ['ComboFeatures'],
                ngImports: ['IgxComboModule', 'IgxSwitchModule']
            }),
            component: 'ComboFeatures',
            shortenComponentPathBy: "/lists/combo/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/data/heroData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxToastModule', 'ComboStyling'],
                ngDeclarations: ['ComboStyling'],
                ngImports: ['IgxComboModule', 'IgxToastModule']
            }),
            component: 'ComboStyling'
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/lists/combo/cascading-combos/local-data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxSelectModule', 'CascadingCombos'],
                ngDeclarations: ['CascadingCombos'],
                ngImports: ['IgxComboModule', 'IgxSelectModule']
            }),
            component: 'CascadingCombos',
            shortenComponentPathBy: "/lists/combo/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/lists/combo/combo-main/local-data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'ComboMainComponent'],
                ngDeclarations: ['ComboMainComponent'],
                ngImports: ['IgxComboModule']
            }),
            component: 'ComboMainComponent',
            shortenComponentPathBy: "/lists/combo/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/lists/combo/combo-template/local-data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxIconModule', 'IgxPrefixModule', 'ComboTemplateComponent'],
                ngDeclarations: ['ComboTemplateComponent'],
                ngImports: ['IgxComboModule', 'IgxIconModule', 'IgxPrefixModule']
            }),
            component: 'ComboTemplateComponent',
            shortenComponentPathBy: "/lists/combo/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/grid/services/remote.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxToastModule', 'ComboRemoteComponent',
                    'HttpClientModule', 'RemoteService'],
                ngDeclarations: ['ComboRemoteComponent'],
                ngImports: ['IgxComboModule', 'IgxToastModule', 'HttpClientModule'],
                ngProviders: ['RemoteService']
            }),
            component: 'ComboRemoteComponent'
        }));

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'ComboOverlayComponent'],
                ngDeclarations: ['ComboOverlayComponent'],
                ngImports: ['IgxComboModule']
            }),
            component: 'ComboOverlayComponent'
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/lists/combo/combo-single-selection/local-data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'ComboSingleSelectionComponent'],
                ngDeclarations: ['ComboSingleSelectionComponent'],
                ngImports: ['IgxComboModule']
            }),
            component: 'ComboSingleSelectionComponent',
            shortenComponentPathBy: "/lists/combo/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/lists/combo/combo-binding/cities.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxButtonModule', 'IgxCardModule', 'ComboBindingComponent'],
                ngDeclarations: ['ComboBindingComponent'],
                ngImports: ['IgxComboModule', 'IgxButtonModule', 'IgxCardModule']
            }),
            component: 'ComboBindingComponent',
            shortenComponentPathBy: "/lists/combo/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/lists/combo/combo-valuekey/cities.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxComboModule', 'IgxButtonModule', 'ComboValueKeyComponent'],
                ngDeclarations: ['ComboValueKeyComponent'],
                ngImports: ['IgxComboModule', 'IgxButtonModule']
            }),
            component: 'ComboValueKeyComponent',
            shortenComponentPathBy: "/lists/combo/"
        }));

        return configs;
    }
}
