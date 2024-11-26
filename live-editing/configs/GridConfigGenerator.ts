/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
    Router,
    RouterModule
} from '@angular/router';
import {
    IgxActionStripModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxChipsModule,
    IgxComboModule,
    IgxSimpleComboModule,
    IgxCsvExporterService,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxDividerModule,
    IgxDragDropModule,
    IgxExcelExporterService,
    IgxExpansionPanelModule,
    IgxFocusModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxOverlayService,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSelectModule,
    IgxSnackbarModule,
    IgxSwitchModule,
    IgxTabsModule,
    IgxToastModule,
    IgxTooltipModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxCardModule,
    IgcFormsModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';
export class GridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollDirective: '../../src/app/directives/prevent-scroll.directive',
        ContextmenuComponent: '../../src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component',
        RemoteValuesService: '../../src/app/grid/grid-excel-style-filtering-load-on-demand/remoteValues.service',
        PlanetComponent: '../../src/app/grid/grid-row-drag/planet/planet.component',
        LocalService: '../../src/app/grid/grid-sample-2/grid-sample-2.component',
        RemoteService: '../../src/app/services/remote.service',
        RemoteFilteringService: '../../src/app/services/remoteFiltering.service',
        RemotePagingService: '../../src/app/services/remotePaging.service',
        RemoteServiceVirt: '../../src/app/services/remoteVirtualization.service',
        FinancialDataService: '../../src/app/services/financial.service',
        CRUDService: '../../src/app/services/crud.service',
        RemotePagingWithBatchEditingService: '../../src/app/services/remotePagingWithBatchEditing.service'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'FinancialSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts',
                '/src/app/services/financial.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule',
                    'IgxGridModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'FinancialSampleComponent', 'FinancialDataService', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['FinancialSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'HttpClientModule'],
                ngProviders: ['FinancialDataService']
            })
        }));

        configs.push(new Config({
            component: 'GridSample3Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxButtonModule', 'IgxGridModule', 'IgxInputGroupModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'GridSample3Component', 'LocalService', 'IgxIconModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridSample3Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxButtonModule', 'IgxGridModule',
                    'IgxInputGroupModule', 'IgxRippleModule', 'HttpClientModule', 'IgxIconModule']
            })
        }));

        configs.push(new Config({
            component: 'GridGroupByCustomSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxGridModule',
                    'IgxSwitchModule', 'GridGroupByCustomSampleComponent', 'IgxIconModule', 'IgxBadgeModule', 'IgxPreventDocumentScrollDirective', 'IgxDropDownModule', 'IgxToggleModule'],
                ngDeclarations: ['GridGroupByCustomSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxButtonModule', 'IgxGridModule', 'IgxIconModule', 'IgxBadgeModule', 'IgxDropDownModule','IgxToggleModule' ]
            })
        }));

        configs.push(new Config({
            component: 'GridGroupBySampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxGridModule',
                    'IgxSwitchModule', 'GridGroupBySampleComponent', 'IgxIconModule', 'IgxBadgeModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridGroupBySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxButtonModule', 'IgxGridModule', 'IgxIconModule', 'IgxBadgeModule']
            })
        }));

        configs.push(new Config({
            component: 'GridGroupBySummarySampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxButtonGroupModule', 'IgxGridModule',
                    'IgxSwitchModule', 'GridGroupBySummarySampleComponent', 'IgxIconModule', 'IgxBadgeModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridGroupBySummarySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxButtonModule', 'IgxButtonGroupModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxBadgeModule', 'IgxSwitchModule']
            })
        }));

        configs.push(new Config({
            component: 'GridGroupBySummaryStylingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxButtonGroupModule', 'IgxGridModule',
                    'IgxSwitchModule', 'GridGroupBySummaryStylingSampleComponent', 'IgxIconModule', 'IgxBadgeModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridGroupBySummaryStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxButtonModule', 'IgxButtonGroupModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxBadgeModule']
            })
        }));

        configs.push(new Config({
            component: 'GridFilteringStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridFilteringStyleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'FilteringSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxRippleModule', 'FilteringSampleComponent', 'IgxInputGroupModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['FilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxRippleModule', 'IgxInputGroupModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'FilteringTemplateSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxGridModule',
                    'IgxRippleModule',
                    'FilteringTemplateSampleComponent',
                    'IgxInputGroupModule',
                    'IgxDatePickerModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['FilteringTemplateSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxRippleModule', 'IgxInputGroupModule', 'IgxDatePickerModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'PagingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule',
                    'IgxGridModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'PagingSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['PagingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
                    'IgxRippleModule', 'IgxSwitchModule', 'HttpClientModule']
            })
        }));

        configs.push(new Config({
            component: 'GridPagerSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxRippleModule', 'IgxSwitchModule', 'GridPagerSampleComponent', 'IgxSelectModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridPagerSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxRippleModule', 'IgxSwitchModule', 'IgxSelectModule']
            })
        }));

        configs.push(new Config({
            component: 'GridSelectionSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts',
                '/src/app/services/financial.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxSnackbarModule',
                    'IgxGridModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxSwitchModule', 'GridSelectionSampleComponent', 'IgxPreventDocumentScrollDirective',
                    'FinancialDataService', 'IgxButtonGroupModule'],
                ngDeclarations: ['GridSelectionSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxGridModule', 'IgxSnackbarModule',
                    'IgxIconModule', 'IgxInputGroupModule', 'IgxSwitchModule', 'IgxButtonGroupModule', 'HttpClientModule'],
                ngProviders: ['FinancialDataService']
            })
        }));

        configs.push(new Config({
            component: 'GridSelectionTemplateExcelComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridSelectionTemplateExcelComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridSelectionTemplateExcelComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridSelectionTemplateNumbersComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCheckboxModule', 'IgxGridModule',
                    'GridSelectionTemplateNumbersComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridSelectionTemplateNumbersComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxCheckboxModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridSearchSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/grid/grid-search-sample/data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxButtonModule', 'IgxGridModule', 'IgxIconModule',
                    'IgxInputGroupModule', 'IgxRippleModule', 'IgxChipsModule', 'GridSearchSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridSearchSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxButtonModule', 'IgxGridModule',
                    'IgxIconModule', 'IgxInputGroupModule',
                    'IgxRippleModule', 'IgxChipsModule', 'HttpClientModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnHidingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxGridModule', 'IgxRadioModule', 'GridColumnHidingSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridColumnHidingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxRadioModule', 'HttpClientModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnHidingToolbarSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxGridModule', 'GridColumnHidingToolbarSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridColumnHidingToolbarSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'HttpClientModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnHidingToolbarStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HttpClientModule', 'IgxGridModule', 'GridColumnHidingToolbarStyleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridColumnHidingToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'HttpClientModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'ResizingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'ResizingSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['ResizingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridResizeLineStylingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridResizeLineStylingSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridResizeLineStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'SortingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/localData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxIconModule', 'IgxRippleModule',
                    'SortingSampleComponent', 'IgxInputGroupModule', 'IgxSelectModule', 'IgxPreventDocumentScrollDirective', 'IgxSimpleComboModule', 'IgxButtonModule'],
                ngDeclarations: ['SortingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxRippleModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxSelectModule', 'IgxSimpleComboModule', 'IgxButtonModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/localData.ts'],
            component: 'SortingStylingComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxIconModule', 'IgxRippleModule',
                    'SortingStylingComponent', 'IgxInputGroupModule', 'IgxSelectModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['SortingStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxRippleModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxSelectModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridRemoteVirtualizationSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remoteVirtualization.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRemoteVirtualizationSampleComponent', 'IgxGridModule', 'IgxToastModule',
                    'IgxBadgeModule', 'HttpClientModule', 'RemoteServiceVirt', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridRemoteVirtualizationSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxToastModule', 'IgxBadgeModule', 'HttpClientModule'],
                ngProviders: ['RemoteServiceVirt']
            })
        }));

        configs.push(new Config({
            component: 'RemoteFilteringSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remoteFiltering.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['RemoteFilteringSampleComponent', 'IgxGridModule',
                    'IgxBadgeModule', 'HttpClientModule', 'RemoteFilteringService', 'IgxToastModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['RemoteFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxBadgeModule', 'HttpClientModule', 'IgxToastModule'],
                ngProviders: ['RemoteFilteringService']
            })
        }));

        configs.push(new Config({
            component: 'PinningSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts', '/src/app/services/svgIcons.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['PinningSampleComponent', 'IgxGridModule', 'IgxIconModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['PinningSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'PinningToolbarSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['PinningToolbarSampleComponent', 'IgxGridModule', 'IgxIconModule', 'IgxPreventDocumentScrollDirective', 'RouterModule'],
                ngDeclarations: ['PinningToolbarSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxIconModule', 'RouterModule', 'RouterModule.forRoot([])'],
                ngProviders: []
            })
        }));

        // column-moving sample
        configs.push(new Config({
            component: 'GridMovingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMovingSampleComponent', 'IgxGridModule', 'IgxBadgeModule', 'IgxIconModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridMovingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxBadgeModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridMovingStyledSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMovingStyledSampleComponent', 'IgxGridModule', 'IgxBadgeModule', 'IgxIconModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridMovingStyledSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxBadgeModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridToolbarSample1Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridToolbarSample1Component', 'IgxAvatarModule', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridToolbarSample1Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxAvatarModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridToolbarSample2Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridToolbarSample2Component', 'IgxAvatarModule', 'IgxGridModule', 'IgxSwitchModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxPreventDocumentScrollDirective', 'IgxInputGroupModule'],
                ngDeclarations: ['GridToolbarSample2Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxAvatarModule', 'IgxGridModule', 'IgxSwitchModule', 'IgxInputGroupModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            })
        }));

        configs.push(new Config({
            component: 'GridToolbarSample3Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridToolbarSample3Component', 'IgxAvatarModule', 'IgxGridModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridToolbarSample3Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxAvatarModule', 'IgxGridModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            })
        }));

        configs.push(new Config({
            component: 'GridToolbarSample4Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridToolbarSample4Component', 'IgxAvatarModule', 'IgxGridModule', 'IgxPreventDocumentScrollDirective', 'IgxIconModule'],
                ngDeclarations: ['GridToolbarSample4Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxAvatarModule', 'IgxGridModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridToolbarStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridToolbarStyleComponent', 'IgxAvatarModule', 'IgxGridModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxAvatarModule', 'IgxGridModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            })
        }));

        configs.push(new Config({
            component: 'GridEditingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/grid/grid-editing-sample/data.ts',
                '/src/app/grid/grid-editing-sample/product.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxCheckboxModule', 'IgxDatePickerModule', 'IgxDialogModule',
                    'IgxGridModule', 'IgxInputGroupModule', 'IgxIconModule', 'IgxComboModule', 'IgxToastModule',
                    'IgxRippleModule', 'GridEditingSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridEditingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxButtonModule', 'IgxCheckboxModule', 'IgxDatePickerModule', 'IgxDialogModule',
                    'IgxGridModule', 'IgxInputGroupModule', 'IgxIconModule', 'IgxRippleModule', 'IgxToastModule', 'IgxComboModule']
            })
        }));

        configs.push(new Config({
            component: 'GridEditingEventsComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxToastModule', 'GridEditingEventsComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridEditingEventsComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxToastModule']
            })
        }));

        configs.push(new Config({
            component: 'GridExcelStyleEditingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridExcelStyleEditingComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridExcelStyleEditingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridEditingStyleSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridEditingStyleSampleComponent', 'IgxGridModule', 'IgxDatePickerModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridEditingStyleSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxDatePickerModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiColumnHeadersComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiColumnHeadersComponent', 'IgxGridModule', 'IgxButtonModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridMultiColumnHeadersComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxButtonModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiColumnHeadersStylingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiColumnHeadersStylingComponent', 'IgxGridModule', 'IgxButtonModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridMultiColumnHeadersStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxButtonModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiColumnHeadersExportComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiColumnHeadersExportComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective', 'IgxExcelExporterService'],
                ngDeclarations: ['GridMultiColumnHeadersExportComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule'],
                ngProviders: ['IgxExcelExporterService']
            })
        }));

        configs.push(new Config({
            component: 'RemotePagingGridSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remotePaging.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['RemotePagingGridSampleComponent', 'IgxGridModule', 'RouterModule', 'HttpClientModule', 'RemotePagingService',
                    'IgxSelectModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['RemotePagingGridSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'RouterModule.forRoot([])', 'IgxGridModule', 'HttpClientModule', 'IgxSelectModule'],
                ngProviders: ['RemotePagingService']
            })
        }));

        configs.push(new Config({
            component: 'CustomRemotePagingGridSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remotePaging.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['CustomRemotePagingGridSampleComponent', 'IgxGridModule', 'RouterModule', 'HttpClientModule',
                    'RemotePagingService', 'IgxSelectModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['CustomRemotePagingGridSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'RouterModule.forRoot([])', 'IgxGridModule', 'HttpClientModule', 'IgxSelectModule'],
                ngProviders: ['RemotePagingService']
            })
        }));

        configs.push(new Config({
            component: 'GridDisplayDensitySampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxButtonGroupModule',
                    'IgxGridModule', 'GridDisplayDensitySampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridDisplayDensitySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxButtonModule', 'IgxButtonGroupModule',
                    'IgxGridModule']
            })
        }));

        // Grid cellClasses
        configs.push(new Config({
            component: 'GridConditionalCellStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridConditionalCellStyleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridConditionalCellStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        // Grid cellStyles
        configs.push(new Config({
            component: 'GridConditionalCellStyle2Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridConditionalCellStyle2Component', 'IgxPreventDocumentScrollDirective', 'IgxButtonModule', 'IgxInputGroupModule'],
                ngDeclarations: ['GridConditionalCellStyle2Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxButtonModule', 'IgxInputGroupModule']
            })
        }));

        // Grid Batch Editing
        configs.push(new Config({
            component: 'GridBatchEditingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts', '/src/app/data/utils.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridBatchEditingSampleComponent', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule',
                    'IgxFocusModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridBatchEditingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule',
                    'IgxFocusModule']
            })
        }));

        // Grid with Action Strip
        configs.push(new Config({
            component: 'GridActionStripSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridActionStripSampleComponent', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule',
                    'IgxFocusModule', 'IgxPreventDocumentScrollDirective', 'IgxActionStripModule'],
                ngDeclarations: ['GridActionStripSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule', 'IgxActionStripModule',
                    'IgxFocusModule']
            })
        }));

        // Grid Custom Summaries
        configs.push(new Config({
            component: 'GridCustomSummariesSelectionComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCustomSummariesSelectionComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridCustomSummariesSelectionComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        // Grid Row Editing
        configs.push(new Config({
            component: 'GridRowEditSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRowEditSampleComponent', 'IgxGridModule', 'IgxFocusModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridRowEditSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxFocusModule']
            })
        }));

        // Grid Row Editing Styling
        configs.push(new Config({
            component: 'GridRowEditStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRowEditStyleComponent', 'IgxGridModule', 'IgxFocusModule', 'IgxIconModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridRowEditStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxFocusModule', 'IgxIconModule']
            })
        }));

        configs.push(new Config({
            component: 'GridCustomFilteringComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCustomFilteringComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridCustomFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringSample1Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['ExcelStyleFilteringSample1Component', 'IgxGridModule', 'IgxButtonGroupModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['ExcelStyleFilteringSample1Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxButtonGroupModule']
            })
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringSample2Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['ExcelStyleFilteringSample2Component', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['ExcelStyleFilteringSample2Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringSample3Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['ExcelStyleFilteringSample3Component', 'IgxGridModule', 'IgxPreventDocumentScrollDirective', 'IgxIconModule'],
                ngDeclarations: ['ExcelStyleFilteringSample3Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxIconModule']
            })
        }));

        configs.push(new Config({
            component: 'GridExcelStyleFilteringLoadOnDemandComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/grid/grid-excel-style-filtering-load-on-demand/remoteValues.service.ts',
                '/src/app/grid/grid-excel-style-filtering-load-on-demand/employees.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridExcelStyleFilteringLoadOnDemandComponent', 'IgxGridModule', 'RemoteValuesService', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridExcelStyleFilteringLoadOnDemandComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule'],
                ngProviders: ['RemoteValuesService']
            })
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['ExcelStyleFilteringStyleComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['ExcelStyleFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridExternalExcelStyleFilteringComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridExternalExcelStyleFilteringComponent', 'IgxGridModule', 'IgxSelectModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridExternalExcelStyleFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxSelectModule']
            })
        }));

        configs.push(new Config({
            component: 'GridExternalAdvancedFilteringComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridExternalAdvancedFilteringComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridExternalAdvancedFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiCellSelectionComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiCellSelectionComponent', 'IgxGridModule', 'IgxToastModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridMultiCellSelectionComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxToastModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiCellSelectionStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiCellSelectionStyleComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridMultiCellSelectionStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiRowLayoutComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiRowLayoutComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridMultiRowLayoutComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        const gridSaveStateSampleConfig = new Config({
            component: 'GridSaveStateComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/grid/grid-save-state/localData.ts',
                '/src/app/grid/grid-save-state/about.component.ts',
                '/src/app/grid/grid-save-state/about.component.html'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridSaveStateComponent', 'IgxGridModule', 'IgxTooltipModule', 'IgxCheckboxModule', 'IgxIconModule', 'IgxButtonModule',
                    'IgxToastModule', 'IgxSwitchModule', 'AboutComponent', 'Router', 'RouterModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridSaveStateComponent', 'AboutComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxTooltipModule', 'IgxCheckboxModule', 'IgxIconModule', 'IgxButtonModule',
                    'RouterModule.forRoot([\{component: AboutComponent, path: \'grid-about\'},\{component: GridSaveStateComponent, path: \'grid-state\'},\{ path: \'\', redirectTo: \'/grid-state\', pathMatch: \'full\' }])',
                    'IgxToastModule', 'IgxSwitchModule']
            })
        });
        gridSaveStateSampleConfig.usesRouting = true;
        configs.push(gridSaveStateSampleConfig);

        configs.push(new Config({
            component: 'GridMultiRowLayoutConfigurationComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiRowLayoutConfigurationComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridMultiRowLayoutConfigurationComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridDragToGridSampleComponent', 'IgxDragDropModule',
                    'IgxIconModule', 'IgxButtonModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridDragToGridSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxDragDropModule', 'IgxIconModule', 'IgxButtonModule']
            }),
            component: 'GridDragToGridSampleComponent'
        }));

        configs.push(new Config({
            component: 'GridNestedDataBindComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nested-employee-data.ts', '/src/_variables.scss', '/src/_app-layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridNestedDataBindComponent', 'IgxGridModule', 'IgxInputGroupModule', 'IgxExpansionPanelModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridNestedDataBindComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxInputGroupModule', 'IgxExpansionPanelModule']
            })
        }));

        configs.push(new Config({
            component: 'GridNestedDataBindAminoacidComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/amino-data.ts', '/src/_variables.scss', '/src/_app-layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridNestedDataBindAminoacidComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridNestedDataBindAminoacidComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridCompositeDataComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts', '/src/_variables.scss', '/src/_app-layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCompositeDataComponent', 'IgxGridModule', 'IgxInputGroupModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridCompositeDataComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxInputGroupModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridDragBaseSampleComponent', 'IgxDragDropModule', 'IgxButtonModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridDragBaseSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxDragDropModule', 'IgxButtonModule']
            }),
            component: 'GridDragBaseSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts',
                'src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component.ts',
                'src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component.html',
                'src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridContextmenuSampleComponent', 'ContextmenuComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridContextmenuSampleComponent', 'ContextmenuComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            }),
            component: 'GridContextmenuSampleComponent'
        }));

        configs.push(new Config({
            component: 'GridCustomKBNavigationComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCustomKBNavigationComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridCustomKBNavigationComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/grid/grid-row-drag/data.ts',
                '/src/app/grid/grid-row-drag/planet/planet.component.html',
                '/src/app/grid/grid-row-drag/planet/planet.component.scss',
                '/src/app/grid/grid-row-drag/planet/planet.component.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridDragSampleComponent', 'PlanetComponent', 'IgxDragDropModule', 'IgxDialogModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridDragSampleComponent', 'PlanetComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxDragDropModule', 'IgxDialogModule']
            }),
            component: 'GridDragSampleComponent'
        }));

        configs.push(new Config({
            component: 'GridMRLCustomNavigationComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/company-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMRLCustomNavigationComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridMRLCustomNavigationComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'CustomGridPagingStyleSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['CustomGridPagingStyleSampleComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective', 'IgxIconModule'],
                ngDeclarations: ['CustomGridPagingStyleSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxIconModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultipleRowDragComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridMultipleRowDragComponent', 'IgxDragDropModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridMultipleRowDragComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxDragDropModule']
            })
        }));

        configs.push(new Config({
            component: 'GridRowReorderComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridRowReorderComponent', 'IgxDragDropModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridRowReorderComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxDragDropModule']
            })
        }));

        configs.push(new Config({
            component: 'GridDropIndicatorComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridDropIndicatorComponent', 'IgxDragDropModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridDropIndicatorComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxDragDropModule']
            })
        }));

        configs.push(new Config({
            component: 'GridGroupByPagingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/invoiceData.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxIconModule', 'GridGroupByPagingSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridGroupByPagingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxIconModule']
            })
        }));
        configs.push(new Config({
            component: 'GridMultiColumnHeaderTemplateComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiColumnHeaderTemplateComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective', 'IgxIconModule'],
                ngDeclarations: ['GridMultiColumnHeaderTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxIconModule']
            })
        }));
        configs.push(new Config({
            component: 'GridClipboardSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridClipboardSampleComponent', 'IgxGridModule', 'IgxSwitchModule', 'IgxInputGroupModule', 'IgxIconModule', 'IgxPreventDocumentScrollDirective', 'IgxButtonModule'],
                ngDeclarations: ['GridClipboardSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxSwitchModule', 'IgxInputGroupModule', 'IgxIconModule', 'IgxButtonModule']
            })
        }));
        configs.push(new Config({
            component: 'PinningStylingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['PinningStylingComponent', 'IgxGridModule', 'IgxIconModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['PinningStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxIconModule']
            })
        }));
        configs.push(new Config({
            component: 'GridGroupByStylingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridGroupByStylingComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridGroupByStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));
        configs.push(new Config({
            component: 'GridCellSelectionComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCellSelectionComponent', 'IgxGridModule', 'IgxSwitchModule',
                    'IgxIconModule', 'IgxButtonGroupModule', 'IgxAvatarModule', 'IgxSnackbarModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridCellSelectionComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxSnackbarModule', 'IgxIconModule', 'IgxButtonGroupModule']
            })
        }));

        configs.push(new Config({
            component: 'GridMultiRowLayoutStylingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridMultiRowLayoutStylingComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridMultiRowLayoutStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridAdvancedFilteringSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridAdvancedFilteringSampleComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridAdvancedFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridColumnDataTypesSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridColumnDataTypesSampleComponent', 'IgxGridModule', 'IgxTooltipModule', 'IgxInputGroupModule', 'IgxSelectModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridColumnDataTypesSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxTooltipModule', 'IgxInputGroupModule', 'IgxSelectModule']
            })
        }));

        configs.push(new Config({
            component: 'GridAdvancedFilteringStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridAdvancedFilteringStyleComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridAdvancedFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridConditionalRowSelectorsComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxGridModule', 'GridConditionalRowSelectorsComponent', 'IgxCheckboxModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridConditionalRowSelectorsComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxCheckboxModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridAllDataSummaryComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridAllDataSummaryComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridAllDataSummaryComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridSummaryTemplateComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridSummaryTemplateComponent', 'IgxGridModule', 'IgxInputGroupModule',
                    'IgxButtonGroupModule', 'IgxSwitchModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridSummaryTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxInputGroupModule', 'IgxButtonGroupModule', 'IgxSwitchModule']
            })
        }));

        configs.push(new Config({
            component: 'GridCollapsibleColumnGroupsComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridCollapsibleColumnGroupsComponent', 'IgxGridModule', 'IgxTooltipModule', 'IgxPreventDocumentScrollDirective', 'IgxIconModule'],
                ngDeclarations: ['GridCollapsibleColumnGroupsComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxTooltipModule', 'IgxIconModule']
            })
        }));

        configs.push(new Config({
            component: 'RightPinningSampleComponent',
            additionalFiles: [
                '/src/app/data/employeesData.ts',
                '/src/app/data/athletesData.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['RightPinningSampleComponent', 'IgxGridModule', 'IgxTooltipModule', 'IgxAvatarModule'],
                ngDeclarations: ['RightPinningSampleComponent'],
                ngImports: ['IgxGridModule', 'IgxTooltipModule', 'IgxAvatarModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnSelectionComponent',
            additionalFiles: [
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridColumnSelectionComponent', 'IgxGridModule', 'IgxSelectModule'],
                ngDeclarations: ['GridColumnSelectionComponent'],
                ngImports: ['IgxGridModule', 'IgxSelectModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnGroupSelectionComponent',
            additionalFiles: [
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridColumnGroupSelectionComponent', 'IgxGridModule'],
                ngDeclarations: ['GridColumnGroupSelectionComponent'],
                ngImports: ['IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridColumnSelectionStylesComponent',
            additionalFiles: [
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridColumnSelectionStylesComponent', 'IgxGridModule'],
                ngDeclarations: ['GridColumnSelectionStylesComponent'],
                ngImports: ['IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridRemoteVirtualizationAddRowSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remote.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRemoteVirtualizationAddRowSampleComponent', 'IgxGridModule', 'IgxToastModule',
                    'IgxBadgeModule', 'HttpClientModule', 'RemoteService', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridRemoteVirtualizationAddRowSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxToastModule', 'IgxBadgeModule', 'HttpClientModule'],
                ngProviders: ['RemoteService']
            })
        }));

        configs.push(new Config({
            component: 'GridRowPinningSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRowPinningSampleComponent', 'IgxActionStripModule', 'IgxSwitchModule', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridRowPinningSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxActionStripModule', 'IgxSwitchModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridRowPinningExtraColumnSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts', '/src/app/services/svgIcons.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRowPinningExtraColumnSampleComponent', 'IgxSwitchModule', 'IgxGridModule', 'IgxIconModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridRowPinningExtraColumnSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxSwitchModule', 'IgxGridModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridPinningDragSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridPinningDragSampleComponent', 'IgxActionStripModule', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridPinningDragSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxActionStripModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridRowPinningStylingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridRowPinningStylingSampleComponent', 'IgxActionStripModule', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridRowPinningStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxActionStripModule', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridKeyboardnavGuide',
            additionalFiles: [
                '/src/app/data/customers.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridKeyboardnavGuide', 'IgxGridModule', 'IgxListModule', 'IgxOverlayService'],
                ngDeclarations: ['GridKeyboardnavGuide'],
                ngImports: ['IgxGridModule', 'IgxListModule'],
                ngProviders: ['IgxOverlayService']
            })
        }));

        configs.push(new Config({
            component: 'RemotePagingDefaultTemplateComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remotePaging.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['RemotePagingDefaultTemplateComponent', 'IgxGridModule', 'RouterModule',
                    'HttpClientModule', 'RemotePagingService', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['RemotePagingDefaultTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'RouterModule.forRoot([])', 'IgxGridModule', 'HttpClientModule'],
                ngProviders: ['RemotePagingService']
            })
        }));

        // Grid Batch Editing with remote paging
        configs.push(new Config({
            component: 'RemotePagingBatchEditingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/foods.ts', '/src/app/services/remotePagingWithBatchEditing.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['RemotePagingBatchEditingComponent', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule',
                    'RemotePagingWithBatchEditingService', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['RemotePagingBatchEditingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxDialogModule', 'IgxButtonModule'],
                ngProviders: ['RemotePagingWithBatchEditingService']
            })
        }));

        configs.push(new Config({
            component: 'RemotePagingDefaultTemplateComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remotePaging.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['RemotePagingDefaultTemplateComponent', 'IgxGridModule', 'RouterModule',
                    'HttpClientModule', 'RemotePagingService', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['RemotePagingDefaultTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'RouterModule.forRoot([])', 'IgxGridModule', 'HttpClientModule'],
                ngProviders: ['RemotePagingService']
            })
        }));

        configs.push(new Config({
            component: 'GridExternalOutletComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridExternalOutletComponent', 'IgxGridModule', 'IgxToggleModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridExternalOutletComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxToggleModule']
            })
        }));

        configs.push(new Config({
            component: 'GridSortingIndicatorsComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/financialData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridSortingIndicatorsComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridSortingIndicatorsComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridExportVisualizationComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridExportVisualizationComponent', 'IgxGridModule', 'IgxButtonModule', 'IgxPreventDocumentScrollDirective', 'IgxExcelExporterService', 'IgxCsvExporterService'],
                ngDeclarations: ['GridExportVisualizationComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxButtonModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            })
        }));

        configs.push(new Config({
            component: 'GridAddRowSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridAddRowSampleComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective', 'IgxActionStripModule', 'IgxInputGroupModule', 'IgxFocusModule'],
                ngDeclarations: ['GridAddRowSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxActionStripModule', 'IgxInputGroupModule', 'IgxFocusModule']
            })
        }));

        configs.push(new Config({
            component: 'GridEditingLifecycleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxPreventDocumentScrollDirective', 'GridEditingLifecycleComponent', 'IgxSwitchModule', 'IgxIconModule'],
                ngDeclarations: ['GridEditingLifecycleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxSwitchModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'GridSelectComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/grid/grid-select/data.ts', '/src/app/grid/grid-select/characters.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxSelectModule', 'GridSelectComponent'],
                ngDeclarations: ['GridSelectComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxSelectModule']
            })
        }));

        configs.push(new Config({
            component: 'GridFormattedFilteringStrategyComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridFormattedFilteringStrategyComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridFormattedFilteringStrategyComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridSummaryFormatterComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridSummaryFormatterComponent', 'IgxGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridSummaryFormatterComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'CRUDSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/crud.service.ts',
                '/src/app/data/invoiceData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['CRUDSampleComponent', 'IgxActionStripModule', 'HttpClientModule', 'IgxGridModule', 'IgxPreventDocumentScrollDirective', 'CRUDService'],
                ngDeclarations: ['CRUDSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxActionStripModule', 'HttpClientModule'],
                ngProviders: ['CRUDService']
            })
        }));

        configs.push(new Config({
            component: 'GridRowClassesComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridRowClassesComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridRowClassesComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridRowStylesComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/financial.service.ts', '/src/app/data/financialData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridRowStylesComponent', 'IgxPreventDocumentScrollDirective', 'IgxBadgeModule', 'FinancialDataService'],
                ngDeclarations: ['GridRowStylesComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxBadgeModule'],
                ngProviders: ['FinancialDataService']
            })
        }));

        configs.push(new Config({
            component: 'GridValidatorServiceComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/employeesData.ts'

            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridValidatorServiceComponent', 'IgxGridModule', 'IgxFocusModule', 'IgxPreventDocumentScrollDirective', 'IgxSwitchModule'],
                ngDeclarations: ['GridValidatorServiceComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxFocusModule', 'IgxSwitchModule']
            })
        }));

        configs.push(new Config({
            component: 'GridColumnAutosizingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridColumnAutosizingComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridColumnAutosizingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridValidatorServiceCrossFieldComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/employeesData.ts'

            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridValidatorServiceCrossFieldComponent', 'IgxGridModule', 'IgxTooltipModule', 'IgxFocusModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridValidatorServiceCrossFieldComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxFocusModule', 'IgxTooltipModule']
            })
        }));

        configs.push(new Config({
            component: 'GridValidationStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridValidationStyleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridValidationStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule']
            })
        }));

        configs.push(new Config({
            component: 'GridValidatorServiceExtendedComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/employeesData.ts'

            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridValidatorServiceExtendedComponent', 'IgxGridModule', 'IgxFocusModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['GridValidatorServiceExtendedComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxFocusModule']
            })
        }));

        configs.push(new Config({
            component: 'GridSummaryExportComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridSummaryExportComponent', 'IgxPreventDocumentScrollDirective', 'IgxExcelExporterService'],
                ngDeclarations: ['GridSummaryExportComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule'],
                ngProviders: ['IgxExcelExporterService']
            })
        }));

        configs.push(new Config({
            component: 'GridStatePersistenceSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts', '/src/app/services/financial.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['GridStatePersistenceSampleComponent', 'IgxAvatarModule', 'IgxGridModule', 'IgxSwitchModule', 'IgxIconModule', 'IgxButtonModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxPreventDocumentScrollDirective', 'FinancialDataService'],
                ngDeclarations: ['GridStatePersistenceSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxAvatarModule', 'IgxGridModule', 'IgxSwitchModule', 'IgxIconModule', 'IgxButtonModule'],
                ngProviders: ['FinancialDataService']
            })
        }));

        configs.push(new Config({
            component: 'GridCascadingCombosComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/cities15000-regions-countries.ts', '/src/app/data/data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'GridCascadingCombosComponent', 'IgxPreventDocumentScrollDirective', 'IgxComboModule', 'IgxSimpleComboModule'],
                ngDeclarations: ['GridCascadingCombosComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxComboModule', 'IgxSimpleComboModule']
            })
        }));

        configs.push(new Config({
            component: 'GridWithRatingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            additionalDependencies: ['igniteui-webcomponents'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxGridModule', 'IgxToastModule', 'GridWithRatingComponent', 'IgxPreventDocumentScrollDirective', 'IgcFormsModule'],
                ngDeclarations: ['GridWithRatingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxToastModule', 'IgcFormsModule']
            })
        }));

        configs.push(new Config({
            component: 'RatingInFormComponent',
            additionalFiles: [],
            additionalDependencies: ['igniteui-webcomponents'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'RatingInFormComponent', 'IgxCardModule', 'IgcFormsModule', 'IgxIconModule'],
                ngDeclarations: ['RatingInFormComponent'],
                ngImports: ['IgxButtonModule', 'IgxCardModule', 'IgcFormsModule', 'IgxIconModule']
            })
        }));

        return configs;
    }
}
