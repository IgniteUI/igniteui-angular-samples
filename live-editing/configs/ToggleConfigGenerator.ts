import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { ToggleComponent } from "../../src/app/toggle/toggle.component";
import { IgxButtonModule, IgxToggleModule } from "igniteui-angular/main";
import { ToggleSample1Component } from "../../src/app/toggle/toggle-sample-1/toggle-sample-1.component";
import { ToggleSample2Component } from "../../src/app/toggle/toggle-sample-2/toggle-sample-2.component";
import { ToggleSample3Component } from "../../src/app/toggle/toggle-sample-3/toggle-sample-3.component";

export class ToggleConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        // toggle sample
        configs.push(new Config({
            component: ToggleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxToggleModule, ToggleComponent],
                ngDeclarations: [ToggleComponent],
                ngImports: [IgxButtonModule, IgxToggleModule]
            })
        }));

        // toggle sample 1
        configs.push(new Config({
            component: ToggleSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxToggleModule, ToggleSample1Component],
                ngDeclarations: [ToggleSample1Component],
                ngImports: [IgxButtonModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/toggle/"
        }));

        // toggle sample 2
        configs.push(new Config({
            component: ToggleSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxToggleModule, ToggleSample2Component],
                ngDeclarations: [ToggleSample2Component],
                ngImports: [IgxButtonModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/toggle/"
        }));

        // toggle sample 3
        configs.push(new Config({
            component: ToggleSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxToggleModule, ToggleSample3Component],
                ngDeclarations: [ToggleSample3Component],
                ngImports: [IgxButtonModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/toggle/"
        }));

        return configs;
    }
}
