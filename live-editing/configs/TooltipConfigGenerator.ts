import {IgxAvatarModule,
IgxIconModule,
IgxToggleModule,
IgxTooltipModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class TooltipConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // Simple Tooltip Sample
        configs.push(new Config({
            component: 'TooltipSimpleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        // Rich Tooltip Sample
        configs.push(new Config({
            component: 'TooltipRichComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        // Placement Tooltip Sample
        configs.push(new Config({
            component: 'TooltipPlacementComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        // Advanced Tooltip Sample
        configs.push(new Config({
            component: 'TooltipAdvancedComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        // Style Tooltip Sample
        configs.push(new Config({
            component: 'TooltipStyleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        return configs;
    }
}
