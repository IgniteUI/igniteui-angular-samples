import {
    IgxAccordionModule,
    IgxRadioModule,
    IgxTimePickerModule,
    IgxSliderModule,
    IgxCheckboxModule,
    IgxSwitchModule,
    IgxIconModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';

export class AccordionConfigGenerator implements IConfigGenerator {

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'AccordionSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/layouts/accordion/'
        }));

        configs.push(new Config({
            component: 'AccordionSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/layouts/accordion/'
        }));

        configs.push(new Config({
            component: 'AccordionSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/layouts/accordion/'
        }));

        return configs;
    }
}
