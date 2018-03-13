import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { CircularProgressbarComponent } from "../../src/app/circular-progressbar/circular-progressbar.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule } from "igniteui-angular/main";

export class CircularProgressbarConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        configs.push(new Config({
            component: CircularProgressbarComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule, CircularProgressbarComponent],
                ngDeclarations: [CircularProgressbarComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule]
            })
        }));

        return configs;
    }
}
