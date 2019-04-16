/* tslint:disable:object-literal-sort-keys */
import { IgxDividerModule } from "igniteui-angular";
import { DividerDashedComponent } from "../../src/app/layouts/divider/dashed/divider-dashed.component";
import { DividerDefaultComponent } from "../../src/app/layouts/divider/default/divider-default.component";
import { DividerInsetComponent } from "../../src/app/layouts/divider/inset/divider-inset.component";
import { DividerVerticalComponent } from "../../src/app/layouts/divider/vertical/divider-vertical.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class DividerConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: DividerDefaultComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDividerModule, DividerDefaultComponent],
                ngDeclarations: [DividerDefaultComponent],
                ngImports: [IgxDividerModule]
            }),
            shortenComponentPathBy: "/layouts/divider/"
        }));

        configs.push(new Config({
            component: DividerDashedComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDividerModule, DividerDashedComponent],
                ngDeclarations: [DividerDashedComponent],
                ngImports: [IgxDividerModule]
            }),
            shortenComponentPathBy: "/layouts/divider/dashed"
        }));

        configs.push(new Config({
            component: DividerVerticalComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDividerModule, DividerVerticalComponent],
                ngDeclarations: [DividerVerticalComponent],
                ngImports: [IgxDividerModule]
            }),
            shortenComponentPathBy: "/layouts/divider/vertical"
        }));

        configs.push(new Config({
            component: DividerInsetComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDividerModule, DividerInsetComponent],
                ngDeclarations: [DividerInsetComponent],
                ngImports: [IgxDividerModule]
            }),
            shortenComponentPathBy: "/layouts/divider/inset"
        }));

        return configs;
    }
}
