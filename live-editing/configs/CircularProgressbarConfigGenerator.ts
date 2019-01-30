/* tslint:disable:object-literal-sort-keys */
import { IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule } from "igniteui-angular";
// tslint:disable-next-line:max-line-length
import { CircularIndeterminateProgressbarComponent } from "../../src/app/data-display/circular-progressbar/circular-indeterminate-progressbar/circular-indeterminate-progressbar.component";
import { CircularProgressbarComponent
} from "../../src/app/data-display/circular-progressbar/circular-progressbar.component";
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
            }),
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: CircularIndeterminateProgressbarComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule,
                     IgxRippleModule, CircularIndeterminateProgressbarComponent],
                ngDeclarations: [CircularIndeterminateProgressbarComponent],
                ngImports: [IgxButtonModule, IgxIconModule, IgxProgressBarModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/data-display/circular-progressbar/"
        }));

        return configs;
    }
}
