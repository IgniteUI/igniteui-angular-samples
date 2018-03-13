import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AvatarSample3Component } from "../../src/app/avatar/avatar-sample-3/avatar-sample-3.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxAvatarModule } from "igniteui-angular/main";

export class AvatarConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        configs.push(new Config({
            component: AvatarSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, AvatarSample3Component],
                ngDeclarations: [AvatarSample3Component],
                ngImports: [IgxAvatarModule]
            }),
            shortenComponentPathBy: "/avatar/"
        }));

        return configs;
    }
}
