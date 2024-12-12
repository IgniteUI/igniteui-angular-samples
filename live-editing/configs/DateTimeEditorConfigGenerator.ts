import {
    IgxDateTimeEditorModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxTextSelectionModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class DateTimeEditorConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // Date Time Basic
        configs.push(
            new Config({
                component: 'DateTimeBasicComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/scheduling/datetimeeditor/"
            })
        );

        // Date Time Advanced
        configs.push(new Config({
            component: 'DateTimeAdvancedComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/datetimeeditor/"
        }));
        return configs;
    }
}
