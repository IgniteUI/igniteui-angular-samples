import {IgxAvatarModule,
IgxBadgeModule,
IgxListModule} from '@infragistics/igniteui-angular';
import { Config, IConfigGenerator, AppModuleConfig } from 'igniteui-live-editing';
export class BadgeConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

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
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts"],
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
