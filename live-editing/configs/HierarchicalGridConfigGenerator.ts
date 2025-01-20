/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
    IgxActionStripModule,
    IgxAvatarModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxDragDropModule,
    IgxGridModule,
    IgxHierarchicalGridAPIService,
    IgxHierarchicalGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxOverlayService,
    IgxSelectModule,
    IgxSnackbarModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxTooltipModule,
    IgxToggleModule,
    IgxExcelExporterService
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';;
import { Router, RouterModule } from '@angular/router';
export class HierarchicalGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollDirective: '../../src/app/directives/prevent-scroll.directive',
        RemoteValuesService: '../../src/app/services/remoteValues.service',
        HGridContextmenuComponent: '../../src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component',
        RemoteLoDService: '../../src/app/services/remote-lod.service'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridEditingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridEditingEventsComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridRowEditingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/hierarchical-grid/hierarchical-grid-row-edit-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridRowEditStyleComponent', 'IgxIconModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridRowEditStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule', 'IgxIconModule']
            }),
            component: 'HGridRowEditStyleComponent'

        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/hierarchical-grid/hierarchical-grid-editing-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridEditingStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridEditingStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridEditingStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridBatchEditingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/hierarchical-grid/hierarchical-grid-filtering-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HierarchicalGridFilteringStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HierarchicalGridFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HierarchicalGridFilteringStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridFilteringSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridFilteringTemplateSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridExcelStyleFilteringSample1Component'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridExcelStyleFilteringSample2Component'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridExcelStyleFilteringSample3Component'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/hierarchical-grid/hierarchical-grid-excel-style-filtering-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridExcelStyleFilteringStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridExcelStyleFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridExcelStyleFilteringStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridExternalExcelStyleFilteringComponent'
        }));

        configs.push(new Config({
            component: 'HGridExcelExportSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/artistData.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridExternalAdvancedFilteringComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridCustomFilteringSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts',
                '/src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component.ts',
                '/src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component.scss',
                '/src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component.html'],
            appConfig: BaseAppConfig,
            component: 'HGridSortingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/hierarchical-grid/hierarchical-grid-sorting-styling/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridSortingStylingComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridSortingStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridSortingStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridSelectionSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/hierarchical-grid/hierarchical-grid-summary-styling/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridSummaryStylingComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridSummaryStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridSummaryStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridSummarySampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridPagingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/hierarchical-grid/hierarchical-grid-paging/remotePagingService.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridRemotePagingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridDisplayDensitySampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts', '/src/app/hierarchical-grid/hierarchical-grid-column-moving-styled/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridColumnMovingSampleStyledComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridColumnMovingSampleStyledComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridColumnMovingSampleStyledComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridColumnMovingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts', '/src/app/services/svgIcons.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridPinningSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridToolbarPinningComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/hierarchical-grid/hierarchical-grid-column-moving-styled/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridResizeLineStylingComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridResizeLineStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridResizeLineStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridColumnHidingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/hierarchical-grid/hierarchical-grid-column-hiding-toolbar-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HierarchicalGridColumnHidingToolbarStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HierarchicalGridColumnHidingToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HierarchicalGridColumnHidingToolbarStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridCostumHidingSampleComponent'
        }));

        // HGrid Multi Cell Selection Styling
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts', '/src/app/hierarchical-grid/hierarchical-grid-multi-cell-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridMultiCellStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridMultiCellStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridMultiCellStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridMultiHeadersSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts', '/src/app/hierarchical-grid/hierarchical-grid-multi-column-headers-styling/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridMultiHeadersStylingComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridMultiHeadersStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridMultiHeadersStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridMultiColumnHeadersExportComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridToolbarTitleSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridToolbarOptionsSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridToolbarCustomSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/hierarchical-grid/hierarchical-grid-toolbar-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HierarchicalGridToolbarStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HierarchicalGridToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HierarchicalGridToolbarStyleComponent'
        }));

        // Hierarchical Grid Load on Demand Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remote-lod.service.ts'],
            appConfig: BaseAppConfig,
            component: 'HierarchicalGridLoDSampleComponent'
        }));

        // Hierarchical Grid Excel Style Filtering Load On Demand Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remoteValues.service.ts',
                '/src/app/data/singersData.ts', '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HierarchicalGridExcelStyleFilteringLoadOnDemandComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/files.data.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridDragSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/files.data.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridRowDragBaseComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/utils.ts',
                '/src/app/data/files.data.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridMultiRowDragComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridCustomKBNavigationComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/files.data.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridRowReorderComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/hierarchical-grid/hierarchical-grid-paging-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridPagingStyleSampleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridPagingStyleSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridPagingStyleSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridMultiHeaderTemplateSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/hierarchical-grid/hierarchical-grid-styling/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridStylingComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridAdvancedFilteringSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridAdvancedFilteringStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'
            ],
            appConfig: BaseAppConfig,
            component: 'HGridConditionalRowSelectorsComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridSelectionTemplateNumbersSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridCollapsibleColumnGroupComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridAllDataSummaryComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridSummaryTemplateComponent'
        }));

        configs.push(new Config({
            additionalFiles: [
                '/src/app/data/employeesData.ts',
                '/src/app/data/athletesData.ts'
            ],
            appConfig: BaseAppConfig,
            component: 'HierarchicalGridRightPinningSampleComponent'
        }));

        configs.push(new Config({
            component: 'HierarchicalGridColumnSelectionComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'HierarchicalGridColumnGroupSelectionComponent',
            additionalFiles: [
                '/src/app/data/hierarchical-data.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'HGridColumnSelectionStylesComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts',
                '/src/app/hierarchical-grid/column-selection-styles/layout.scss'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridColumnSelectionStylesComponent', 'IgxHierarchicalGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridColumnSelectionStylesComponent'],
                ngImports: ['IgxHierarchicalGridModule', 'IgxPreventDocumentScrollModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'HGridRowPinningExtraColumnSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/services/svgIcons.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'HGridRowPinningSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/services/svgIcons.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'HGridRowPinningStylingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/services/svgIcons.ts', '/src/app/hierarchical-grid/hierarchical-grid-row-pinning-styling/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridRowPinningStylingSampleComponent', 'IgxHierarchicalGridModule', 'IgxActionStripModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridRowPinningStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxActionStripModule', 'IgxHierarchicalGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'HGridKeyboardnavGuide',
            additionalFiles: [
                '/src/app/data/hierarchical-data.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/hierarchical-grid/hierarchical-grid-remote-paging-default-template/remotePagingService.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridRemotePagingDefaultTemplateComponent'
        }));

        const hGridSaveStateSampleConfig = new Config({
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts',
                '/src/app/hierarchical-grid/hierarchical-grid-save-state/about.component.ts',
                '/src/app/hierarchical-grid/hierarchical-grid-save-state/about.component.html'
            ],
            appConfig: BaseAppConfig,
            component: 'HGridSaveStateComponent'
        });
        hGridSaveStateSampleConfig.usesRouting = true;
        configs.push(hGridSaveStateSampleConfig);

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HierarchicalGridExternalOutletComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HierarchicalGridCellSelectionComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridEditingLifecycleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridAddRowSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts', '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridFormattedFilteringStrategyComponent'
        }));

        configs.push(new Config({
            component: 'HGridSummaryFormatterComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HierarchicalGridPagerSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            component: 'HGridRowClassesSampleComponent',
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            component: 'HGridRowStylesSampleComponent',
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'HGridActionStripSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'HierarchicalGridValidatorServiceComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/hierarchical-data.ts'
            ],
            appConfig: BaseAppConfig
        }));


        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridColumnAutoSizingSampleComponent'
        }));


        configs.push(new Config({
            component: 'HierarchicalGridValidatorServiceCrossCellComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/hierarchical-data.ts'

            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/hierarchical-grid/hierarchical-grid-validation-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridValidationStyleComponent', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['HGridValidationStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridValidationStyleComponent'
        }));

        configs.push(new Config({
            component: 'HierarchicalGridValidatorServiceExtendedComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/hierarchical-data.ts'

            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appConfig: BaseAppConfig,
            component: 'HGridSummaryExportComponent'
        }));

        return configs;
    }
}
