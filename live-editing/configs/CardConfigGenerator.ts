/* tslint:disable:object-literal-sort-keys */
import {
    IgxAvatarModule, IgxButtonModule, IgxCardModule,
    IgxIconModule, IgxRippleModule
} from "igniteui-angular";
import { CardSample1Component } from "../../src/app/card/card-sample-1/card-sample-1.component";
import { CardSample2Component } from "../../src/app/card/card-sample-2/card-sample-2.component";
import { CardSample3Component } from "../../src/app/card/card-sample-3/card-sample-3.component";
import { CardComponent } from "../../src/app/card/card.component";
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
                imports: [IgxAvatarModule, IgxButtonModule, IgxIconModule,
                    IgxCardModule, IgxRippleModule, CardComponent],
                ngDeclarations: [CardComponent],
                ngImports: [IgxAvatarModule, IgxButtonModule, IgxIconModule,
                    IgxCardModule, IgxRippleModule]
            })
        }));

        // card sample 1
        configs.push(new Config({
            component: CardSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCardModule, CardSample1Component],
                ngDeclarations: [CardSample1Component],
                ngImports: [IgxCardModule]
            }),
            shortenComponentPathBy: "/card/"
        }));

        // card sample 2
        configs.push(new Config({
            component: CardSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxCardModule, CardSample2Component],
                ngDeclarations: [CardSample2Component],
                ngImports: [IgxAvatarModule, IgxCardModule]
            })
        }));

        // card sample 3
        configs.push(new Config({
            component: CardSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxButtonModule, IgxIconModule,
                    IgxCardModule, IgxRippleModule, CardSample3Component],
                ngDeclarations: [CardSample3Component],
                ngImports: [IgxAvatarModule, IgxButtonModule, IgxIconModule,
                    IgxCardModule, IgxRippleModule]
            })
        }));

        return configs;
    }
}
