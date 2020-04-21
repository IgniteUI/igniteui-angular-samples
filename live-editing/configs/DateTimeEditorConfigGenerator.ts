import { IgxDateTimeEditorModule, IgxInputGroupModule } from "igniteui-angular";
import {
    DateTimeBasicComponent
} from "../../src/app/scheduling/datetimeeditor/datetime-basic/datetime-basic.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
export class DateTimeEditorConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // Date Time Basic
        configs.push(
            new Config({
                component: DateTimeBasicComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxInputGroupModule, DateTimeBasicComponent, IgxDateTimeEditorModule],
                    ngDeclarations: [DateTimeBasicComponent],
                    ngImports: [IgxInputGroupModule, IgxDateTimeEditorModule]
                }),
                shortenComponentPathBy: "/scheduling/datetimeeditor"
            })
        );
        return configs;
    }
}
