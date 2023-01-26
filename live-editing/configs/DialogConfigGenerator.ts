import {IgxButtonModule,
IgxDialogModule,
IgxIconModule,
IgxInputGroupModule,
IgxRippleModule,
IgxToggleModule} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class DialogConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // dialog sample 1
        configs.push(new Config({
            component: 'DialogSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxDialogModule', 'IgxRippleModule',
                    'DialogSample1Component'],
                ngDeclarations: ['DialogSample1Component'],
                ngImports: ['IgxButtonModule', 'IgxDialogModule', 'IgxRippleModule']
            }),
            shortenComponentPathBy: "/interactions/dialog/"
        }));

        // dialog sample 2
        configs.push(new Config({
            component: 'DialogSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxDialogModule', 'IgxRippleModule',
                    'DialogSample2Component'],
                ngDeclarations: ['DialogSample2Component'],
                ngImports: ['IgxButtonModule', 'IgxDialogModule', 'IgxRippleModule']
            }),
            shortenComponentPathBy: "/interactions/dialog/"
        }));

        // dialog sample 3
        configs.push(new Config({
            component: 'DialogSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxDialogModule', 'IgxInputGroupModule', 'IgxRippleModule',
                    'DialogSample3Component', 'IgxIconModule'],
                ngDeclarations: ['DialogSample3Component'],
                ngImports: ['IgxButtonModule', 'IgxDialogModule', 'IgxInputGroupModule', 'IgxRippleModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: "/interactions/dialog/"
        }));

        configs.push(new Config({
            component: 'DialogStylingSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxDialogModule', 'IgxRippleModule',
                    'DialogStylingSampleComponent', 'IgxIconModule', 'IgxToggleModule'],
                ngDeclarations: ['DialogStylingSampleComponent'],
                ngImports: ['IgxButtonModule', 'IgxDialogModule', 'IgxRippleModule', 'IgxIconModule', 'IgxToggleModule']
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        return configs;
    }
}
