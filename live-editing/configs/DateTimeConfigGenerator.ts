/* tslint:disable:object-literal-sort-keys */
import { IgxDateTimeEditorModule, IgxInputGroupModule } from "igniteui-angular";
import { DateTimeAdvancedComponent } from "../../src/app/scheduling/datetimeeditor/datetime-advanced/datetime-advanced";

import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class DateTimeEditorConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // Date Time Advanced
        configs.push(new Config({
            component: DateTimeAdvancedComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxInputGroupModule, IgxDateTimeEditorModule, DateTimeAdvancedComponent],
                ngDeclarations: [DateTimeAdvancedComponent],
                ngImports: [IgxInputGroupModule, IgxDateTimeEditorModule]
            }),
            shortenComponentPathBy: "/scheduling/datetimeeditor/"
        }));

        return configs;
    }
}
