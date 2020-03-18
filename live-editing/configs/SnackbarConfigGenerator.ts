/* tslint:disable:object-literal-sort-keys */
import { IgxAvatarModule, IgxButtonModule, IgxIconModule,
    IgxListModule, IgxRippleModule, IgxSnackbarModule } from "igniteui-angular";
import { SnackbarSample1Component
} from "../../src/app/notifications/snackbar/snackbar-sample-1/snackbar-sample-1.component";
import { SnackbarSample2Component
} from "../../src/app/notifications/snackbar/snackbar-sample-2/snackbar-sample-2.component";
import { SnackbarSample4Component
} from "../../src/app/notifications/snackbar/snackbar-sample-4/snackbar-sample-4.component";
import { SnackbarSample5Component
} from "../../src/app/notifications/snackbar/snackbar-sample-5/snackbar-sample-5.component";
import { SnackbarStyleComponent
} from "../../src/app/notifications/snackbar/snackbar-style/snackbar-style.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class SnackbarConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: SnackbarSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxRippleModule,
                    IgxSnackbarModule, SnackbarSample1Component],
                ngDeclarations: [SnackbarSample1Component],
                ngImports: [IgxButtonModule, IgxRippleModule, IgxSnackbarModule]
            }),
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        configs.push(new Config({
            component: SnackbarSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxRippleModule,
                IgxSnackbarModule, SnackbarSample2Component],
                ngDeclarations: [SnackbarSample2Component],
                ngImports: [IgxButtonModule, IgxRippleModule, IgxSnackbarModule]
            }),
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        configs.push(new Config({
            component: SnackbarSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxListModule,
                    IgxRippleModule, IgxSnackbarModule, SnackbarSample4Component],
                ngDeclarations: [SnackbarSample4Component],
                ngImports: [IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxListModule,
                    IgxRippleModule, IgxSnackbarModule]
            }),
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        configs.push(new Config({
            component: SnackbarSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxSnackbarModule, SnackbarSample5Component],
                ngDeclarations: [SnackbarSample5Component],
                ngImports: [IgxButtonModule, IgxSnackbarModule]
            }),
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        configs.push(new Config({
            component: SnackbarStyleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxSnackbarModule, SnackbarStyleComponent],
                ngDeclarations: [SnackbarStyleComponent],
                ngImports: [IgxButtonModule, IgxSnackbarModule]
            }),
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        return configs;
    }
}
