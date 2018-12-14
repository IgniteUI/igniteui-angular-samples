/* tslint:disable:object-literal-sort-keys */
import { IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxTimePickerModule } from "igniteui-angular";
import { 
    LocalizationSample1Component 
} from "../../src/app/localization-samples/localization-sample-1/localization-sample-1.component";
import { 
    LocalizationSample2Component 
} from "../../src/app/localization-samples/localization-sample-2/localization-sample-2.component";
import { 
    LocalizationSample3Component 
} from "../../src/app/localization-samples/localization-sample-3/localization-sample-3.component";
import { DATA } from "../../src/app/localization-samples/localization-sample-3/nwindData";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class LocalizationConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // localization sample 1
        configs.push(new Config({
            component: LocalizationSample1Component,
            additionalFiles: ["src/app/localization-samples/localization-sample-1/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxInputGroupModule, LocalizationSample1Component, IgxGridModule, IgxIconModule, DATA],
                ngDeclarations: [LocalizationSample1Component],
                ngImports: [IgxInputGroupModule, IgxGridModule, IgxGridModule.forRoot()]
            }),
            shortenComponentPathBy: "/localization-samples/"
        }));

        // localization sample 2
        configs.push(new Config({
            component: LocalizationSample2Component,
            additionalFiles: ["src/app/localization-samples/localization-sample-2/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxInputGroupModule, LocalizationSample2Component, IgxIconModule,
                          IgxTimePickerModule, IgxGridModule, DATA
                ],
                ngDeclarations: [LocalizationSample2Component],
                ngImports: [IgxInputGroupModule, IgxIconModule, IgxTimePickerModule, IgxGridModule.forRoot()]
            }),
            shortenComponentPathBy: "/localization-samples/"
        }));

        // localization sample 3
        configs.push(new Config({
            component: LocalizationSample3Component,
            additionalFiles: ["src/app/localization-samples/localization-sample-3/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxInputGroupModule, LocalizationSample3Component, IgxGridModule, IgxIconModule, DATA],
                ngDeclarations: [LocalizationSample3Component],
                ngImports: [IgxInputGroupModule, IgxGridModule, IgxGridModule.forRoot()]
            }),
            shortenComponentPathBy: "/localization-samples/"
        }));

        return configs;
    }
}
