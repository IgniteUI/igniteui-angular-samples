import {IgxAvatarModule,
IgxButtonModule,
IgxIconModule,
IgxListModule,
IgxRippleModule,
IgxSnackbarModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class SnackbarConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'SnackbarSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxRippleModule',
                    'IgxSnackbarModule', 'SnackbarSample1Component'],
                ngDeclarations: ['SnackbarSample1Component'],
                ngImports: ['IgxButtonModule', 'IgxRippleModule', 'IgxSnackbarModule']
            }),
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        configs.push(new Config({
            component: 'SnackbarSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxRippleModule', 'IgxIconModule',
                'IgxSnackbarModule', 'SnackbarSample2Component'],
                ngDeclarations: ['SnackbarSample2Component'],
                ngImports: ['IgxButtonModule', 'IgxRippleModule', 'IgxSnackbarModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        configs.push(new Config({
            component: 'SnackbarSample4Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxAvatarModule', 'IgxButtonModule', 'IgxIconModule', 'IgxListModule',
                    'IgxRippleModule', 'IgxSnackbarModule', 'SnackbarSample4Component'],
                ngDeclarations: ['SnackbarSample4Component'],
                ngImports: ['IgxAvatarModule', 'IgxButtonModule', 'IgxIconModule', 'IgxListModule',
                    'IgxRippleModule', 'IgxSnackbarModule']
            }),
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        configs.push(new Config({
            component: 'SnackbarSample5Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxSnackbarModule', 'SnackbarSample5Component'],
                ngDeclarations: ['SnackbarSample5Component'],
                ngImports: ['IgxButtonModule', 'IgxSnackbarModule']
            }),
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        configs.push(new Config({
            component: 'SnackbarStyleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxSnackbarModule', 'SnackbarStyleComponent'],
                ngDeclarations: ['SnackbarStyleComponent'],
                ngImports: ['IgxButtonModule', 'IgxSnackbarModule']
            }),
            shortenComponentPathBy: "/notifications/snackbar/"
        }));

        return configs;
    }
}
