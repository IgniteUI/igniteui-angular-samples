/* tslint:disable:object-literal-sort-keys */
import { IgxButtonModule, IgxDialogModule, IgxInputGroupModule, IgxRippleModule, IgxIconModule } from "igniteui-angular/main";
import { DialogSample1Component } from "../../src/app/dialog/dialog-sample-1/dialog-sample-1.component";
import { DialogSample2Component } from "../../src/app/dialog/dialog-sample-2/dialog-sample-2.component";
import { DialogSample3Component } from "../../src/app/dialog/dialog-sample-3/dialog-sample-3.component";
import { DialogComponent } from "../../src/app/dialog/dialog.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class DialogConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // dialog sample
        configs.push(new Config({
            component: DialogComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxDialogModule, IgxInputGroupModule, IgxRippleModule,
                    DialogComponent, IgxIconModule],
                ngDeclarations: [DialogComponent],
                ngImports: [IgxButtonModule, IgxDialogModule, IgxInputGroupModule, IgxRippleModule, IgxIconModule]
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
                imports: [IgxButtonModule, IgxDialogModule, IgxInputGroupModule, IgxRippleModule,
                    DialogSample3Component, IgxIconModule],
                ngDeclarations: [DialogSample3Component],
                ngImports: [IgxButtonModule, IgxDialogModule, IgxInputGroupModule, IgxRippleModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/dialog/"
        }));

        return configs;
    }
}
