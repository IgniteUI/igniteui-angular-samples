import {HttpClientModule} from '@angular/common/http';
import {IgxAvatarModule,
IgxBadgeModule,
IgxButtonGroupModule,
IgxButtonModule,
IgxCheckboxModule,
IgxCsvExporterService,
IgxDialogModule,
IgxDividerModule,
IgxExcelExporterService,
IgxGridModule,
IgxIconModule,
IgxInputGroupModule,
IgxProgressBarModule,
IgxRippleModule,
IgxSliderModule,
IgxSwitchModule,
IgxTabsModule,
IgxToggleModule} from 'igniteui-angular';
import {IgxCategoryChartModule,
IgxLegendModule,
IgxPieChartModule,
IgxSparklineCoreModule,
IgxSparklineModule} from 'igniteui-angular-charts';
import { Config, IConfigGenerator, AppModuleConfig, DependenciesType } from 'igniteui-live-editing';
export class DVGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        'FinancialDataService': '../../../projects/app-lob/src/app/services/financial.service',
        'IgxPreventDocumentScrollModule': '../../../src/app/directives/prevent-scroll.directive'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'GridComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/data/athletesData.ts"],
            additionalDependencies: ["igniteui-angular-charts", "igniteui-angular-core"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'HttpClientModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule',
                    'IgxGridModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'GridComponent',
                    'IgxSparklineCoreModule', 'IgxSparklineModule'],
                ngDeclarations: ['GridComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule', 'IgxRippleModule',
                    'IgxSwitchModule', 'HttpClientModule', 'IgxSparklineCoreModule', 'IgxSparklineModule']
            })
        }));

        // master-detail sample
        configs.push(new Config({
            component: 'GridMasterDetailSampleComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/projects/app-lob/src/app/data/athletesData.ts"],
            additionalDependencies: ["igniteui-angular-charts", "igniteui-angular-core"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'GridMasterDetailSampleComponent', 'IgxGridModule', 'IgxCategoryChartModule',
                    'IgxAvatarModule', 'IgxTabsModule', 'IgxIconModule', 'IgxPieChartModule', 'IgxLegendModule',
                    'IgxDividerModule'],
                ngDeclarations: ['GridMasterDetailSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxCategoryChartModule', 'IgxPieChartModule', 'IgxLegendModule',
                    'IgxAvatarModule', 'IgxTabsModule', 'IgxIconModule', 'IgxDividerModule'],
                ngProviders: []
            })
        }));

        // configs.push(new Config({
        //     component: 'GridCRMComponent',
        //     additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/projects/app-lob/src/app/services/athletesData.ts"],
        //     additionalDependencies: ["igniteui-angular-charts", "igniteui-angular-core"],
        //     appModuleConfig: new AppModuleConfig({
        //         imports: ['IgxPreventDocumentScrollModule', 'HttpClientModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule',
        //             'IgxGridModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
        //             'IgxRippleModule', 'IgxSwitchModule', 'IgxToggleModule', 'IgxCheckboxModule',
        //             'IgxExcelExporterService', 'GridCRMComponent', 'IgxSparklineCoreModule', 'IgxSparklineModule'],
        //         ngDeclarations: ['GridCRMComponent'],
        //         ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxGridModule',
        //             'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
        //             'IgxRippleModule', 'IgxSwitchModule', 'IgxToggleModule', 'IgxCheckboxModule',
        //             'HttpClientModule', 'IgxSparklineCoreModule', 'IgxSparklineModule'],
        //         ngProviders: ['IgxExcelExporterService']
        //     }),
        //     shortenComponentPathBy: "/grid-crm/"
        // }));

        configs.push(new Config({
            component: 'FinJSDemoComponent',
            dependenciesType: DependenciesType.Charts,
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/projects/app-lob/src/app/services/financial.service.ts",
                "/projects/app-lob/src/app/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxCategoryChartModule',
                    'IgxGridModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxSliderModule', 'IgxToggleModule',
                    'IgxButtonModule', 'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxSwitchModule',
                    'IgxRippleModule', 'FinJSDemoComponent', 'IgxDialogModule', 'FinancialDataService'],
                ngDeclarations: ['FinJSDemoComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxSliderModule', 'IgxToggleModule',
                    'IgxButtonModule', 'IgxSwitchModule', 'IgxRippleModule', 'IgxCategoryChartModule', 'IgxDialogModule'],
                ngProviders: ['FinancialDataService', 'IgxExcelExporterService', 'IgxCsvExporterService']
            })
        }));

        return configs;
    }
}
