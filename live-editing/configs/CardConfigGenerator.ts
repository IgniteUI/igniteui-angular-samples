import {IgxAvatarModule,
IgxButtonModule,
IgxCardModule,
IgxChipsModule,
IgxDividerModule,
IgxExpansionPanelModule,
IgxIconModule,
IgxLayoutModule,
IgxListModule,
IgxRippleModule,
IgxSliderModule} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class CardConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // card sample
        configs.push(new Config({
            component: 'CardComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxCardModule',
                    'IgxRippleModule',
                    'CardComponent'
                ],
                ngDeclarations: ['CardComponent'],
                ngImports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxCardModule',
                    'IgxRippleModule'
                ]
            }),
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card sample 1
        configs.push(new Config({
            component: 'CardSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxCardModule',
                    'IgxDividerModule',
                    'CardSample1Component'
                ],
                ngDeclarations: ['CardSample1Component'],
                ngImports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxCardModule',
                    'IgxDividerModule'
                ]
            }),
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card sample 2
        configs.push(new Config({
            component: 'CardSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxCardModule',
                    'IgxDividerModule',
                    'IgxLayoutModule',
                    'CardSample2Component'
                ],
                ngDeclarations: ['CardSample2Component'],
                ngImports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxCardModule',
                    'IgxDividerModule',
                    'IgxLayoutModule',
                ]
            }),
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card sample 3
        configs.push(new Config({
            component: 'CardSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxAvatarModule',
                    'IgxButtonModule',
                    'IgxCardModule',
                    'IgxRippleModule',
                    'CardSample3Component'
                ],
                ngDeclarations: ['CardSample3Component'],
                ngImports: [
                    'IgxAvatarModule',
                    'IgxButtonModule',
                    'IgxCardModule',
                    'IgxRippleModule'
                ]
            }),
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card sample 4
        configs.push(new Config({
            component: 'CardSample4Component',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxAvatarModule',
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxCardModule',
                    'IgxDividerModule',
                    'IgxRippleModule',
                    'IgxChipsModule',
                    'IgxSliderModule',
                    'IgxListModule',
                    'IgxExpansionPanelModule',
                    'CardSample4Component'
                ],
                ngDeclarations: ['CardSample4Component'],
                ngImports: [
                    'IgxAvatarModule',
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxCardModule',
                    'IgxDividerModule',
                    'IgxRippleModule',
                    'IgxChipsModule',
                    'IgxListModule',
                    'IgxExpansionPanelModule',
                    'IgxSliderModule'
                ]
            }),
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card styling sample
        configs.push(new Config({
            component: 'CardStylingSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxCardModule',
                    'IgxRippleModule',
                    'CardStylingSampleComponent'
                ],
                ngDeclarations: ['CardStylingSampleComponent'],
                ngImports: [
                    'IgxButtonModule',
                    'IgxIconModule',
                    'IgxCardModule',
                    'IgxRippleModule'
                ]
            }),
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        return configs;
    }
}
