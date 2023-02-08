import {IgxIconModule,
IgxNavbarModule,
IgxButtonModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class NavbarConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'NavbarComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxNavbarModule', 'NavbarComponent'],
                ngDeclarations: ['NavbarComponent'],
                ngImports: ['IgxIconModule', 'IgxNavbarModule']
            }),
            shortenComponentPathBy: "/menus/"
        }));

        configs.push(new Config({
            component: 'NavbarSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxNavbarModule', 'IgxButtonModule', 'NavbarSample1Component'],
                ngDeclarations: ['NavbarSample1Component'],
                ngImports: ['IgxIconModule', 'IgxNavbarModule', 'IgxButtonModule']
            }),
            shortenComponentPathBy: "/menus/navbar/"
        }));

        configs.push(new Config({
            component: 'NavbarSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxNavbarModule', 'IgxButtonModule', 'NavbarSample2Component'],
                ngDeclarations: ['NavbarSample2Component', 'IgxButtonModule' ],
                ngImports: ['IgxIconModule', 'IgxNavbarModule']
            }),
            shortenComponentPathBy: "/menus/navbar/"
        }));

        configs.push(new Config({
            component: 'NavbarSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxNavbarModule', 'NavbarSample3Component'],
                ngDeclarations: ['NavbarSample3Component'],
                ngImports: ['IgxIconModule', 'IgxNavbarModule']
            }),
            shortenComponentPathBy: "/menus/navbar/"
        }));

        configs.push(new Config({
            component: 'NavbarStyleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxNavbarModule', 'IgxButtonModule', 'NavbarStyleComponent'],
                ngDeclarations: ['NavbarStyleComponent'],
                ngImports: ['IgxIconModule', 'IgxNavbarModule', 'IgxButtonModule']
            }),
            shortenComponentPathBy: "/menus/navbar/"
        }));

        configs.push(new Config({
            component: 'NavbarCustomTitleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxNavbarModule', 'IgxButtonModule', 'NavbarCustomTitleComponent'],
                ngDeclarations: ['NavbarCustomTitleComponent'],
                ngImports: ['IgxIconModule', 'IgxNavbarModule', 'IgxButtonModule']
            }),
            shortenComponentPathBy: "/menus/navbar/"
        }));

        return configs;
    }
}
