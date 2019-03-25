/* tslint:disable:object-literal-sort-keys */
import { IgxAvatarModule, IgxBannerModule, IgxButtonModule, IgxCardModule, IgxIconModule,
    IgxInputGroupModule, IgxNavbarModule, IgxRippleModule, IgxSwitchModule, IgxToastModule } from "igniteui-angular";
import { BannerSample1Component } from "../../src/app/notifications/banner/banner-sample-1/banner-sample-1.component";
import { BannerSample2Component } from "../../src/app/notifications/banner/banner-sample-2/banner-sample-2.component";
import { BannerSample3Component } from "../../src/app/notifications/banner/banner-sample-3/banner-sample-3.component";
import { BannerSample4Component } from "../../src/app/notifications/banner/banner-sample-4/banner-sample-4.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class BannerConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: BannerSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBannerModule, IgxNavbarModule, IgxCardModule, IgxIconModule, BannerSample1Component],
                ngDeclarations: [BannerSample1Component],
                ngImports: [IgxBannerModule, IgxCardModule, IgxIconModule, IgxNavbarModule]
            }),
            shortenComponentPathBy: "/notifications/banner/"
        }));

        configs.push(new Config({
            component: BannerSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBannerModule, IgxNavbarModule, IgxCardModule, IgxToastModule, IgxButtonModule,
                    IgxRippleModule, IgxIconModule, BannerSample2Component],
                ngDeclarations: [BannerSample2Component],
                ngImports: [IgxBannerModule, IgxCardModule, IgxNavbarModule, IgxToastModule, IgxButtonModule,
                    IgxRippleModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/notifications/banner/"
        }));

        configs.push(new Config({
            component: BannerSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBannerModule, IgxCardModule, IgxToastModule, IgxNavbarModule, IgxButtonModule,
                    IgxRippleModule, IgxIconModule, BannerSample3Component],
                ngDeclarations: [BannerSample3Component],
                ngImports: [IgxBannerModule, IgxCardModule, IgxToastModule,  IgxNavbarModule, IgxButtonModule,
                    IgxRippleModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/notifications/banner/"
        }));

        configs.push(new Config({
            component: BannerSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBannerModule, IgxToastModule, IgxAvatarModule, IgxButtonModule, IgxInputGroupModule,
                    IgxNavbarModule, IgxRippleModule, IgxIconModule, BannerSample4Component, IgxSwitchModule],
                ngDeclarations: [BannerSample4Component],
                ngImports: [IgxBannerModule, IgxAvatarModule, IgxRippleModule, IgxIconModule, IgxInputGroupModule,
                    IgxButtonModule, IgxNavbarModule, IgxSwitchModule]
            }),
            shortenComponentPathBy: "/notifications/banner/"
        }));

        return configs;
    }
}
