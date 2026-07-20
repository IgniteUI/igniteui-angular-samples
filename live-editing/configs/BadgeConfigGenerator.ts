import { IgxAvatarModule } from 'igniteui-angular/avatar';
import { IgxBadgeModule } from 'igniteui-angular/badge';
import { IgxListModule } from 'igniteui-angular/list';
import { Config, IConfigGenerator, AppModuleConfig } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class BadgeConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // badge icon sample
        configs.push(new Config({
            component: 'BadgeIconComponent',
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/badge/"
        }));

        // badge overview
        configs.push(new Config({
            component: 'BadgeOverviewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/badge/"
        }));

        // badge shape
        configs.push(new Config({
            component: 'BadgeShapeComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/badge/"
        }));

        // badge overview
        configs.push(new Config({
            component: 'BadgeVariantsComponent',
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/badge/"
        }));

        // badge list
        configs.push(new Config({
            component: 'BadgeListComponent',
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/badge/"
        }));

        // badge styling
        configs.push(new Config({
            component: 'BadgeStylingComponent',
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts", "src/app/data-display/badge/badge-styling/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/badge/"
        }));

        // badge dot
        configs.push(new Config({
            component: 'BadgeDotComponent',
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts", "src/app/data-display/badge/badge-dot/badge-dot.component.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/badge/"
        }));

        // badge outlined
        configs.push(new Config({
            component: 'BadgeOutlinedComponent',
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/badge/"
        }));

        return configs;
    }
}
