import { IgxDateTimeEditorModule } from 'igniteui-angular/core';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
import { IgxTextSelectionModule } from 'igniteui-angular/directives';
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
