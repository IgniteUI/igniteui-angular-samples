import {IgxButtonModule,
IgxDialogModule,
IgxIconModule,
IgxInputGroupModule,
IgxRippleModule,
IgxToggleModule} from 'igniteui-angular';
import {AppModuleConfig} from './core/AppModuleConfig';
import {Config} from './core/Config';
import {IConfigGenerator} from './core/IConfigGenerator';
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
            component: 'DialogStylingSample',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxDialogModule', 'IgxRippleModule',
                    'DialogStylingSample', 'IgxIconModule', 'IgxToggleModule'],
                ngDeclarations: ['DialogStylingSample'],
                ngImports: ['IgxButtonModule', 'IgxDialogModule', 'IgxRippleModule', 'IgxIconModule', 'IgxToggleModule']
            }),
            shortenComponentPathBy: "/interactions/"
        }));

        return configs;
    }
}
