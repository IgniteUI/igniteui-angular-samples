/* tslint:disable:object-literal-sort-keys */
import { IgxAvatarModule, IgxIconModule, IgxListModule,
    IgxRippleModule, IgxSnackbarModule } from "igniteui-angular";
import { SnackbarSample4Component
} from "../../src/app/notifications/snackbar/snackbar-sample-4/snackbar-sample-4.component";
import { SnackbarSample5Component
} from "../../src/app/notifications/snackbar/snackbar-sample-5/snackbar-sample-5.component";
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
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        configs.push(new Config({
            component: SnackbarSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSnackbarModule, SnackbarSample5Component],
                ngDeclarations: [SnackbarSample5Component],
                ngImports: [IgxSnackbarModule]
            }),
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        return configs;
    }
}
