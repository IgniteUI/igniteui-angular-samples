import { IgxButtonGroupModule } from 'igniteui-angular/button-group';
import { IgxButtonModule, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxRadioModule } from 'igniteui-angular/radio';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class ButtonGroupConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // button group overview
        configs.push(new Config({
            component: 'ButtonGroupOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group layout
        configs.push(new Config({
            component: 'ButtonGroupLayoutComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group alignment
        configs.push(new Config({
            component: 'ButtonGroupAlignmentComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group custom toggle
        configs.push(new Config({
            component: 'ButtonGroupCustomToggleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group states
        configs.push(new Config({
            component: 'ButtonGroupStatesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group interaction states
        configs.push(new Config({
            component: 'ButtonGroupInteractionStatesComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group selection
        configs.push(new Config({
            component: 'ButtonGroupSelectionComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group size
        configs.push(new Config({
            component: 'ButtonGroupSizeComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group styling
        configs.push(new Config({
            component: 'ButtonGroupStylingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        // button group tailwind styling
        configs.push(new Config({
            component: 'ButtonGroupTailwindStylingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/buttonGroup/"
        }));

        return configs;
    }
}
