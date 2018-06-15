/* tslint:disable:object-literal-sort-keys */
import { IgxButtonModule, IgxRippleModule, IgxToastModule } from "igniteui-angular";
import { ToastSample1Component } from "../../src/app/toast/toast-sample-1/toast-sample-1.component";
import { ToastSample5Component } from "../../src/app/toast/toast-sample-5/toast-sample-5.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ToastConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

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
