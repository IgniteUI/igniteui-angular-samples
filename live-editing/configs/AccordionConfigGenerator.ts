import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';

export class AccordionConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'AccordionSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxExpansionPanelModule', 'AccordionSample1Component'],
                ngDeclarations: ['AccordionSample1Component'],
                ngImports: ['IgxExpansionPanelModule']
            }),
            shortenComponentPathBy: '/layouts/accordion/'
        }));

        configs.push(new Config({
            component: 'AccordionSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxExpansionPanelModule', 'AccordionSample2Component'],
                ngDeclarations: ['AccordionSample2Component'],
                ngImports: ['IgxExpansionPanelModule']
            }),
            shortenComponentPathBy: '/layouts/accordion/'
        }));

        configs.push(new Config({
            component: 'AccordionSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxExpansionPanelModule', 'IgxCheckboxModule', 'IgxSliderModule',
                    'IgxRadioModule', 'IgxIconModule', 'IgxTimePickerModule', 'AccordionSample3Component'],
                ngDeclarations: ['AccordionSample3Component'],
                ngImports: ['IgxExpansionPanelModule', 'IgxCheckboxModule', 'IgxSliderModule',
                    'IgxRadioModule', 'IgxIconModule', 'IgxTimePickerModule']
            }),
            shortenComponentPathBy: '/layouts/accordion/'
        }));

        return configs;
    }
}
