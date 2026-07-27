import { IgxButtonGroupModule } from 'igniteui-angular/button-group';
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxRadioModule } from 'igniteui-angular/radio';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class ButtonGroupConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // button group layout
        configs.push(new Config({
            component: 'ButtonGroupLayoutSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group alignment
        configs.push(new Config({
            component: 'ButtonGroupAlignmentSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group toggle
        configs.push(new Config({
            component: 'ButtonGroupToggleSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group selection
        configs.push(new Config({
            component: 'ButtonGroupSelectionSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group size
        configs.push(new Config({
            component: 'ButtonGroupSizeSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group style
        configs.push(new Config({
            component: 'ButtonGroupStyleSampleComponent',
            additionalFiles: ["/src/app/data-entries/buttonGroup/button-group-style-sample/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        return configs;
    }
}
