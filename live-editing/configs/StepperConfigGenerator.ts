import { IgxStepperModule } from 'igniteui-angular/stepper';
import { IgxBadgeModule } from 'igniteui-angular/badge';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
import { IgxButtonModule, IgxMaskModule } from 'igniteui-angular/directives';
import { IgxRadioModule } from 'igniteui-angular/radio';
import { IgxCardModule } from 'igniteui-angular/card';
import { IgxButtonGroupModule } from 'igniteui-angular/button-group';
import { IgxCheckboxModule } from 'igniteui-angular/checkbox';
import { IgxSelectModule } from 'igniteui-angular/select';
import { IgxIconModule } from 'igniteui-angular/icon';
import { ReactiveFormsModule} from '@angular/forms'
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';;

export class StepperConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'StepperOverviewSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        configs.push(new Config({
            component: 'StepperSampleReactiveFormsComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        configs.push(new Config({
            component: 'StepperLabelPositionAndOrientationSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        configs.push(new Config({
            component: 'StepperLinearSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        configs.push(new Config({
            component: 'StepperStepTypesSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        configs.push(new Config({
            component: 'StepperStylingSampleComponent',
            additionalFiles: ["/src/app/layouts/stepper/stepper-styling-sample/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        return configs;
    }
}
