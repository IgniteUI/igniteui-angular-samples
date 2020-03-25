import { IgxDateTimeEditorModule, IgxInputGroupModule } from "igniteui-angular";

import { DateТimeBasic } from "../../src/app/scheduling/datetimeeditor/datetime-basic/datetime-basic.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
export class DateTimeEditorConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // date time editor sample 1
        configs.push(
            new Config({
                component: DateТimeBasic,
                appModuleConfig: new AppModuleConfig({
                    imports: [
                        DateТimeBasic,
                        IgxInputGroupModule
                    ],
                    ngDeclarations: [DateТimeBasic],
                    ngImports: [IgxDateTimeEditorModule, IgxInputGroupModule]
                }),
                shortenComponentPathBy: "/scheduling/datetimeeditor"
            })
        );
        return configs;
    }
}
