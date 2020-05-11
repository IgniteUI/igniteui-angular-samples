/* tslint:disable:object-literal-sort-keys */
import { IgxActionStripModule, IgxRippleModule, IgxButtonModule, IgxIconModule, IgxButtonGroupModule } from "igniteui-angular";
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
                imports: [IgxActionStripModule, ActionStripParagraphComponent, IgxRippleModule, IgxButtonGroupModule, IgxButtonModule, IgxIconModule],
                ngDeclarations: [ActionStripParagraphComponent],
                ngImports: [IgxActionStripModule, IgxRippleModule, IgxButtonGroupModule, IgxButtonModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/menus/action-strip/"
        }));

        configs.push(new Config({
            component: ActionStripParagraphMenuComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxActionStripModule, ActionStripParagraphMenuComponent, IgxRippleModule, IgxButtonModule, IgxIconModule],
                ngDeclarations: [ActionStripParagraphMenuComponent],
                ngImports: [IgxActionStripModule, IgxRippleModule, IgxButtonModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/menus/action-strip/"
        }));

        configs.push(new Config({
            component: ActionStripStylingComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxActionStripModule, ActionStripStylingComponent, IgxRippleModule, IgxButtonModule, IgxIconModule],
                ngDeclarations: [ActionStripStylingComponent],
                ngImports: [IgxActionStripModule, IgxRippleModule, IgxButtonModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/menus/action-strip/"
        }));

        return configs;
    }
}
