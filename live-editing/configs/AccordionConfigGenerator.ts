import { IgxAccordionModule } from 'igniteui-angular/accordion';
import { IgxRadioModule } from 'igniteui-angular/radio';
import { IgxTimePickerModule } from 'igniteui-angular/time-picker';
import { IgxSliderModule } from 'igniteui-angular/slider';
import { IgxCheckboxModule } from 'igniteui-angular/checkbox';
import { IgxSwitchModule } from 'igniteui-angular/switch';
import { IgxIconModule } from 'igniteui-angular/icon';
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

        configs.push(new Config({
            component: 'AccordionStyleComponent',
            additionalFiles: ["/src/app/layouts/accordion/accordion-style/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/layouts/accordion/'
        }));

        return configs;
    }
}
