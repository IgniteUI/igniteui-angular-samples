/* tslint:disable:object-literal-sort-keys */
import {
    IgxAvatarModule,
    IgxButtonModule,
    IgxCardModule,
    IgxChipsModule,
    IgxDividerModule,
    IgxExpansionPanelModule,
    IgxIconModule,
    IgxListModule,
    IgxRippleModule,
    IgxSliderModule
} from "igniteui-angular";

import { CardSample1Component } from "../../src/app/layouts/card/card-sample-1/card-sample-1.component";
import { CardSample2Component } from "../../src/app/layouts/card/card-sample-2/card-sample-2.component";
import { CardSample3Component } from "../../src/app/layouts/card/card-sample-3/card-sample-3.component";
import { CardSample4Component } from "../../src/app/layouts/card/card-sample-4/card-sample-4.component";
import { CardComponent } from "../../src/app/layouts/card/card.component";

import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class CardConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // card sample
        configs.push(new Config({
            component: CardComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxButtonModule,
                    IgxIconModule,
                    IgxCardModule,
                    IgxRippleModule,
                    CardComponent
                ],
                ngDeclarations: [CardComponent],
                ngImports: [
                    IgxButtonModule,
                    IgxIconModule,
                    IgxCardModule,
                    IgxRippleModule
                ]
            }),
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card sample 1
        configs.push(new Config({
            component: CardSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxButtonModule,
                    IgxIconModule,
                    IgxCardModule,
                    IgxDividerModule,
                    CardSample1Component
                ],
                ngDeclarations: [CardSample1Component],
                ngImports: [
                    IgxButtonModule,
                    IgxIconModule,
                    IgxCardModule,
                    IgxDividerModule
                ]
            }),
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card sample 2
        configs.push(new Config({
            component: CardSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxButtonModule,
                    IgxIconModule,
                    IgxCardModule,
                    IgxDividerModule,
                    CardSample2Component
                ],
                ngDeclarations: [CardSample2Component],
                ngImports: [
                    IgxButtonModule,
                    IgxIconModule,
                    IgxCardModule,
                    IgxDividerModule
                ]
            }),
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card sample 3
        configs.push(new Config({
            component: CardSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxAvatarModule,
                    IgxButtonModule,
                    IgxCardModule,
                    IgxRippleModule,
                    CardSample3Component
                ],
                ngDeclarations: [CardSample3Component],
                ngImports: [
                    IgxAvatarModule,
                    IgxButtonModule,
                    IgxCardModule,
                    IgxRippleModule
                ]
            }),
            additionalFiles: [
                "/src/app/layouts/card/card.blueprint.ts"
            ],
            shortenComponentPathBy: "/layouts/card/"
        }));

        // card sample 4
        configs.push(new Config({
            component: CardSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxAvatarModule,
                    IgxButtonModule,
                    IgxIconModule,
                    IgxCardModule,
                    IgxDividerModule,
                    IgxRippleModule,
                    IgxChipsModule,
                    IgxSliderModule,
                    IgxListModule,
                    IgxExpansionPanelModule,
                    CardSample4Component
                ],
                ngDeclarations: [CardSample4Component],
                ngImports: [
                    IgxAvatarModule,
                    IgxButtonModule,
                    IgxIconModule,
                    IgxCardModule,
                    IgxDividerModule,
                    IgxRippleModule,
                    IgxChipsModule,
                    IgxListModule,
                    IgxExpansionPanelModule,
                    IgxSliderModule
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
