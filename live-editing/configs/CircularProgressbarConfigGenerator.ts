/* tslint:disable:object-literal-sort-keys */
import { IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule } from "igniteui-angular/main";
import { CircularProgressbarComponent } from "../../src/app/circular-progressbar/circular-progressbar.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class CircularProgressbarConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: CircularProgressbarComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule,
                     IgxRippleModule, CircularProgressbarComponent],
                ngDeclarations: [CircularProgressbarComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule]
            })
        }));

        return configs;
    }
}
