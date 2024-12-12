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
import { Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';;
export class GridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollModule: '../../src/app/directives/prevent-scroll.directive',
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
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/financialData.ts',
                '/src/app/services/financial.service.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridSample3Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridGroupByCustomSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridGroupBySampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridGroupBySummarySampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridGroupBySummaryStylingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridFilteringStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'FilteringSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'FilteringTemplateSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'PagingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridPagerSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridSelectionSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts',
                '/src/app/services/financial.service.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridSelectionTemplateExcelComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridSelectionTemplateNumbersComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/customers.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridSearchSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/grid/grid-search-sample/data.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridColumnHidingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridColumnHidingToolbarSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridColumnHidingToolbarStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'ResizingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridResizeLineStylingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'SortingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/localData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'SortingStylingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/localData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridRemoteVirtualizationSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remoteVirtualization.service.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'RemoteFilteringSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remoteFiltering.service.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'PinningSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts', '/src/app/services/svgIcons.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'PinningToolbarSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        // column-moving sample
        configs.push(new Config({
            component: 'GridMovingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridMovingStyledSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridToolbarSample1Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridToolbarSample2Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridToolbarSample3Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridToolbarSample4Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridToolbarStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridEditingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/grid/grid-editing-sample/data.ts',
                '/src/app/grid/grid-editing-sample/product.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridEditingEventsComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridExcelStyleEditingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridEditingStyleSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridMultiColumnHeadersComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridMultiColumnHeadersStylingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridMultiColumnHeadersExportComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'RemotePagingGridSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remotePaging.service.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'CustomRemotePagingGridSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remotePaging.service.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridDisplayDensitySampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appConfig: BaseAppConfig
        }));

        // Grid cellClasses
        configs.push(new Config({
            component: 'GridConditionalCellStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appConfig: BaseAppConfig
        }));

        // Grid cellStyles
        configs.push(new Config({
            component: 'GridConditionalCellStyle2Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appConfig: BaseAppConfig
        }));

        // Grid Batch Editing
        configs.push(new Config({
            component: 'GridBatchEditingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts', '/src/app/data/utils.ts'],
            appConfig: BaseAppConfig
        }));

        // Grid with Action Strip
        configs.push(new Config({
            component: 'GridActionStripSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        // Grid Custom Summaries
        configs.push(new Config({
            component: 'GridCustomSummariesSelectionComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        // Grid Row Editing
        configs.push(new Config({
            component: 'GridRowEditSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        // Grid Row Editing Styling
        configs.push(new Config({
            component: 'GridRowEditStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridCustomFilteringComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringSample1Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringSample2Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringSample3Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridExcelStyleFilteringLoadOnDemandComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/grid/grid-excel-style-filtering-load-on-demand/remoteValues.service.ts',
                '/src/app/grid/grid-excel-style-filtering-load-on-demand/employees.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'ExcelStyleFilteringStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridExternalExcelStyleFilteringComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridExternalAdvancedFilteringComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridMultiCellSelectionComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridMultiCellSelectionStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridMultiRowLayoutComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        const gridSaveStateSampleConfig = new Config({
            component: 'GridSaveStateComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/grid/grid-save-state/localData.ts',
                '/src/app/grid/grid-save-state/about.component.ts',
                '/src/app/grid/grid-save-state/about.component.html'
            ],
            appConfig: BaseAppConfig
        });
        gridSaveStateSampleConfig.usesRouting = true;
        configs.push(gridSaveStateSampleConfig);

        configs.push(new Config({
            component: 'GridMultiRowLayoutConfigurationComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridDragToGridSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridNestedDataBindComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nested-employee-data.ts', '/src/_variables.scss', '/src/_app-layout.scss'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridNestedDataBindAminoacidComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/amino-data.ts', '/src/_variables.scss', '/src/_app-layout.scss'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridCompositeDataComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts', '/src/_variables.scss', '/src/_app-layout.scss'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridDragBaseSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridContextmenuSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts',
                'src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component.ts',
                'src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component.html',
                'src/app/grid/grid-contextmenu-sample/contextmenu/contextmenu.component.scss'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridCustomKBNavigationComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridDragSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/grid/grid-row-drag/data.ts',
                '/src/app/grid/grid-row-drag/planet/planet.component.html',
                '/src/app/grid/grid-row-drag/planet/planet.component.scss',
                '/src/app/grid/grid-row-drag/planet/planet.component.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridMRLCustomNavigationComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/company-data.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'CustomGridPagingStyleSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/athletesData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridMultipleRowDragComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/customers.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridRowReorderComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/customers.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridDropIndicatorComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/customers.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridGroupByPagingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/invoiceData.ts'
            ],
            appConfig: BaseAppConfig
        }));
        configs.push(new Config({
            component: 'GridMultiColumnHeaderTemplateComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));
        configs.push(new Config({
            component: 'GridClipboardSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));
        configs.push(new Config({
            component: 'PinningStylingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));
        configs.push(new Config({
            component: 'GridGroupByStylingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appConfig: BaseAppConfig
        }));
        configs.push(new Config({
            component: 'GridCellSelectionComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridMultiRowLayoutStylingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridAdvancedFilteringSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridColumnDataTypesSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridAdvancedFilteringStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridConditionalRowSelectorsComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridAllDataSummaryComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridSummaryTemplateComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridCollapsibleColumnGroupsComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/invoiceData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'RightPinningSampleComponent',
            additionalFiles: [
                '/src/app/data/employeesData.ts',
                '/src/app/data/athletesData.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridColumnSelectionComponent',
            additionalFiles: [
                '/src/app/data/customers.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridColumnGroupSelectionComponent',
            additionalFiles: [
                '/src/app/data/customers.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridColumnSelectionStylesComponent',
            additionalFiles: [
                '/src/app/data/customers.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridRemoteVirtualizationAddRowSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remote.service.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridRowPinningSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridRowPinningExtraColumnSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts', '/src/app/services/svgIcons.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridPinningDragSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridRowPinningStylingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridKeyboardnavGuide',
            additionalFiles: [
                '/src/app/data/customers.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'RemotePagingDefaultTemplateComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remotePaging.service.ts'],
            appConfig: BaseAppConfig
        }));

        // Grid Batch Editing with remote paging
        configs.push(new Config({
            component: 'RemotePagingBatchEditingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/foods.ts', '/src/app/services/remotePagingWithBatchEditing.service.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'RemotePagingDefaultTemplateComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remotePaging.service.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridExternalOutletComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridSortingIndicatorsComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/financialData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridExportVisualizationComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridAddRowSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridEditingLifecycleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridSelectComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/grid/grid-select/data.ts', '/src/app/grid/grid-select/characters.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridFormattedFilteringStrategyComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridSummaryFormatterComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'CRUDSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/crud.service.ts',
                '/src/app/data/invoiceData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridRowClassesComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridRowStylesComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/financial.service.ts', '/src/app/data/financialData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridValidatorServiceComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/employeesData.ts'

            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridColumnAutosizingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/customers.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridValidatorServiceCrossFieldComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/employeesData.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridValidationStyleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridValidatorServiceExtendedComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/employeesData.ts'

            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridSummaryExportComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridStatePersistenceSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts', '/src/app/services/financial.service.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridCascadingCombosComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/cities15000-regions-countries.ts', '/src/app/data/data.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'GridWithRatingComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/nwindData.ts'],
            additionalDependencies: ['igniteui-webcomponents'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'RatingInFormComponent',
            additionalFiles: [],
            additionalDependencies: ['igniteui-webcomponents'],
            appConfig: BaseAppConfig
        }));

        return configs;
    }
}
