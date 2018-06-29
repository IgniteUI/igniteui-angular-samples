/* tslint:disable:object-literal-sort-keys */
import { IgxChipsModule, IgxDropDownModule, IgxToastModule,
        IgxInputGroupModule, IgxAvatarModule } from "igniteui-angular";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { ChipSampleComponent, EmailFilterPipe } from "../../src/app/chip/chip.component";

export class ChipConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: ChipSampleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxChipsModule, IgxDropDownModule, IgxInputGroupModule,
                    IgxToastModule, IgxAvatarModule, ChipSampleComponent, EmailFilterPipe],
                ngDeclarations: [ChipSampleComponent, EmailFilterPipe],
                ngImports: [IgxChipsModule, IgxDropDownModule,
                    IgxInputGroupModule, IgxToastModule, IgxAvatarModule]
            })
        }));

        return configs;
    }
}
