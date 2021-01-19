import {IgxButtonDirective,
IgxButtonModule,
IgxButtonGroupModule,
IgxCardModule,
IgxComboModule,
IgxDividerModule,
IgxIconModule,
IgxOverlayService,
IgxSwitchModule,
IgxToggleModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class OverlayConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        MyDynamicCardComponent: '../../src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'OverlaySampleMain1Component',
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxOverlayService', 'OverlaySampleMain1Component', 'IgxCardModule',
                    'MyDynamicCardComponent'],
                ngEntryComponents: ['MyDynamicCardComponent'],
                ngProviders: ['IgxOverlayService'],
                ngDeclarations: ['OverlaySampleMain1Component', 'MyDynamicCardComponent'],
                ngImports: ['IgxIconModule', 'IgxCardModule']
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: 'OverlaySampleMain2Component',
            additionalFiles: ["/src/app/layouts/card/card-sample-1/card-sample-1.component.ts",
            "/src/app/layouts/card/card-sample-1/card-sample-1.component.scss",
            "/src/app/layouts/card/card-sample-1/card-sample-1.component.html",
            "/src/app/layouts/card/card.blueprint.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxOverlayService', 'OverlaySampleMain2Component',
                    'CardSample1Component', 'IgxSwitchModule', 'IgxCardModule',
                    'IgxButtonDirective', 'IgxDividerModule', 'IgxButtonModule'],
                ngEntryComponents: ['CardSample1Component'],
                ngProviders: ['IgxOverlayService'],
                ngDeclarations: ['OverlaySampleMain2Component', 'CardSample1Component'],
                ngImports: ['IgxIconModule', 'IgxCardModule', 'IgxDividerModule', 'IgxButtonModule']
            })
        }));

        configs.push(new Config({
            component: 'OverlayPositionSample1Component',
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxOverlayService', 'OverlayPositionSample1Component', 'IgxCardModule',
                    'MyDynamicCardComponent'],
                ngEntryComponents: ['MyDynamicCardComponent'],
                ngProviders: ['IgxOverlayService'],
                ngDeclarations: ['OverlayPositionSample1Component', 'MyDynamicCardComponent'],
                ngImports: ['IgxIconModule', 'IgxCardModule']
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: 'OverlayPositionSample2Component',
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxOverlayService', 'OverlayPositionSample2Component', 'IgxCardModule',
                    'MyDynamicCardComponent'],
                ngEntryComponents: ['MyDynamicCardComponent'],
                ngProviders: ['IgxOverlayService'],
                ngDeclarations: ['OverlayPositionSample2Component', 'MyDynamicCardComponent'],
                ngImports: ['IgxIconModule', 'IgxCardModule']
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: 'OverlayPositionSample3Component',
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxOverlayService', 'OverlayPositionSample3Component', 'IgxCardModule',
                    'MyDynamicCardComponent'],
                ngEntryComponents: ['MyDynamicCardComponent'],
                ngProviders: ['IgxOverlayService'],
                ngDeclarations: ['OverlayPositionSample3Component', 'MyDynamicCardComponent'],
                ngImports: ['IgxIconModule', 'IgxCardModule']
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: 'OverlayScrollSample2Component',
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxOverlayService', 'OverlayScrollSample2Component', 'IgxCardModule',
                    'MyDynamicCardComponent'],
                ngEntryComponents: ['MyDynamicCardComponent'],
                ngProviders: ['IgxOverlayService'],
                ngDeclarations: ['OverlayScrollSample2Component', 'MyDynamicCardComponent'],
                ngImports: ['IgxIconModule', 'IgxCardModule']
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: 'OverlayScrollSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxOverlayService', 'OverlayScrollSample1Component',
                     'IgxSwitchModule', 'IgxCardModule'],
                ngProviders: ['IgxOverlayService'],
                ngDeclarations: ['OverlayScrollSample1Component'],
                ngImports: ['IgxIconModule', 'IgxSwitchModule', 'IgxCardModule']
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: 'OverlayPresetSettingsSampleComponent',
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxOverlayService', 'OverlayPresetSettingsSampleComponent', 'IgxCardModule',
                        'IgxButtonGroupModule', 'IgxButtonModule', 'MyDynamicCardComponent'],
                ngEntryComponents: ['MyDynamicCardComponent'],
                ngProviders: ['IgxOverlayService'],
                ngDeclarations: ['OverlayPresetSettingsSampleComponent', 'MyDynamicCardComponent'],
                ngImports: ['IgxIconModule', 'IgxCardModule', 'IgxButtonGroupModule', 'IgxButtonModule']
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: 'OverlayStylingComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxToggleModule', 'IgxComboModule', 'IgxOverlayService', 'OverlayStylingComponent'],
                ngProviders: ['IgxOverlayService'],
                ngDeclarations: ['OverlayStylingComponent'],
                ngImports: ['IgxToggleModule', 'IgxComboModule']
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        return configs;
    }
}
