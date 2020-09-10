import { IgxAvatarModule, IgxChipsModule, IgxIconModule } from "igniteui-angular";
import { ChipAreaSampleComponent } from "../../src/app/data-display/chip/chip-area-sample/chip-area-sample.component";
import { ChipSimpleComponent } from "../../src/app/data-display/chip/chip-simple/chip-simple.component";
import { ChipStylingSampleComponent } from "../../src/app/data-display/chip/chip-styling/chip-styling.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ChipConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'ChipSimpleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxChipsModule', 'IgxIconModule', 'ChipSimpleComponent'],
                ngDeclarations: ['ChipSimpleComponent'],
                ngImports: ['IgxChipsModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: 'ChipAreaSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxChipsModule',
                    'IgxIconModule',
                    'IgxAvatarModule',
                    'ChipAreaSampleComponent'
                ],
                ngDeclarations: ['ChipAreaSampleComponent'],
                ngImports: ['IgxChipsModule', 'IgxIconModule', 'IgxAvatarModule']
            }),
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: 'ChipStylingSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxChipsModule', 'IgxIconModule', 'ChipStylingSampleComponent'],
                ngDeclarations: ['ChipStylingSampleComponent'],
                ngImports: ['IgxChipsModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: "/data-display/"
        }));

        return configs;
    }
}
