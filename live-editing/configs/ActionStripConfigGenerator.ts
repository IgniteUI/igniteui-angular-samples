/* tslint:disable:object-literal-sort-keys */
import { IgxActionStripModule } from "igniteui-angular";
import {
    ActionStripParagraphMenuComponent
} from "../../src/app/menus/action-strip/action-strip-paragraph-menu/action-strip-paragraph-menu.component";
import {
    ActionStripStylingComponent
} from "../../src/app/menus/action-strip/action-strip-paragraph-styling/action-strip-paragraph-styling.component";
import {
    ActionStripParagraphComponent
} from "../../src/app/menus/action-strip/action-strip-paragraph/action-strip-paragraph.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ActionStripConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: ActionStripParagraphComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxActionStripModule, ActionStripParagraphComponent],
                ngDeclarations: [ActionStripParagraphComponent],
                ngImports: [IgxActionStripModule]
            }),
            shortenComponentPathBy: "/menus/action-strip/"
        }));

        configs.push(new Config({
            component: ActionStripParagraphMenuComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxActionStripModule, ActionStripParagraphMenuComponent],
                ngDeclarations: [ActionStripParagraphMenuComponent],
                ngImports: [IgxActionStripModule]
            }),
            shortenComponentPathBy: "/menus/action-strip/"
        }));

        configs.push(new Config({
            component: ActionStripStylingComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxActionStripModule, ActionStripStylingComponent],
                ngDeclarations: [ActionStripStylingComponent],
                ngImports: [IgxActionStripModule]
            }),
            shortenComponentPathBy: "/menus/action-strip/"
        }));

        return configs;
    }
}
