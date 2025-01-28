import {
    IgxStepperModule,
    IgxBadgeModule,
    IgxInputGroupModule,
    IgxMaskModule,
    IgxRadioModule,
    IgxCardModule,
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxCheckboxModule,
    IgxSelectModule,
    IgxIconModule
} from 'igniteui-angular';
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
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        return configs;
    }
}
