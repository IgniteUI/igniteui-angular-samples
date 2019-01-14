/* tslint:disable:object-literal-sort-keys */
import {
    IgxButtonDirective, IgxCardModule, IgxIconModule, IgxOverlayService, IgxSwitchModule
} from "igniteui-angular";
import { CardSample1Component } from "../../src/app/layouts/card/card-sample-1/card-sample-1.component";

import { MyDynamicCardComponent
} from "../../src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component";
import { OverlaySampleMain1Component
} from "../../src/app/interactions/overlay/overlay-main-1/overlay-main-sample-1.component";
import { OverlaySampleMain2Component
} from "../../src/app/interactions/overlay/overlay-main-2/overlay-main-sample-2.component";
import { OverlayPositionSample1Component
} from "../../src/app/interactions/overlay/overlay-positioning-1/overlay-position-sample-1.component";
import { OverlayPositionSample2Component
} from "../../src/app/interactions/overlay/overlay-positioning-2/overlay-position-sample-2.component";
import { OverlayScrollSample1Component
} from "../../src/app/interactions/overlay/overlay-scroll-1/overlay-scroll-sample-1.component";
import { OverlayScrollSample2Component
} from "../../src/app/interactions/overlay/overlay-scroll-2/overlay-scroll-sample-2.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class OverlayConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: OverlaySampleMain1Component,
            additionalFiles: ["/src/app/layouts/card/card-sample-1/card-sample-1.component.ts",
                "/src/app/layouts/card/card-sample-1/card-sample-1.component.scss",
                "/src/app/layouts/card/card-sample-1/card-sample-1.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, IgxSwitchModule, IgxCardModule, CardSample1Component,
                    OverlaySampleMain1Component, IgxButtonDirective],
                ngEntryComponents: [CardSample1Component],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlaySampleMain1Component, CardSample1Component],
                ngImports: [IgxIconModule, IgxCardModule]
            })
        }));

        configs.push(new Config({
            component: OverlaySampleMain2Component,
            additionalFiles: ["/src/app/layouts/card/card-sample-1/card-sample-1.component.ts",
            "/src/app/layouts/card/card-sample-1/card-sample-1.component.scss",
            "/src/app/layouts/card/card-sample-1/card-sample-1.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlaySampleMain2Component,
                    CardSample1Component, IgxSwitchModule, IgxCardModule,
                    IgxButtonDirective],
                ngEntryComponents: [CardSample1Component],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlaySampleMain2Component, CardSample1Component],
                ngImports: [IgxIconModule, IgxCardModule]
            })
        }));

        configs.push(new Config({
            component: OverlayPositionSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlayPositionSample1Component, IgxCardModule],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayPositionSample1Component],
                ngImports: [IgxIconModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: OverlayPositionSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlayPositionSample2Component, IgxCardModule],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayPositionSample2Component],
                ngImports: [IgxIconModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: OverlayScrollSample2Component,
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlayScrollSample2Component, MyDynamicCardComponent,
                     IgxSwitchModule, IgxCardModule],
                ngEntryComponents: [MyDynamicCardComponent],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayScrollSample2Component, MyDynamicCardComponent],
                ngImports: [IgxIconModule, IgxSwitchModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: OverlayScrollSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlayScrollSample1Component,
                     IgxSwitchModule, IgxCardModule],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayScrollSample1Component],
                ngImports: [IgxIconModule, IgxSwitchModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/interactions/overlay/"
        }));
        return configs;
    }
}
