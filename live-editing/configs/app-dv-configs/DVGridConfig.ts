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
        'LocalDataService': '../../../projects/app-lob/src/app/grid-finjs/localData.service',
        'IgxPreventDocumentScrollModule': '../../../src/app/directives/prevent-scroll.directive',
        'ControllerComponent' : '../../../projects/app-lob/src/app/grid-finjs/controllers.component',
        'GridFinJSComponent' : '../../../projects/app-lob/src/app/grid-finjs/grid-finjs.component'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'GridComponent',
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/data.ts"],
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
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/projects/app-lob/src/app/services/athletesData.ts"],
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
            additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/projects/app-lob/src/app/grid-finjs/localData.service.ts",
                "/projects/app-lob/src/app/services/financialData.ts","/projects/app-lob/src/app/grid-finjs/controllers.component.ts",
                "/projects/app-lob/src/app/grid-finjs/grid-finjs.component.ts",
                "/projects/app-lob/src/app/grid-finjs/controllers.component.html",
                "/projects/app-lob/src/app/grid-finjs/grid-finjs.component.html",
                "/projects/app-lob/src/app/grid-finjs/controllers.component.scss",
                "/projects/app-lob/src/app/grid-finjs/grid-finjs.component.scss"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxCategoryChartModule',
                    'IgxGridModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxSliderModule', 'IgxToggleModule',
                    'IgxButtonModule', 'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxSwitchModule',
                    'IgxRippleModule', 'FinJSDemoComponent', 'IgxDialogModule', 'LocalDataService','ControllerComponent', 'GridFinJSComponent'],
                ngDeclarations: ['FinJSDemoComponent','ControllerComponent', 'GridFinJSComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxSliderModule', 'IgxToggleModule',
                    'IgxButtonModule', 'IgxSwitchModule', 'IgxRippleModule', 'IgxCategoryChartModule', 'IgxDialogModule'],
                ngProviders: ['LocalDataService', 'IgxExcelExporterService', 'IgxCsvExporterService']
            })
        }));

        return configs;
    }
}
