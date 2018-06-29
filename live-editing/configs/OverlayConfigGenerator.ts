/* tslint:disable:object-literal-sort-keys */
import {
    IgxButtonDirective, IgxCardModule, IgxIconModule, IgxOverlayService, IgxSwitchModule
} from "igniteui-angular";
import { CardSample1Component } from "../../src/app/card/card-sample-1/card-sample-1.component";
import { OverlaySampleMain1Component } from "../../src/app/overlay/overlay-main-1/overlay-main-sample-1.component";
import { OverlaySampleMain2Component } from "../../src/app/overlay/overlay-main-2/overlay-main-sample-2.component";
import { OverlayPositionSample1Component
} from "../../src/app/overlay/overlay-positioning-1/overlay-position-sample-1.component";
import { OverlayPositionSample2Component
} from "../../src/app/overlay/overlay-positioning-2/overlay-position-sample-2.component";
import { OverlayScrollSample1Component
} from "../../src/app/overlay/overlay-scroll-1/overlay-scroll-sample-1.component";
import { OverlayScrollSample2Component
} from "../../src/app/overlay/overlay-scroll-2/overlay-scroll-sample-2.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class OverlayConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: OverlaySampleMain1Component,
            additionalFiles: ["/src/app/card/card-sample-1/card-sample-1.component.ts",
                "/src/app/card/card-sample-1/card-sample-1.component.scss",
                "/src/app/card/card-sample-1/card-sample-1.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlaySampleMain1Component,
                    CardSample1Component, IgxSwitchModule, IgxCardModule,
                    IgxButtonDirective],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlaySampleMain1Component],
                ngImports: [IgxIconModule, IgxCardModule]
            })
        }));

        configs.push(new Config({
            component: OverlaySampleMain2Component,
            additionalFiles: ["/src/app/card/card-sample-1/card-sample-1.component.ts",
            "/src/app/card/card-sample-1/card-sample-1.component.scss",
            "/src/app/card/card-sample-1/card-sample-1.component.html"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlaySampleMain2Component,
                    CardSample1Component, IgxSwitchModule, IgxCardModule,
                    IgxButtonDirective],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlaySampleMain2Component],
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
            })
        }));

        configs.push(new Config({
            component: OverlayPositionSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlayPositionSample2Component, IgxCardModule],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayPositionSample2Component],
                ngImports: [IgxIconModule, IgxCardModule]
            })
        }));

        configs.push(new Config({
            component: OverlayScrollSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlayScrollSample2Component,
                     IgxSwitchModule, IgxCardModule],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayScrollSample2Component],
                ngImports: [IgxIconModule, IgxSwitchModule, IgxCardModule]
            })
        }));

        configs.push(new Config({
            component: OverlayScrollSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlayScrollSample1Component,
                     IgxSwitchModule, IgxCardModule],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayScrollSample1Component],
                ngImports: [IgxIconModule, IgxSwitchModule, IgxCardModule]
            })
        }));
        return configs;
    }
}
