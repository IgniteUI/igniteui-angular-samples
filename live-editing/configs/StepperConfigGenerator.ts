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
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';

export class StepperConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'StepperOverviewSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['StepperOverviewSampleComponent', 'IgxStepperModule', 'IgxMaskModule', 'IgxInputGroupModule', 'IgxButtonModule',
                    'IgxRadioModule', 'IgxCardModule', 'IgxCheckboxModule', 'IgxSelectModule',
                    'IgxIconModule', 'IgxBadgeModule'],
                ngDeclarations: ['StepperOverviewSampleComponent'],
                ngImports: ['IgxStepperModule', 'IgxMaskModule', 'IgxInputGroupModule', 'IgxButtonModule',
                    'IgxRadioModule', 'IgxCardModule', 'IgxCheckboxModule', 'IgxSelectModule',
                    'IgxIconModule', 'IgxBadgeModule']
            }),
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        configs.push(new Config({
            component: 'StepperSampleReactiveFormsComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['ReactiveFormsModule', 'StepperSampleReactiveFormsComponent', 'IgxStepperModule', 'IgxMaskModule', 'IgxInputGroupModule', 'IgxButtonModule',
                    'IgxRadioModule', 'IgxCardModule', 'IgxCheckboxModule', 'IgxSelectModule',
                    'IgxIconModule', 'IgxBadgeModule'],
                ngDeclarations: ['StepperSampleReactiveFormsComponent'],
                ngImports: ['ReactiveFormsModule', 'IgxStepperModule', 'IgxMaskModule', 'IgxInputGroupModule', 'IgxButtonModule',
                    'IgxRadioModule', 'IgxCardModule', 'IgxCheckboxModule', 'IgxSelectModule',
                    'IgxIconModule', 'IgxBadgeModule']
            }),
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        configs.push(new Config({
            component: 'StepperLabelPositionAndOrientationSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['StepperLabelPositionAndOrientationSampleComponent',
                    'IgxStepperModule', 'IgxButtonModule', 'IgxButtonGroupModule'],
                ngDeclarations: ['StepperLabelPositionAndOrientationSampleComponent'],
                ngImports: ['IgxStepperModule', 'IgxButtonModule', 'IgxButtonGroupModule']
            }),
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        configs.push(new Config({
            component: 'StepperLinearSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['StepperLinearSampleComponent', 'IgxStepperModule', 'IgxIconModule', 'IgxButtonModule', 'IgxButtonGroupModule',
                    'IgxInputGroupModule', 'IgxRadioModule'],
                ngDeclarations: ['StepperLinearSampleComponent'],
                ngImports: ['IgxStepperModule', 'IgxIconModule', 'IgxButtonModule',
                    'IgxButtonGroupModule', 'IgxInputGroupModule', 'IgxRadioModule']
            }),
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        configs.push(new Config({
            component: 'StepperStepTypesSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['StepperStepTypesSampleComponent', 'IgxStepperModule', 'IgxButtonGroupModule'],
                ngDeclarations: ['StepperStepTypesSampleComponent'],
                ngImports: ['IgxStepperModule', 'IgxButtonGroupModule']
            }),
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        configs.push(new Config({
            component: 'StepperStylingSampleComponent',
            additionalFiles: ["/src/app/layouts/stepper/stepper-styling-sample/layout.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['StepperStylingSampleComponent', 'IgxStepperModule', 'IgxIconModule', 'IgxButtonModule'],
                ngDeclarations: ['StepperStylingSampleComponent'],
                ngImports: ['IgxStepperModule', 'IgxIconModule', 'IgxButtonModule']
            }),
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        return configs;
    }
}
