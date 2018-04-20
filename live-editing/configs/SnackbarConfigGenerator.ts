/* tslint:disable:object-literal-sort-keys */
import { IgxAvatarModule, IgxIconModule, IgxListModule,
    IgxRippleModule, IgxSnackbarModule } from "igniteui-angular/main";
import { SnackbarSample4Component } from "../../src/app/snackbar/snackbar-sample-4/snackbar-sample-4.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class SnackbarConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

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
