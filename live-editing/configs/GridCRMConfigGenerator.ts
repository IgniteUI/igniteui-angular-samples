/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import {HttpClientModule} from '@angular/common/http';
import {
    IgxAutocompleteModule,
    IgxRippleModule,
    IgxGridModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxAvatarModule,
    IgxInputGroupModule,
    IgxButtonModule } from 'igniteui-angular';
import { Config, IConfigGenerator, AppModuleConfig } from 'igniteui-live-editing';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

export class GridCRMConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'GridCRMComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/projects/app-crm/src/_app-layout.scss', '/projects/app-crm/src/_variables.scss'],
            additionalDependencies: [],
            appModuleConfig: new AppModuleConfig({
                imports: ['BrowserModule', 'RouterModule', 'BrowserAnimationsModule', 'FormsModule', 'HammerModule'],
                ngDeclarations: ['GridCRMComponent'],
                ngImports: ['IgxAutocompleteModule', 'IgxRippleModule', 'IgxGridModule', 'IgxIconModule', 'IgxLayoutModule',
            'IgxAvatarModule', 'IgxInputGroupModule', 'IgxButtonModule', 'IgxPreventDocumentScrollModule']
            })
        }));

        return configs;
    }
}
