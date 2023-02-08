/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
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
IgxToggleModule,
IgxToastModule,
IgxGridComponent} from 'igniteui-angular';
import {IgxCategoryChartModule,
IgxLegendModule,
IgxPieChartModule,
IgxSparklineCoreModule,
IgxSparklineModule} from 'igniteui-angular-charts';
import { Config, IConfigGenerator, AppModuleConfig, DependenciesType } from 'igniteui-live-editing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
export class DVGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollModule: '../../../src/app/directives/prevent-scroll.directive',
        ControllerComponent : '../../../projects/app-lob/src/app/grid-finjs/controllers.component',
        GridFinJSComponent : '../../../projects/app-lob/src/app/grid-finjs/grid-finjs.component',
        SignalRService : '../../../projects/app-lob/src/app/services/signal-r.service',
        FloatingPanesService : '../../../projects/app-lob/src/app/services/floating-panes.service',
        DockSlotComponent: '../../../projects/app-lob/src/app/grid-finjs-dock-manager/dock-slot.component',
        GridHostDirective: '../../../projects/app-lob/src/app/grid-finjs-dock-manager/dock-slot.component',
        FinancialDataService: '../../../projects/app-lob/src/app/services/financial.service'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        const dockManagerImport = 'import { defineCustomElements } from \'igniteui-dockmanager/loader\';';
        const defineCustomElements = 'defineCustomElements();';

        configs.push(new Config({
            component: 'GridComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/projects/app-lob/src/app/data/athletesData.ts',
                '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss'],
            additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core'],
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
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/projects/app-lob/src/app/data/employeesData.ts',
                '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss'],
            additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core'],
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

        configs.push(new Config({
            component: 'FinJSDemoComponent',
            dependenciesType: DependenciesType.Charts,
            additionalDependencies: ['@microsoft/signalr'],
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/projects/app-lob/src/app/services/financial.service.ts',
                '/projects/app-lob/src/app/services/signal-r.service.ts',
                '/projects/app-lob/src/app/data/financialData.ts', '/projects/app-lob/src/app/grid-finjs/controllers.component.ts',
                '/projects/app-lob/src/app/grid-finjs/grid-finjs.component.ts',
                '/projects/app-lob/src/app/grid-finjs/controllers.component.html',
                '/projects/app-lob/src/app/grid-finjs/grid-finjs.component.html',
                '/projects/app-lob/src/app/grid-finjs/controllers.component.scss',
                '/projects/app-lob/src/app/grid-finjs/grid-finjs.component.scss',
                '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxCategoryChartModule',
                    'IgxGridModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxSliderModule', 'IgxToggleModule',
                    'IgxButtonModule', 'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxSwitchModule',
                    'IgxRippleModule', 'FinJSDemoComponent', 'IgxDialogModule', 'FinancialDataService','ControllerComponent', 'GridFinJSComponent', 'IgxToastModule',
                    'HttpClientModule', 'SignalRService'],
                ngDeclarations: ['FinJSDemoComponent','ControllerComponent', 'GridFinJSComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxSliderModule', 'IgxToggleModule',
                    'IgxButtonModule', 'IgxSwitchModule', 'IgxRippleModule', 'IgxCategoryChartModule', 'IgxDialogModule', 'IgxToastModule', 'HttpClientModule'],
                ngProviders: ['FinancialDataService', 'IgxExcelExporterService', 'IgxCsvExporterService', 'SignalRService']
            })
        }));

        configs.push(new Config({
            component: 'GridFinJSDockManagerComponent',
            additionalDependencies: ['igniteui-angular-charts', 'igniteui-angular-core', '@juggle/resize-observer', '@microsoft/signalr', 'igniteui-dockmanager'],
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/projects/app-lob/src/app/services/signal-r.service.ts',
                '/projects/app-lob/src/app/data/financialData.ts',
                '/projects/app-lob/src/app/services/floating-panes.service.ts',
                '/projects/app-lob/src/app/grid-finjs-dock-manager/dock-slot.component.ts',
                '/projects/app-lob/src/_app-layout.scss', '/projects/app-lob/src/_variables.scss'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxCategoryChartModule',
                    'IgxGridModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxSliderModule', 'IgxToggleModule',
                    'IgxButtonModule', 'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxSwitchModule',
                    'IgxRippleModule', 'GridFinJSDockManagerComponent', 'IgxDialogModule', 'IgxToastModule',
                    'HttpClientModule', 'SignalRService', 'CUSTOM_ELEMENTS_SCHEMA', 'FloatingPanesService', 'DockSlotComponent',
                    'IgxGridComponent', 'GridHostDirective'],
                schemas: ['CUSTOM_ELEMENTS_SCHEMA'],
                ngDeclarations: ['GridFinJSDockManagerComponent', 'DockSlotComponent', 'GridHostDirective'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxGridModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxSliderModule', 'IgxToggleModule',
                    'IgxButtonModule', 'IgxSwitchModule', 'IgxRippleModule', 'IgxCategoryChartModule', 'IgxDialogModule', 'IgxToastModule', 'HttpClientModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService', 'SignalRService', 'FloatingPanesService'],
                additionalAdjustments: [dockManagerImport, defineCustomElements],
                ngEntryComponents: ['IgxGridComponent', 'DockSlotComponent']
            })
        }));

        return configs;
    }
}
