//import { IConfigGenerator } from "./core/IConfigGenerator";
//import { Config } from "./core/Config";
//import { LabelInputComponent } from "../../src/app/label-input/label-input.component";
//import { AppModuleConfig } from "./core/AppModuleConfig";
//import { IgxInputModule, IgxLabelModule } from "igniteui-angular/main";

//export class LabelAndInputConfigGenerator implements IConfigGenerator {
//    generateConfigs(): Config[] {
//        let configs = new Array<Config>();

//        configs.push(new Config({
//            component: LabelInputComponent,
//            appModuleConfig: new AppModuleConfig({
//                imports: [IgxInputModule, IgxLabelModule, LabelInputComponent],
//                ngDeclarations: [LabelInputComponent],
//                ngImports: [IgxInputModule, IgxLabelModule]
//            })
//        }));

//        return configs;
//    }
//}
