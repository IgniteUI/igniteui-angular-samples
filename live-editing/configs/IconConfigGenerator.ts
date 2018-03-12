import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IconSample1Component } from "../../src/app/icon/icon-sample-1/icon-sample-1.component";
import { IgxIconModule } from "igniteui-angular/main";

export class IconConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        // icon sample 1
        configs.push(new Config({
            component: IconSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IconSample1Component],
                ngDeclarations: [IconSample1Component],
                ngImports: [IgxIconModule]
            })
        }));

        return configs;
    }
}
