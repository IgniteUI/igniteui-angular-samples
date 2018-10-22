/* tslint:disable:object-literal-sort-keys */
import { ShadowsSampleComponent } from "../../src/app/shadows/shadows-sample-1/shadows-sample.component";
import { ShadowsSample2Component } from "../../src/app/shadows/shadows-sample-2/shadows-sample-2.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ShadowsConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: ShadowsSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [ShadowsSampleComponent],
                ngDeclarations: [ShadowsSampleComponent],
                ngImports: []
            })
        }));

        configs.push(new Config({
            component: ShadowsSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [ShadowsSample2Component],
                ngDeclarations: [ShadowsSample2Component],
                ngImports: []
            }),
            shortenComponentPathBy: "/shadows/"
        }));

        return configs;
    }
}
