/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClientModule } from '@angular/common/http';
import {
    IgxButtonModule,
    IgxDropDownModule,
    IgxDividerModule,
    IgxForOfModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxNavbarModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxPrefixModule,
    IgxSuffixModule,
    IgxToastModule,
    IgxToggleModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';
export class DropDownConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        RemoteService: '../../src/app/services/remote.service'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'DropDownSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDropDownModule', 'DropDownSample1Component', 'IgxButtonModule', 'IgxToggleModule'],
                ngDeclarations: ['DropDownSample1Component'],
                ngImports: ['IgxDropDownModule', 'IgxButtonModule', 'IgxToggleModule']
            }),
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            component: 'DropDownSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDropDownModule', 'DropDownSample2Component', 'IgxButtonModule', 'IgxToggleModule'],
                ngDeclarations: ['DropDownSample2Component'],
                ngImports: ['IgxDropDownModule', 'IgxButtonModule', 'IgxToggleModule']
            }),
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            component: 'DropDownSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDropDownModule', 'DropDownSample3Component', 'IgxButtonModule', 'IgxToggleModule',
                    'IgxPrefixModule', 'IgxSuffixModule', 'IgxIconModule', 'IgxDividerModule'],
                ngDeclarations: ['DropDownSample3Component'],
                ngImports: ['IgxDropDownModule', 'IgxButtonModule', 'IgxToggleModule', 'IgxPrefixModule',
                    'IgxSuffixModule', 'IgxIconModule', 'IgxDividerModule']
            }),
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            component: 'DropDownSample5Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDropDownModule', 'DropDownSample5Component', 'IgxButtonModule', 'IgxSwitchModule',
                    'IgxToggleModule'],
                ngDeclarations: ['DropDownSample5Component'],
                ngImports: ['IgxDropDownModule', 'IgxButtonModule', 'IgxSwitchModule', 'IgxToggleModule']
            }),
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/data/heroData.ts'],
            component: 'DropDownStylingComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDropDownModule', 'DropDownStylingComponent', 'IgxButtonModule', 'IgxToggleModule'],
                ngDeclarations: ['DropDownStylingComponent'],
                ngImports: ['IgxDropDownModule', 'IgxButtonModule', 'IgxToggleModule']
            })
        }));

        configs.push(new Config({
            component: 'DropDownSample4Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDropDownModule', 'DropDownSample4Component', 'IgxInputGroupModule',
                    'IgxRippleModule', 'IgxIconModule', 'IgxToggleModule'],
                ngDeclarations: ['DropDownSample4Component'],
                ngImports: ['IgxDropDownModule', 'IgxInputGroupModule', 'IgxRippleModule', 'IgxIconModule', 'IgxToggleModule']
            }),
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            component: 'DropdownMenuComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDropDownModule', 'DropdownMenuComponent', 'IgxIconModule', 'IgxNavbarModule',
                    'IgxButtonModule', 'IgxToggleModule'],
                ngDeclarations: ['DropdownMenuComponent'],
                ngImports: ['IgxDropDownModule', 'IgxIconModule', 'IgxNavbarModule', 'IgxButtonModule', 'IgxToggleModule']
            }),
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            component: 'DropDownVirtualComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDropDownModule', 'DropDownVirtualComponent',
                    'IgxButtonModule', 'IgxToggleModule', 'IgxForOfModule'],
                ngDeclarations: ['DropDownVirtualComponent'],
                ngImports: ['IgxDropDownModule', 'IgxButtonModule', 'IgxToggleModule', 'IgxForOfModule']
            }),
            shortenComponentPathBy: '/data-entries/dropdown/'
        }));

        configs.push(new Config({
            component: 'DropDownRemoteComponent',
            additionalFiles: ['/src/app/services/remote.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDropDownModule', 'DropDownRemoteComponent',
                    'IgxButtonModule', 'IgxToggleModule', 'IgxForOfModule', 'IgxToastModule', 'HttpClientModule', 'RemoteService'],
                ngDeclarations: ['DropDownRemoteComponent'],
                ngImports: ['IgxDropDownModule', 'IgxButtonModule', 'IgxToastModule',
                    'IgxToggleModule', 'IgxForOfModule', 'HttpClientModule'],
                ngProviders: ['RemoteService']
            })
        }));

        return configs;
    }
}
