/* tslint:disable:object-literal-sort-keys */
import { IgxAvatarModule, IgxFilterModule, IgxForOfModule,
    IgxIconModule, IgxListModule, IgxRippleModule } from "igniteui-angular/main";
import { IgxForComponent } from "../../src/app/igxFor/igxFor.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxForComponent } from "../../src/app/igxFor/igxFor.component";
import { 
    IgxAvatarModule,
    IgxFilterModule,
    IgxListModule,
    IgxIconModule,
    IgxRippleModule,
    IgxForOfModule,
    IgxInputGroupModule
} from "igniteui-angular/main";

export class ForConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: IgxForComponent,
            additionalFiles: ["/src/app/igxFor/names.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxFilterModule, IgxListModule, IgxIconModule,
                    IgxRippleModule, IgxForOfModule, IgxForComponent, IgxInputGroupModule],
                ngDeclarations: [IgxForComponent],
                ngImports: [IgxAvatarModule, IgxFilterModule, IgxListModule, 
                            IgxIconModule, IgxRippleModule, IgxForOfModule, IgxInputGroupModule]
            })
        }));

        return configs;
    }
}
