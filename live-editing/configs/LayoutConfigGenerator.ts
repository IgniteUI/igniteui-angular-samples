/* tslint:disable:object-literal-sort-keys */
import { IgxLayoutModule } from "igniteui-angular/main";
import { LayoutComponent } from "../../src/app/layout/layout.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class LayoutConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

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
