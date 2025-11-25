import { IgxButtonModule } from 'igniteui-angular/directives';
import { IgxCalendarModule } from 'igniteui-angular/calendar';
import { IgxCardModule } from 'igniteui-angular/card';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
import { IgxSelectModule } from 'igniteui-angular/select';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class MonthPickerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // default month picker sample 1
        configs.push(new Config({
            component: 'MonthpickerSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/monthpicker/"
        }));

        // localized month picker sample 3
        configs.push(new Config({
            component: 'MonthpickerSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/monthpicker/"
        }));

        // styled month picker sample
        configs.push(new Config({
            component: 'MonthpickerStylingComponent',
            additionalFiles: ["/src/app/scheduling/monthpicker/monthpicker-styling/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/monthpicker/"
        }));

        return configs;
    }
}
