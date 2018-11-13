/* tslint:disable:object-literal-sort-keys */
import { IgxBannerModule, IgxButtonModule, IgxCardModule } from "igniteui-angular";
import { BannerSample1Component } from "../../src/app/banner/banner-sample-1/banner-sample-1.component";
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
            shortenComponentPathBy: "/snackbar/"
        }));

        return configs;
    }
}
