import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { SnackbarSample4Component } from "../../src/app/snackbar/snackbar-sample-4/snackbar-sample-4.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxAvatarModule, IgxIconModule, IgxListModule, IgxRippleModule, IgxSnackbarModule } from "igniteui-angular/main";

export class SnackbarConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        configs.push(new Config({
            component: SnackbarSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxIconModule, IgxListModule,
                    IgxRippleModule, IgxSnackbarModule, SnackbarSample4Component],
                ngDeclarations: [SnackbarSample4Component],
                ngImports: [IgxAvatarModule, IgxIconModule, IgxListModule,
                    IgxRippleModule, IgxSnackbarModule]
            }),
            shortenComponentPathBy: "/snackbar/"
        }));

        return configs;
    }
}
