import {IgxAvatarModule,
IgxBadgeModule,
IgxListModule} from 'igniteui-angular';
import { Config, IConfigGenerator, AppModuleConfig } from 'igniteui-live-editing';
export class BadgeConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // badge icon sample
        configs.push(new Config({
            component: 'BadgeIconComponent',
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxBadgeModule', 'IgxAvatarModule', 'BadgeIconComponent'],
                ngDeclarations: ['BadgeIconComponent'],
                ngImports: ['IgxBadgeModule', 'IgxAvatarModule']
            }),
            shortenComponentPathBy: "/data-display/badge/"
        }));

        // badge sample 2
        configs.push(new Config({
            component: 'BadgeSample2Component',
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxBadgeModule', 'IgxAvatarModule', 'BadgeSample2Component'],
                ngDeclarations: ['BadgeSample2Component'],
                ngImports: ['IgxBadgeModule', 'IgxAvatarModule']
            }),
            shortenComponentPathBy: "/data-display/badge/"
        }));

        // badge sample 3
        configs.push(new Config({
            component: 'BadgeSample3Component',
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxBadgeModule', 'IgxListModule', 'IgxAvatarModule', 'BadgeSample3Component'],
                ngDeclarations: ['BadgeSample3Component'],
                ngImports: ['IgxBadgeModule', 'IgxListModule', 'IgxAvatarModule']
            }),
            shortenComponentPathBy: "/data-display/badge/"
        }));

        configs.push(new Config({
            component: 'BadgeStylingSampleComponent',
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts", "src/app/data-display/badge/badge-styling-sample/layout.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxBadgeModule', 'IgxListModule', 'IgxAvatarModule', 'BadgeStylingSampleComponent'],
                ngDeclarations: ['BadgeStylingSampleComponent'],
                ngImports: ['IgxBadgeModule', 'IgxListModule', 'IgxAvatarModule']
            }),
            shortenComponentPathBy: "/data-display/badge/"
        }));

        return configs;
    }
}
