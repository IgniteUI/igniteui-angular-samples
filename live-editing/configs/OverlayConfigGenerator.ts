/* tslint:disable:object-literal-sort-keys */
import {
    IgxIconModule, IgxOverlayService, IgxSwitchModule
} from "igniteui-angular";
import { OverlaySampleMain1Component } from "../../src/app/overlay/overlay-main-1/overlay-main-sample-1.component";
import { OverlaySampleMain2Component } from "../../src/app/overlay/overlay-main-2/overlay-main-sample-2.component";
import { OverlaySampleMain3Component } from "../../src/app/overlay/overlay-main-3/overlay-main-sample-3.component";
import { OverlaySampleComponent } from "../../src/app/overlay/overlay-main/overlay-sample.component";
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

        // overlay sample 1
        configs.push(new Config({
            component: OverlaySampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlaySampleComponent, IgxSwitchModule],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlaySampleComponent],
                ngImports: [IgxIconModule, IgxSwitchModule]
            })
        }));

        configs.push(new Config({
            component: OverlayPositionSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlaySampleComponent, IgxSwitchModule],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayPositionSample1Component],
                ngImports: [IgxIconModule, IgxSwitchModule]
            })
        }));

        configs.push(new Config({
            component: OverlayPositionSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlaySampleComponent, IgxSwitchModule],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayPositionSample2Component],
                ngImports: [IgxIconModule, IgxSwitchModule]
            })
        }));

        configs.push(new Config({
            component: OverlayScrollSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlaySampleComponent, IgxSwitchModule],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayScrollSample2Component],
                ngImports: [IgxIconModule, IgxSwitchModule]
            })
        }));

        configs.push(new Config({
            component: OverlayScrollSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlaySampleComponent, IgxSwitchModule],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayScrollSample1Component],
                ngImports: [IgxIconModule, IgxSwitchModule]
            })
        }));

        configs.push(new Config({
            component: OverlayScrollSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxOverlayService, OverlaySampleComponent, IgxSwitchModule],
                ngProviders: [IgxOverlayService],
                ngDeclarations: [OverlayScrollSample1Component],
                ngImports: [IgxIconModule, IgxSwitchModule]
            })
        }));
        return configs;
    }
}
