/* tslint:disable:object-literal-sort-keys */
import {
    IgxButtonModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxRippleModule,
    IgxTextHighlightModule
} from "igniteui-angular";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

import {
    TextHighlightSample2Component
} from "../../src/app/text-highlight/text-highlight-sample-2/text-highlight-sample-2.component";

import {
    TextHighlightSample1Component
} from "../../src/app/text-highlight/text-highlight-sample-1/text-highlight-sample-1.component";

export class TextHighlightConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: TextHighlightSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxInputGroupModule,
                    IgxIconModule, IgxRippleModule, IgxTextHighlightModule, TextHighlightSample1Component],
                ngDeclarations: [TextHighlightSample1Component],
                ngImports: [IgxButtonModule, IgxIconModule,
                    IgxInputGroupModule, IgxRippleModule, IgxTextHighlightModule]
            }),
            shortenComponentPathBy: "/text-highlight/"
        }));

        configs.push(new Config({
            component: TextHighlightSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxInputGroupModule,
                    IgxIconModule, IgxRippleModule, IgxTextHighlightModule, TextHighlightSample2Component],
                ngDeclarations: [TextHighlightSample2Component],
                ngImports: [IgxButtonModule, IgxIconModule,
                    IgxInputGroupModule, IgxRippleModule, IgxTextHighlightModule]
            }),
            shortenComponentPathBy: "/text-highlight/"
        }));

        return configs;
    }
}
