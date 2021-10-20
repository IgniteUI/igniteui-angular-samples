import {
    IgxStepperModule,
    IgxInputGroupModule,
    IgxMaskModule,
    IgxRadioModule,
    IgxCardModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxSelectModule,
    IgxIconModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';

export class StepperConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'StepperOverviewSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['StepperOverviewSampleComponent', 'IgxStepperModule', 'IgxMaskModule', 'IgxInputGroupModule', 'IgxButtonModule',
                    'IgxRadioModule', 'IgxCardModule', 'IgxCheckboxModule', 'IgxSelectModule', 'IgxIconModule'],
                ngDeclarations: ['StepperOverviewSampleComponent'],
                ngImports: ['IgxStepperModule', 'IgxMaskModule', 'IgxInputGroupModule', 'IgxButtonModule',
                    'IgxRadioModule', 'IgxCardModule', 'IgxCheckboxModule', 'IgxSelectModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        configs.push(new Config({
            component: 'StepperLabelPositionAndOrientationSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['StepperLabelPositionAndOrientationSampleComponent', 'IgxStepperModule', 'IgxButtonModule'],
                ngDeclarations: ['StepperLabelPositionAndOrientationSampleComponent'],
                ngImports: ['IgxStepperModule', 'IgxButtonModule']
            }),
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        configs.push(new Config({
            component: 'StepperLinearSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['StepperLinearSampleComponent', 'IgxStepperModule', 'IgxIconModule', 'IgxButtonModule',
                    'IgxInputGroupModule', 'IgxRadioModule'],
                ngDeclarations: ['StepperLinearSampleComponent'],
                ngImports: ['IgxStepperModule', 'IgxIconModule', 'IgxButtonModule', 'IgxInputGroupModule', 'IgxRadioModule']
            }),
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        configs.push(new Config({
            component: 'StepperStepTypeSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['StepperStepTypeSampleComponent', 'IgxStepperModule', 'IgxButtonModule'],
                ngDeclarations: ['StepperStepTypeSampleComponent'],
                ngImports: ['IgxStepperModule', 'IgxButtonModule']
            }),
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        configs.push(new Config({
            component: 'StepperStylingSampleComponent',
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
