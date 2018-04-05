import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { MaskSample1Component } from "../../src/app/mask/mask-sample-1/mask-sample-1.component";
import { MaskSample2Component } from "../../src/app/mask/mask-sample-2/mask-sample-2.component";
import { MaskSample3Component } from "../../src/app/mask/mask-sample-3/mask-sample-3.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxSnackbarModule, IgxMaskModule, IgxInputModule, IgxLabelModule, IgxSwitchModule } from "igniteui-angular/main";

export class MaskConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        // mask sample 1
        configs.push(new Config({
            component: MaskSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSnackbarModule, IgxMaskModule, IgxInputModule, IgxLabelModule, MaskSample1Component],
                ngDeclarations: [MaskSample1Component],
                ngImports: [IgxSnackbarModule, IgxMaskModule, IgxInputModule, IgxLabelModule]
            }),
            shortenComponentPathBy: "/mask/"
        }));

        // mask sample 2
        configs.push(new Config({
            component: MaskSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxMaskModule, IgxInputModule, IgxLabelModule, MaskSample2Component],
                ngDeclarations: [MaskSample2Component],
                ngImports: [IgxMaskModule, IgxInputModule, IgxLabelModule]
            }),
            shortenComponentPathBy: "/mask/"
        }));

        // mask sample 3
        configs.push(new Config({
            component: MaskSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxSwitchModule, IgxMaskModule, IgxInputModule, IgxLabelModule, MaskSample3Component],
                ngDeclarations: [MaskSample3Component],
                ngImports: [IgxSwitchModule, IgxMaskModule, IgxInputModule, IgxLabelModule]
            }),
            shortenComponentPathBy: "/mask/"
        }));

        return configs;
    }
}
