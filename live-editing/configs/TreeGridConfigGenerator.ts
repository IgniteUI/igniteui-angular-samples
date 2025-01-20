/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import {
    IgxActionStripModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxChipsModule,
    IgxCsvExporterService,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxDragDropModule,
    IgxExcelExporterService,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxListModule,
    IgxOverlayService,
    IgxRadioModule,
    IgxRippleModule,
    IgxSelectModule,
    IgxSimpleComboModule,
    IgxSnackbarModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxTooltipModule,
    IgxTreeGridModule,
    IgxToggleModule
} from 'igniteui-angular';
import {
    IgxSparklineCoreModule,
    IgxSparklineModule
} from 'igniteui-angular-charts';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';;
export class TreeGridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        IgxPreventDocumentScrollDirective: '../../src/app/directives/prevent-scroll.directive',
        RemoteValuesService: '../../src/app/tree-grid/tree-grid-excel-style-filtering-load-on-demand/remoteValues.service',
        TreeGridContextmenuComponent: '../../src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // TreeGrid Row Edit Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridRowEditSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Row Edit Style
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/tree-grid/tree-grid-row-edit-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridRowEditStyleComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridRowEditStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridRowEditStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Virtualization sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridVirtualizationSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Conditional Cell Style sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridConditionalCellStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Batch Editing sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/utils.ts',
                '/src/app/tree-grid/data/employees-flat.ts'
            ],
            appConfig: BaseAppConfig,
            component: 'TreeGridBatchEditingSampleComponent'
        }));

        // TreeGrid Search sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridSearchSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Hiding sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridColumnHidingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Hiding Toolbar sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridColumnHidingToolbarSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Hiding Toolbar style sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts', '/src/app/tree-grid/tree-grid-column-hiding-toolbar-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridColumnHidingToolbarStyleComponent'],
                ngDeclarations: ['TreeGridColumnHidingToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridColumnHidingToolbarStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Selection sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridSelectionSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Sorting sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts',
                '/src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component.html',
                '/src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component.ts',
                '/src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component.scss'],
            appConfig: BaseAppConfig,
            component: 'TreeGridSortingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Sorting Styling sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts', '/src/app/tree-grid/tree-grid-sorting-styling/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridSortingStylingComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridSortingStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridSortingStylingComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Moving sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridColumnMovingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts', '/src/app/tree-grid/tree-grid-column-moving-styled-sample/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridColumnMovingStyledSampleComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridColumnMovingStyledSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridColumnMovingStyledSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Pinning sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts', '/src/app/services/svgIcons.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridColumnPinningSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar Pinning sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridPinningToolbarSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Resizing sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridColumnResizingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        //TreeGrid Column Autosizing sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridColumnAutoSizingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Resizing Line Styling sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts', '/src/app/tree-grid/tree-grid-resize-line-styling-sample/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridResizeLineStylingSampleComponent'],
                ngDeclarations: ['TreeGridResizeLineStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridResizeLineStylingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Filtering Style sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts', '/src/app/tree-grid/tree-grid-filtering-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridFilteringStyleComponent'],
                ngDeclarations: ['TreeGridFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridFilteringStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Filtering sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridFilteringSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridFilteringTemplateSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts', ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridExcelStyleFilteringSample1Component', 'IgxInputGroupModule', 'IgxButtonGroupModule'],
                ngDeclarations: ['TreeGridExcelStyleFilteringSample1Component'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxInputGroupModule', 'IgxButtonGroupModule']
            }),
            component: 'TreeGridExcelStyleFilteringSample1Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridExcelStyleFilteringSample2Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridExcelStyleFilteringSample3Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts', '/src/app/tree-grid/tree-grid-excel-style-filtering-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridExcelStyleFilteringStyleComponent'],
                ngDeclarations: ['TreeGridExcelStyleFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridExcelStyleFilteringStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Custom Filtering sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridFilteringCustomSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Multi Column Headers sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridMultiColumnHeadersSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Multi Column Headers Styling
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts', '/src/app/tree-grid/tree-grid-multi-column-headers-styling/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridMultiColumnHeadersStylingComponent', 'IgxButtonModule'],
                ngDeclarations: ['TreeGridMultiColumnHeadersStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonModule']
            }),
            component: 'TreeGridMultiColumnHeadersStylingComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Multi Column Headers Export
        configs.push(new Config({
            component: 'TreeGridMultiColumnHeadersExportComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appConfig: BaseAppConfig
        }));

        // TreeGrid Display Density sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridDisplaydensitySampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar sample 1
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridToolbarSample1Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar sample 2
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridToolbarSample2Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar sample 3
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridToolbarSample3Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar sample 4
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridToolbarSample4Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar style sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts', '/src/app/tree-grid/tree-grid-toolbar-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridToolbarStyleComponent', 'IgxAvatarModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService'],
                ngDeclarations: ['TreeGridToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxAvatarModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            }),
            component: 'TreeGridToolbarStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Summary sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridSummarySampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Summary Styling sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts', '/src/app/tree-grid/tree-grid-summary-styling/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridSummaryStylingComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridSummaryStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridSummaryStylingComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Summary2 sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridSummary2SampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Paging sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridPagingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Reusable Paginator sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridPagerSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Editing sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/tree-grid/tree-grid-editing-sample/employee.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridEditingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridEditingEventsComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/tree-grid/tree-grid-editing-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridEditingStyleComponent'],
                ngDeclarations: ['TreeGridEditingStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridEditingStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridExternalExcelStyleFilteringComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridExternalAdvancedFilteringComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Remote Filtering sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/tree-grid/services/remoteFilteringService.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridRemoteFilteringSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid multi cell selection
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridMultiCellSelectionComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid multi cell selection - styling
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts', '/src/app/tree-grid/tree-grid-multi-cell-selection-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'TreeGridMultiCellSelectionStyleComponent', 'IgxTreeGridModule'],
                ngDeclarations: ['TreeGridMultiCellSelectionStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridMultiCellSelectionStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Load On Demand Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-load-on-demand-sample/remoteService.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridLoadOnDemandSampleComponent'
        }));

        // TreeGrid Group By Load On Demand Sample
        configs.push(new Config({
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/tree-grid/tree-grid-group-by-load-on-demand-sample/remoteService.ts',
                '/src/app/data/invoiceData.ts',
                '/src/_variables.scss',
                '/src/_app-layout.scss'
            ],
            appConfig: BaseAppConfig,
            component: 'TreeGridGroupByLoadOnDemandComponent'
        }));

        // TreeGrid Excel Style Filtering Load On Demand Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-excel-style-filtering-load-on-demand/remoteValues.service.ts',
                '/src/app/tree-grid/data/employees-flat.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridExcelStyleFilteringLoadOnDemandComponent'
        }));

        // Tree Grid Row Drag - Advanced Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridRowDragComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // Tree Grid Row Drag - Base Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridRowDragBaseComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // Tree Grid Multi Row Drag sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridMultiRowDragComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // Tree Grid Row Rerdering sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridRowReorderComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // Tree Grid Keyboard Navigation Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-keyboard-navigation/data.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridKBNavigationComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // Tree Grid Remote Paging Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-remote-paging-sample/remotePagingService.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridRemotePagingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Paging sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts', '/src/app/tree-grid/tree-grid-paging-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridPagingStyleSampleComponent', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule'],
                ngDeclarations: ['TreeGridPagingStyleSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule']
            }),
            component: 'TreeGridPagingStyleSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Multi Column Header Template sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridMultiColumnHeaderTemplateSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Clipboard actions sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-clipboard-operations-sample/data.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridClipboardSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));
        // Tree Grid cell selection sample
        configs.push(new Config({
            component: 'TreeGridCellSelectionComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appConfig: BaseAppConfig
        }));

        // TreeGrid Advanced Filtering sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridAdvancedFilteringSampleComponent'
        }));

        // TreeGrid Advanced Filtering Style sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridAdvancedFilteringStyleComponent'
        }));

        // TreeGrid Conditional Row Selection Template actions sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridConditionalRowSelectorsSampleComponent'
        }));

        // TreeGrid Row Selectors Template - Numbers
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/tree-grid/data/employees-flat.ts'
            ],
            appConfig: BaseAppConfig,
            component: 'TreeGridSelectionTemplateNumbersSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts', '/src/app/tree-grid/tree-grid-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridStyleComponent', 'IgxAvatarModule'],
                ngDeclarations: ['TreeGridStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'IgxAvatarModule']
            }),
            component: 'TreeGridStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid cellStyles
        configs.push(new Config({
            component: 'TreeGridConditionalCellStyle2Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridMultiCollapsibleColumnGroupsComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/tree-grid/data/employees-flat.ts'
            ],
            appConfig: BaseAppConfig,
            component: 'TreeGridAllDataSummaryComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/tree-grid/data/employees-flat.ts'
            ],
            appConfig: BaseAppConfig,
            component: 'TreeGridSummaryTemplateComponent'
        }));

        configs.push(new Config({
            additionalFiles: [
                '/src/app/data/athletesData.ts',
                '/src/app/tree-grid/data/employees-flat-detailed.ts'
            ],
            appConfig: BaseAppConfig,
            component: 'TreeGridRightPinningSampleComponent'
        }));

        configs.push(new Config({
            component: 'TreeGridColumnSelectionComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'TreeGridColumnGroupSelectionComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/tree-grid/data/employees-flat-detailed.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'TreeGridColumnSelectionStylesComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts', '/src/app/tree-grid/column-selection-styles/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridColumnSelectionStylesComponent', 'IgxTreeGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['TreeGridColumnSelectionStylesComponent'],
                ngImports: ['IgxTreeGridModule', 'IgxPreventDocumentScrollModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'TreeGridRowPinningSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'TreeGridRowPinningExtraColumnSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/services/svgIcons.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'TreeGridRowPinningStylingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/tree-grid/tree-grid-row-pinning-styling/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridRowPinningStylingSampleComponent', 'IgxActionStripModule', 'IgxTreeGridModule', 'IgxPreventDocumentScrollModule'],
                ngDeclarations: ['TreeGridRowPinningStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxActionStripModule', 'IgxTreeGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'TGridKeyboardnavGuide',
            additionalFiles: [
                '/src/app/tree-grid/data/employees-flat-detailed.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-remote-paging-default-template/remotePagingService.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridRemotePagingDefaultTemplateComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        const treeGridSaveStateSampleConfig = new Config({
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/tree-grid/tree-grid-save-state/data.ts',
                '/src/app/tree-grid/tree-grid-save-state/about.component.ts',
                '/src/app/tree-grid/tree-grid-save-state/about.component.html'],
            appConfig: BaseAppConfig,
            component: 'TGridSaveStateComponent',
            shortenComponentPathBy: '/tree-grid/'
        });
        treeGridSaveStateSampleConfig.usesRouting = true;
        configs.push(treeGridSaveStateSampleConfig);

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridExternalOutletComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridExportVisualizationComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appConfig: BaseAppConfig,
            component: 'TGridEditingLifecycleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/tree-grid/tree-grid-add-row-sample/employee.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridAddRowSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridFormattedFilteringStrategyComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridTreeFilterViewComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            component: 'TreeGridSummaryFormatterComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            component: 'TreeGridRowClassesComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            component: 'TreeGridRowStylesComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appConfig: BaseAppConfig,
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            component: 'TreeGridActionStripSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts', '/src/app/data/utils.ts'],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'TreeGridValidatorServiceComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/utils.ts',
                '/src/app/tree-grid/data/employees-flat.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'TreeGridValidatorServiceCrossFieldComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/utils.ts',
                '/src/app/tree-grid/data/employees-flat-detailed.ts'
            ],
            appConfig: BaseAppConfig
        }));

        // TreeGrid Validation Style
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/tree-grid/tree-grid-validation-style/layout.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule', 'TreeGridValidationStyleComponent'],
                ngDeclarations: ['TreeGridValidationStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridValidationStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            component: 'TreeGridValidatorServiceExtendedComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/utils.ts',
                '/src/app/tree-grid/data/employees-flat.ts'
            ],
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appConfig: BaseAppConfig,
            component: 'TreeGridSummaryExportComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        return configs;
    }
}
