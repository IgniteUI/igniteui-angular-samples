import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule } from "igniteui-angular/main";
import { LinearProgressbarComponent } from "../../src/app/linear-progressbar/linear-progressbar.component";
import { LinearProgressbarSample1Component } from "../../src/app/linear-progressbar/linear-progressbar-sample-1/linear-progressbar-sample-1.component";
import { LinearProgressbarSample2Component } from "../../src/app/linear-progressbar/linear-progressbar-sample-2/linear-progressbar-sample-2.component";

export class LinearProgressbarConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        configs.push(new Config({
            component: LinearProgressbarComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule,
                    LinearProgressbarComponent],
                ngDeclarations: [LinearProgressbarComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule]
            })
        }));

        configs.push(new Config({
            component: LinearProgressbarSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule,
                    LinearProgressbarSample1Component],
                ngDeclarations: [LinearProgressbarSample1Component],
                ngImports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/linear-progressbar/"
        }));

        configs.push(new Config({
            component: LinearProgressbarSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule,
                    LinearProgressbarSample2Component],
                ngDeclarations: [LinearProgressbarSample2Component],
                ngImports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/linear-progressbar/"
        }));

        return configs;
    }
}
