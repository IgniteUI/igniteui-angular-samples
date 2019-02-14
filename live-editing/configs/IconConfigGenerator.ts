/* tslint:disable:object-literal-sort-keys */
import { IgxIconModule } from "igniteui-angular";
import { IconSample1Component } from "../../src/app/data-display/icon/icon-sample-1/icon-sample-1.component";
import { SvgIconSampleComponent } from "../../src/app/data-display/icon/svg-icon-sample/svg-icon-sample.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class IconConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // icon sample 1
        configs.push(new Config({
            component: IconSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IconSample1Component],
                ngDeclarations: [IconSample1Component],
                ngImports: [IgxIconModule]
            }),
            shortenComponentPathBy: "/data-display/icon/"
        }));

        // SVG icon sample
        configs.push(new Config({
            component: SvgIconSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, SvgIconSampleComponent],
                ngDeclarations: [SvgIconSampleComponent],
                ngImports: [IgxIconModule]
            }),
            shortenComponentPathBy: "/data-display/icon/"
        }));

        return configs;
    }
}
