import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { LayoutComponent } from "../../src/app/layout/layout.component";
import { IgxLayoutModule } from "igniteui-angular/main";

export class LayoutConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        configs.push(new Config({
            component: LayoutComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxLayoutModule, LayoutComponent],
                ngDeclarations: [LayoutComponent],
                ngImports: [IgxLayoutModule]
            })
        }));

        return configs;
    }
}
