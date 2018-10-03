/* tslint:disable:object-literal-sort-keys */
import { IgxAvatarModule, IgxTooltipModule, IgxSwitchModule, IgxSliderModule, IgxIconModule, IgxCardModule, IgxButtonModule } from "igniteui-angular";
import { TooltipSimpleComponent } from "../../src/app/tooltip/tooltip-simple/tooltip-simple.component";
import { TooltipRichComponent } from "../../src/app/tooltip/tooltip-rich/tooltip-rich.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class TooltipConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // Simple Tooltip Sample
        configs.push(new Config({
            component: TooltipSimpleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxTooltipModule, IgxSwitchModule, IgxSliderModule, TooltipSimpleComponent],
                ngDeclarations: [TooltipSimpleComponent],
                ngImports: [IgxAvatarModule, IgxTooltipModule, IgxSwitchModule, IgxSliderModule,]
            }),
            shortenComponentPathBy: "/tooltip/"
        }));

        // Rich Tooltip Sample
        configs.push(new Config({
            component: TooltipRichComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxTooltipModule, IgxCardModule, IgxIconModule, IgxButtonModule, TooltipRichComponent],
                ngDeclarations: [TooltipRichComponent],
                ngImports: [IgxAvatarModule, IgxTooltipModule, IgxCardModule, IgxIconModule, IgxButtonModule,]
            }),
            shortenComponentPathBy: "/tooltip/"
        }));

        return configs;
    }
}
