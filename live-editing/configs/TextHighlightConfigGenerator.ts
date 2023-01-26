import {IgxButtonModule,
IgxIconModule,
IgxInputGroupModule,
IgxRippleModule,
IgxTextHighlightModule} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class TextHighlightConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'TextHighlightSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxInputGroupModule',
                    'IgxIconModule', 'IgxRippleModule', 'IgxTextHighlightModule', 'TextHighlightSample1Component'],
                ngDeclarations: ['TextHighlightSample1Component'],
                ngImports: ['IgxButtonModule', 'IgxIconModule',
                    'IgxInputGroupModule', 'IgxRippleModule', 'IgxTextHighlightModule']
            }),
            shortenComponentPathBy: "/data-display/text-highlight/"
        }));

        configs.push(new Config({
            component: 'TextHighlightSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxInputGroupModule',
                    'IgxIconModule', 'IgxRippleModule', 'IgxTextHighlightModule', 'TextHighlightSample2Component'],
                ngDeclarations: ['TextHighlightSample2Component'],
                ngImports: ['IgxButtonModule', 'IgxIconModule',
                    'IgxInputGroupModule', 'IgxRippleModule', 'IgxTextHighlightModule']
            }),
            shortenComponentPathBy: "/data-display/text-highlight/"
        }));

        configs.push(new Config({
            component: 'TextHighlightStyleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxInputGroupModule',
                    'IgxIconModule', 'IgxRippleModule', 'IgxTextHighlightModule', 'TextHighlightStyleComponent'],
                ngDeclarations: ['TextHighlightStyleComponent'],
                ngImports: ['IgxButtonModule', 'IgxIconModule',
                    'IgxInputGroupModule', 'IgxRippleModule', 'IgxTextHighlightModule']
            }),
            shortenComponentPathBy: "/data-display/text-highlight/"
        }));

        return configs;
    }
}
