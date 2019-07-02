/* tslint:disable:object-literal-sort-keys */
import { IgxAvatarModule, IgxButtonModule, IgxChipsModule, IgxDropDownModule, IgxInputGroupModule, IgxToastModule
} from "igniteui-angular";
import { ChipSampleComponent, EmailFilterPipe } from "../../src/app/data-display/chip/chip.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ChipConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: ChipSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxChipsModule, IgxDropDownModule, IgxInputGroupModule, IgxButtonModule,
                    IgxToastModule, IgxAvatarModule, ChipSampleComponent, EmailFilterPipe],
                ngDeclarations: [ChipSampleComponent, EmailFilterPipe],
                ngImports: [IgxChipsModule, IgxDropDownModule, IgxButtonModule,
                    IgxInputGroupModule, IgxToastModule, IgxAvatarModule]
            }),
            shortenComponentPathBy: "/data-display/"
        }));

        return configs;
    }
}
