/* tslint:disable:object-literal-sort-keys */
import { IgxButtonGroupModule, IgxInputGroupModule, IgxIconModule } from "igniteui-angular";
import { DisplayDensityComponent } from "../../src/app/display-density/display-density.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class DensityConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: DisplayDensityComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [DisplayDensityComponent, IgxInputGroupModule, IgxButtonGroupModule, IgxIconModule],
                ngDeclarations: [DisplayDensityComponent],
                ngImports: [IgxInputGroupModule, IgxButtonGroupModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/density/"
        }));

        return configs;
    }
}
