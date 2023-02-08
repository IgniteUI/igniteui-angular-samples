import {IgxAvatarModule,
IgxButtonModule,
IgxCardModule,
IgxExpansionPanelModule,
IgxGridModule,
IgxIconModule,
IgxInputGroupModule,
IgxRippleModule,
IgxToastModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class ExpansionPanelConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'ExpansionPanelSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxExpansionPanelModule', 'ExpansionPanelSample1Component'],
                ngDeclarations: ['ExpansionPanelSample1Component'],
                ngImports: ['IgxIconModule', 'IgxExpansionPanelModule']
            }),
            shortenComponentPathBy: "/layouts/expansion-panel/"
        }));

        configs.push(new Config({
            component: 'ExpansionPanelSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxExpansionPanelModule', 'IgxToastModule', 'ExpansionPanelSample2Component'],
                ngDeclarations: ['ExpansionPanelSample2Component'],
                ngImports: ['IgxIconModule', 'IgxExpansionPanelModule', 'IgxToastModule']
            }),
            shortenComponentPathBy: "/layouts/expansion-panel/"
        }));

        configs.push(new Config({
            component: 'ExpansionPanelSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxAvatarModule', 'IgxToastModule',
                    'IgxExpansionPanelModule', 'ExpansionPanelSample3Component'],
                ngDeclarations: ['ExpansionPanelSample3Component'],
                ngImports: ['IgxIconModule', 'IgxAvatarModule', 'IgxToastModule', 'IgxExpansionPanelModule']
            }),
            shortenComponentPathBy: "/layouts/expansion-panel/"
        }));

        configs.push(new Config({
            component: 'ExpansionPanelSample4Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxExpansionPanelModule', 'IgxInputGroupModule',
                    'ExpansionPanelSample4Component'],
                ngDeclarations: ['ExpansionPanelSample4Component'],
                ngImports: ['IgxIconModule', 'IgxExpansionPanelModule', 'IgxInputGroupModule']
            }),
            shortenComponentPathBy: "/layouts/expansion-panel/"
        }));

        configs.push(new Config({
            component: 'ExpansionPanelSample5Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxExpansionPanelModule', 'IgxInputGroupModule',
                    'ExpansionPanelSample5Component'],
                ngDeclarations: ['ExpansionPanelSample5Component'],
                ngImports: ['IgxIconModule', 'IgxExpansionPanelModule', 'IgxInputGroupModule']
            }),
            shortenComponentPathBy: "/layouts/expansion-panel/"
        }));

        configs.push(new Config({
            component: 'ExpansionPanelStylingComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxButtonModule', 'IgxExpansionPanelModule', 'IgxInputGroupModule',
                    'ExpansionPanelStylingComponent'],
                ngDeclarations: ['ExpansionPanelStylingComponent'],
                ngImports: ['IgxIconModule', 'IgxButtonModule', 'IgxExpansionPanelModule', 'IgxInputGroupModule']
            }),
            shortenComponentPathBy: "/layouts/expansion-panel/"
        }));

        return configs;
    }
}
