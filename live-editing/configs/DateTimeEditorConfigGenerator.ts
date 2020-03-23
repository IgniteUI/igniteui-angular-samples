import { IgxDateTimeEditorDirective, IgxInputGroupModule } from "igniteui-angular";

import { DateТimeЕditorSample1Component } from "../../src/app/scheduling/datetimeeditor/datetimeeditor-sample-1/datetimeeditor-sample-1.component";

import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
export class DateTimeEditorConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // date time editor sample 1
        configs.push(
            new Config({
                component: DateТimeЕditorSample1Component,
                appModuleConfig: new AppModuleConfig({
                    imports: [
                        DateТimeЕditorSample1Component,
                        DateТimeЕditorSample1Component
                    ],
                    ngDeclarations: [DateТimeЕditorSample1Component],
                    ngImports: [IgxDateTimeEditorDirective]
                }),
                shortenComponentPathBy: "/scheduling/datetimeeditor"
            })
        );
        return configs;
    }
}
