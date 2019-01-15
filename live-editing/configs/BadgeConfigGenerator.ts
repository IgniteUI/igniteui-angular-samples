/* tslint:disable:object-literal-sort-keys */
import { IgxAvatarModule, IgxBadgeModule, IgxListModule } from "igniteui-angular";
import { BadgeSample1Component } from "../../src/app/data-display/badge/badge-sample-1/badge-sample-1.component";
import { BadgeSample2Component } from "../../src/app/data-display/badge/badge-sample-2/badge-sample-2.component";
import { BadgeSample3Component } from "../../src/app/data-display/badge/badge-sample-3/badge-sample-3.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class BadgeConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // badge sample 1
        configs.push(new Config({
            component: BadgeSample1Component,
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBadgeModule, IgxListModule, BadgeSample1Component],
                ngDeclarations: [BadgeSample1Component],
                ngImports: [IgxBadgeModule, IgxListModule]
            }),
            shortenComponentPathBy: "/data-display/badge/"
        }));

        // badge sample 2
        configs.push(new Config({
            component: BadgeSample2Component,
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBadgeModule, IgxListModule, IgxAvatarModule, BadgeSample2Component],
                ngDeclarations: [BadgeSample2Component],
                ngImports: [IgxBadgeModule, IgxListModule, IgxAvatarModule]
            }),
            shortenComponentPathBy: "/data-display/badge/"
        }));

        // badge sample 3
        configs.push(new Config({
            component: BadgeSample3Component,
            additionalFiles: ["src/app/data-display/badge/model/member.model.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBadgeModule, IgxListModule, IgxAvatarModule, BadgeSample3Component],
                ngDeclarations: [BadgeSample3Component],
                ngImports: [IgxBadgeModule, IgxListModule, IgxAvatarModule]
            }),
            shortenComponentPathBy: "/data-display/badge/"
        }));

        return configs;
    }
}
