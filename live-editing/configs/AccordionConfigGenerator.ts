import {IgxAccordionModule,
    IgxButtonModule,
    IgxExpansionPanelModule,
    IgxIconModule,
    IgxRadioModule,
    IgxTimePickerModule,
    IgxSliderModule,
    IgxCheckboxModule,
    IgxToastModule} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';

export class AccordionConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'AccordionSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxExpansionPanelModule', 'AccordionSample1Component', 'IgxAccordionModule'],
                ngDeclarations: ['AccordionSample1Component'],
                ngImports: ['IgxExpansionPanelModule', 'IgxAccordionModule']
            }),
            shortenComponentPathBy: '/layouts/accordion/'
        }));

        configs.push(new Config({
            component: 'AccordionSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxExpansionPanelModule', 'AccordionSample2Component', 'IgxAccordionModule'],
                ngDeclarations: ['AccordionSample2Component'],
                ngImports: ['IgxExpansionPanelModule', 'IgxAccordionModule']
            }),
            shortenComponentPathBy: '/layouts/accordion/'
        }));

        configs.push(new Config({
            component: 'AccordionSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxExpansionPanelModule', 'IgxCheckboxModule', 'IgxSliderModule',
                    'IgxRadioModule', 'IgxIconModule', 'IgxTimePickerModule', 'AccordionSample3Component', 'IgxAccordionModule'],
                ngDeclarations: ['AccordionSample3Component'],
                ngImports: ['IgxExpansionPanelModule', 'IgxCheckboxModule', 'IgxSliderModule',
                    'IgxRadioModule', 'IgxIconModule', 'IgxTimePickerModule', 'IgxAccordionModule']
            }),
            shortenComponentPathBy: '/layouts/accordion/'
        }));

        return configs;
    }
}
