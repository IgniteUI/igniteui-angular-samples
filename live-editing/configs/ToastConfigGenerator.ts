import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { ToastSample1Component } from "../../src/app/toast/toast-sample-1/toast-sample-1.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxButtonModule, IgxRippleModule, IgxToastModule } from "igniteui-angular/main";
import { ToastSample5Component } from "../../src/app/toast/toast-sample-5/toast-sample-5.component";

export class ToastConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        // toast sample 1
        configs.push(new Config({
            component: ToastSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxRippleModule,
                    IgxToastModule, ToastSample1Component],
                ngDeclarations: [ToastSample1Component],
                ngImports: [IgxButtonModule, IgxRippleModule, IgxToastModule]
            }),
            shortenComponentPathBy: "/toast/"
        }));

        // toast sample 5
        configs.push(new Config({
            component: ToastSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxRippleModule,
                    IgxToastModule, ToastSample5Component],
                ngDeclarations: [ToastSample5Component],
                ngImports: [IgxButtonModule, IgxRippleModule,
                    IgxToastModule]
            }),
            shortenComponentPathBy: "/toast/"
        }));

        return configs;
    }
}

