import { IgxButtonGroupModule } from 'igniteui-angular/button-group';
import { IgxButtonModule, IgxIconButtonDirective, IgxRippleModule } from 'igniteui-angular/directives';
import { IgxIconModule } from 'igniteui-angular/icon';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class IconButtonConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // icon button overview
        configs.push(new Config({
            component: 'IconButtonOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        // flat icon button
        configs.push(new Config({
            component: 'FlatIconButtonComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        // contained icon button
        configs.push(new Config({
            component: 'ContainedIconButtonComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        // outlined icon button
        configs.push(new Config({
            component: 'OutlinedIconButtonComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        // disabled icon button
        configs.push(new Config({
            component: 'DisabledIconButtonComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        // SVG icon button
        configs.push(new Config({
            component: 'SVGIconButtonComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        // icon button styling
        configs.push(new Config({
            component: 'IconButtonStylingComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        // icon button size
        configs.push(new Config({
            component: 'IconButtonSizeComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/icon-button/"
        }));

        return configs;
    }
}
