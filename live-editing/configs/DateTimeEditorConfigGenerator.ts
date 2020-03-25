import { IgxDateTimeEditorModule, IgxInputGroupModule } from "igniteui-angular";

import { DateTimeBasicComponent } from "../../src/app/scheduling/datetimeeditor/datetime-basic/datetime-basic.component";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
export class DateTimeEditorConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // date time editor sample 1
        configs.push(
            new Config({
                component: DateТimeBasicComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [
                        DateТimeBasicComponent,
                        IgxInputGroupModule
                    ],
                    ngDeclarations: [DateТimeBasicComponent],
                    ngImports: [IgxDateTimeEditorModule, IgxInputGroupModule]
                }),
                shortenComponentPathBy: "/scheduling/datetimeeditor"
            })
        );
        return configs;
    }
}
