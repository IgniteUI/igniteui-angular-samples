/* tslint:disable:object-literal-sort-keys */
import { IgxAvatarModule, IgxButtonModule, IgxCardModule, IgxIconModule, IgxSliderModule,
    IgxSwitchModule, IgxTooltipModule } from "igniteui-angular";
import { TooltipRichComponent } from "../../src/app/interactions/tooltip/tooltip-rich/tooltip-rich.component";
import { TooltipSimpleComponent } from "../../src/app/interactions/tooltip/tooltip-simple/tooltip-simple.component";
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
                ngImports: [IgxAvatarModule, IgxTooltipModule, IgxSwitchModule, IgxSliderModule]
            }),
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        // Rich Tooltip Sample
        configs.push(new Config({
            component: TooltipRichComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxTooltipModule, IgxCardModule, IgxIconModule,
                    IgxButtonModule, TooltipRichComponent],
                ngDeclarations: [TooltipRichComponent],
                ngImports: [IgxAvatarModule, IgxTooltipModule, IgxCardModule, IgxIconModule, IgxButtonModule]
            }),
            shortenComponentPathBy: "/interactions/tooltip/"
        }));

        return configs;
    }
}
