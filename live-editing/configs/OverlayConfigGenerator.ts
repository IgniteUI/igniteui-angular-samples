import { IgxButtonDirective, IgxButtonModule, IgxDividerModule, IgxToggleModule } from 'igniteui-angular/directives';
import { IgxButtonGroupModule } from 'igniteui-angular/button-group';
import { IgxCardModule } from 'igniteui-angular/card';
import { IgxComboModule } from 'igniteui-angular/combo';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxOverlayService } from 'igniteui-angular/core';
import { IgxSwitchModule } from 'igniteui-angular/switch';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
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
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: 'OverlaySampleMain2Component',
            additionalFiles: ["/src/app/layouts/card/card-sample-1/card-sample-1.component.ts",
            "/src/app/layouts/card/card-sample-1/card-sample-1.component.scss",
            "/src/app/layouts/card/card-sample-1/card-sample-1.component.html",
            "/src/app/layouts/card/card.blueprint.ts"],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'OverlayPositionSample1Component',
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: 'OverlayPositionSample2Component',
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: 'OverlayPositionSample3Component',
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: 'OverlayScrollSample2Component',
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: 'OverlayScrollSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: 'OverlayPresetSettingsSampleComponent',
            additionalFiles: ["/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.ts",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.scss",
            "/src/app/interactions/overlay/overlay-dynamic-card/overlay-dynamic-card.component.html"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        configs.push(new Config({
            component: 'OverlayStylingComponent',
            additionalFiles: ["/src/app/interactions/overlay/overlay-styling/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/overlay/"
        }));

        return configs;
    }
}
