/* tslint:disable:object-literal-sort-keys */
import { IgxBannerModule, IgxButtonModule, IgxCardModule, IgxToastModule, IgxRippleModule, IgxIconModule, IgxAvatarModule } from "igniteui-angular";
import { BannerSample1Component } from "../../src/app/banner/banner-sample-1/banner-sample-1.component";
import { BannerSample2Component } from "../../src/app/banner/banner-sample-2/banner-sample-2.component";
import { BannerSample3Component } from "../../src/app/banner/banner-sample-3/banner-sample-3.component";
import { BannerSample4Component } from "../../src/app/banner/banner-sample-4/banner-sample-4.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class BannerConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: BannerSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBannerModule, IgxCardModule, IgxIconModule, BannerSample1Component],
                ngDeclarations: [BannerSample1Component],
                ngImports: [IgxBannerModule, IgxCardModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/banner/"
        }));

        configs.push(new Config({
            component: BannerSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBannerModule, IgxCardModule, IgxToastModule, IgxButtonModule,
                    IgxRippleModule, IgxIconModule, BannerSample2Component],
                ngDeclarations: [BannerSample2Component],
                ngImports: [IgxBannerModule, IgxCardModule, IgxToastModule, IgxButtonModule,
                    IgxRippleModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/banner/"
        }));

        configs.push(new Config({
            component: BannerSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBannerModule, IgxCardModule, IgxToastModule, IgxButtonModule,
                    IgxRippleModule, IgxIconModule, BannerSample3Component],
                ngDeclarations: [BannerSample3Component],
                ngImports: [IgxBannerModule, IgxCardModule, IgxToastModule, IgxButtonModule,
                    IgxRippleModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/banner/"
        }));

        configs.push(new Config({
            component: BannerSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBannerModule, IgxToastModule, IgxAvatarModule, IgxRippleModule,
                    IgxIconModule, BannerSample4Component],
                ngDeclarations: [BannerSample4Component],
                ngImports: [IgxBannerModule, IgxAvatarModule, IgxRippleModule, IgxIconModule,
                    IgxButtonModule]
            }),
            shortenComponentPathBy: "/banner/"
        }));

        return configs;
    }
}
