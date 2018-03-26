import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxButtonModule, IgxDialogModule, IgxInputModule, IgxRippleModule } from "igniteui-angular/main";
import { DialogComponent } from "../../src/app/dialog/dialog.component";
import { DialogSample1Component } from "../../src/app/dialog/dialog-sample-1/dialog-sample-1.component";
import { DialogSample2Component } from "../../src/app/dialog/dialog-sample-2/dialog-sample-2.component";
import { DialogSample3Component } from "../../src/app/dialog/dialog-sample-3/dialog-sample-3.component";

export class DialogConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        // dialog sample
        configs.push(new Config({
            component: DialogComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxDialogModule, IgxInputModule, IgxRippleModule,
                    DialogComponent],
                ngDeclarations: [DialogComponent],
                ngImports: [IgxButtonModule, IgxDialogModule, IgxInputModule, IgxRippleModule]
            })
        }));

        // dialog sample 1
        configs.push(new Config({
            component: DialogSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxDialogModule, IgxRippleModule,
                    DialogSample1Component],
                ngDeclarations: [DialogSample1Component],
                ngImports: [IgxButtonModule, IgxDialogModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/dialog/"
        }));

        // dialog sample 2
        configs.push(new Config({
            component: DialogSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxDialogModule, IgxRippleModule,
                    DialogSample2Component],
                ngDeclarations: [DialogSample2Component],
                ngImports: [IgxButtonModule, IgxDialogModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/dialog/"
        }));

        // dialog sample 3
        configs.push(new Config({
            component: DialogSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxDialogModule, IgxInputModule, IgxRippleModule,
                    DialogSample3Component],
                ngDeclarations: [DialogSample3Component],
                ngImports: [IgxButtonModule, IgxDialogModule, IgxInputModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/dialog/"
        }));

        return configs;
    }
}
