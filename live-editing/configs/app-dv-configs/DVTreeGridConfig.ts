/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import {HttpClientModule} from '@angular/common/http';
import {IgxButtonGroupModule,
IgxButtonModule,
IgxCsvExporterService,
IgxExcelExporterService,
IgxIconModule,
IgxRippleModule,
IgxSliderModule,
IgxSwitchModule,
IgxToggleModule,
IgxTreeGridModule} from 'igniteui-angular';
import {IgxSparklineCoreModule,
IgxSparklineModule} from 'igniteui-angular-charts';
import { Config, IConfigGenerator, AppModuleConfig } from 'igniteui-live-editing';

export class DVTreeGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        FinancialDataService: '../../../projects/app-lob/src/app/services/financial.service',
        IgxPreventDocumentScrollDirective: '../../../src/app/directives/prevent-scroll.directive',
        SignalRService : '../../../projects/app-lob/src/app/services/signal-r.service'
};

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

                // TreeGrid ChildDataKey Sample
        configs.push(new Config({
                    additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/projects/app-lob/src/app/tree-grid/tree-grid-childdatakey-sample/data.ts',
                        '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss'],
                    additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core'],
                    appModuleConfig: new AppModuleConfig({
                        imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridChilddatakeySampleComponent', 'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxSparklineCoreModule', 'IgxSparklineModule'],
                        ngDeclarations: ['TreeGridChilddatakeySampleComponent'],
                        ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxSparklineCoreModule', 'IgxSparklineModule'],
                        ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
                    }),
                    component: 'TreeGridChilddatakeySampleComponent',
                    shortenComponentPathBy: '/tree-grid/'
                }));

        // TreeGrid Primary/Foreign Key Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/projects/app-lob/src/app/tree-grid/tree-grid-primaryforeignkey-sample/data.ts',
                '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss'],
            additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridPrimaryforeignkeySampleComponent', 'IgxSparklineCoreModule', 'IgxSparklineModule'],
                ngDeclarations: ['TreeGridPrimaryforeignkeySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxSparklineCoreModule', 'IgxSparklineModule']
            }),
            component: 'TreeGridPrimaryforeignkeySampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalDependencies: ['@microsoft/signalr'],
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/projects/app-lob/src/app/services/financial.service.ts',
                '/projects/app-lob/src/app/data/financialData.ts', '/projects/app-lob/src/app/services/signal-r.service.ts',
                '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxSliderModule', 'IgxToggleModule',
                    'IgxButtonModule', 'IgxExcelExporterService', 'IgxSwitchModule', 'IgxRippleModule', 'TreeGridFinJSComponent',
                    'FinancialDataService', 'HttpClientModule', 'SignalRService'],
                ngDeclarations: ['TreeGridFinJSComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxSliderModule', 'IgxToggleModule',
                    'IgxButtonModule', 'IgxSwitchModule', 'IgxRippleModule', 'HttpClientModule'],
                ngProviders: ['FinancialDataService', 'IgxExcelExporterService', 'SignalRService']
            }),
            component: 'TreeGridFinJSComponent'
        }));

        return configs;
    }
}
