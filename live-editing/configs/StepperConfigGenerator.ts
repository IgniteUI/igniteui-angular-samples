import {
    IgxRadioModule,
    IgxTimePickerModule,
    IgxSliderModule,
    IgxStepperModule,
    IgxCheckboxModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';

export class StepperConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'StepperSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['StepperSample1Component', 'IgxStepperModule'],
                ngDeclarations: ['StepperSample1Component'],
                ngImports: ['IgxStepperModule']
            }),
            shortenComponentPathBy: '/layouts/stepper/'
        }));

        // configs.push(new Config({
        //     component: 'AccordionSample2Component',
        //     appModuleConfig: new AppModuleConfig({
        //         imports: ['AccordionSample2Component', 'IgxAccordionModule'],
        //         ngDeclarations: ['AccordionSample2Component'],
        //         ngImports: ['IgxAccordionModule']
        //     }),
        //     shortenComponentPathBy: '/layouts/accordion/'
        // }));

        // configs.push(new Config({
        //     component: 'AccordionSample3Component',
        //     appModuleConfig: new AppModuleConfig({
        //         imports: ['IgxCheckboxModule', 'IgxSliderModule',
        //             'IgxRadioModule', 'IgxTimePickerModule', 'AccordionSample3Component', 'IgxAccordionModule'],
        //         ngDeclarations: ['AccordionSample3Component'],
        //         ngImports: ['IgxCheckboxModule', 'IgxSliderModule',
        //             'IgxRadioModule', 'IgxTimePickerModule', 'IgxAccordionModule']
        //     }),
        //     shortenComponentPathBy: '/layouts/accordion/'
        // }));

        return configs;
    }
}
