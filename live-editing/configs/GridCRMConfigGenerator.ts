/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Config, IConfigGenerator, AppModuleConfig } from 'igniteui-live-editing';

export class GridCRMConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'GridCRMComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/projects/app-crm/src/_app-layout.scss',
                '/projects/app-crm/src/_variables.scss',
                '/projects/app-crm/src/app/grid-crm/data.ts'
            ],
            additionalDependencies: [],
            appConfig: {
                modules: [
                    { 'module': 'BrowserModule', 'import': '@angular/platform-browser' },
                    { 'module': 'FormsModule', 'import': '@angular/forms' },
                    { 'module': 'HammerModule', 'import': '@angular/platform-browser' }
                ],
                providers: [
                    { 'provider': 'provideAnimations()', 'import': '@angular/platform-browser/animations' }
                ],
                router: 'GridCRMRoutes'
            }
            /*appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxRippleModule',
                    'IgxGridModule', 'IgxIconModule', 'IgxLayoutModule',
                    'IgxAvatarModule', 'IgxInputGroupModule', 'IgxButtonModule',
                    'IgxPreventDocumentScrollDirective', 'GridCRMComponent', 'RouterTestingModule'
                ],
                ngDeclarations: ['GridCRMComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxRippleModule',
                'IgxGridModule', 'IgxIconModule', 'IgxLayoutModule',
                'IgxAvatarModule', 'IgxInputGroupModule', 'IgxButtonModule', 'RouterTestingModule']
            })*/

        }));

        return configs;
    }
}
