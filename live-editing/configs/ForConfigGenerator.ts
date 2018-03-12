import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxForComponent } from "../../src/app/igxFor/igxFor.component";
import { IgxAvatarModule, IgxFilterModule, IgxListModule, IgxIconModule, IgxRippleModule, IgxForOfModule } from "igniteui-angular/main";

export class ForConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        configs.push(new Config({
            component: IgxForComponent,
            additionalFiles: ["/src/app/igxFor/names.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxFilterModule, IgxListModule, IgxIconModule,
                    IgxRippleModule, IgxForOfModule, IgxForComponent],
                ngDeclarations: [IgxForComponent],
                ngImports: [IgxAvatarModule, IgxFilterModule, IgxListModule, IgxIconModule, IgxRippleModule, IgxForOfModule]
            })
        }));

        return configs;
    }
}
