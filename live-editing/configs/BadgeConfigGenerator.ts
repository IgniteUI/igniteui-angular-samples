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

        // badge sample 2
        configs.push(new Config({
            component: 'BadgeSample2Component',
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/badge/"
        }));

        // badge sample 3
        configs.push(new Config({
            component: 'BadgeSample3Component',
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/badge/"
        }));

        configs.push(new Config({
            component: 'BadgeStylingSampleComponent',
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts", "src/app/data-display/badge/badge-styling-sample/layout.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/badge/"
        }));

        configs.push(new Config({
            component: 'BadgeDotSampleComponent',
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts", "src/app/data-display/badge/badge-dot-sample/badge-dot-sample.component.scss"],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-display/badge/"
        }));

        return configs;
    }
}
