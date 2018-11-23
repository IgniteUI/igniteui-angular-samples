/* tslint:disable:object-literal-sort-keys */
import { IgxBannerModule, IgxButtonModule, IgxCardModule } from "igniteui-angular";
import { BannerSample1Component } from "../../src/app/banner/banner-sample-1/banner-sample-1.component";
import { BannerSample2Component } from "../../src/app/banner/banner-sample-2/banner-sample-2.component";
import { BannerSample3Component } from "../../src/app/banner/banner-sample-3/banner-sample-3.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class BannerConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: BannerSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBannerModule, IgxButtonModule, IgxCardModule, BannerSample1Component],
                ngDeclarations: [BannerSample1Component],
                ngImports: [IgxBannerModule, IgxButtonModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/banner/"
        }));

        configs.push(new Config({
            component: BannerSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBannerModule, IgxButtonModule, IgxCardModule, BannerSample2Component],
                ngDeclarations: [BannerSample2Component],
                ngImports: [IgxBannerModule, IgxButtonModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/banner/"
        }));

        configs.push(new Config({
            component: BannerSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBannerModule, IgxButtonModule, IgxCardModule, BannerSample3Component],
                ngDeclarations: [BannerSample3Component],
                ngImports: [IgxBannerModule, IgxButtonModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/banner/"
        }));

        return configs;
    }
}
