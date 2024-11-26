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
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';
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
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridEditingSampleComponent', 'IgxDialogModule',
                    'IgxButtonModule', 'IgxCheckboxModule', 'IgxDatePickerModule', 'IgxPreventDocumentScrollDirective', 'IgxInputGroupModule'],
                ngDeclarations: ['HGridEditingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxDialogModule', 'IgxButtonModule', 'IgxCheckboxModule',
                    'IgxDatePickerModule', 'IgxInputGroupModule']
            }),
            component: 'HGridEditingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridEditingEventsComponent', 'IgxToastModule', 'IgxPreventDocumentScrollDirective', 'IgxIconModule', 'IgxInputGroupModule'],
                ngDeclarations: ['HGridEditingEventsComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxToastModule', 'IgxIconModule', 'IgxInputGroupModule']
            }),
            component: 'HGridEditingEventsComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridRowEditingSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridRowEditingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridRowEditingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridRowEditStyleComponent', 'IgxIconModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridRowEditStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxIconModule']
            }),
            component: 'HGridRowEditStyleComponent'

        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridEditingStyleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridEditingStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridEditingStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridBatchEditingSampleComponent',
                    'IgxButtonModule', 'IgxCheckboxModule',
                    'IgxDatePickerModule', 'IgxGridModule', 'IgxDialogModule', 'IgxPreventDocumentScrollDirective','IgxInputGroupModule'],
                ngDeclarations: ['HGridBatchEditingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxButtonModule', 'IgxCheckboxModule',
                    'IgxDatePickerModule', 'IgxGridModule', 'IgxDialogModule', 'IgxInputGroupModule']
            }),
            component: 'HGridBatchEditingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HierarchicalGridFilteringStyleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HierarchicalGridFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HierarchicalGridFilteringStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridFilteringSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridFilteringSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridFilteringTemplateSampleComponent', 'IgxInputGroupModule', 'IgxDatePickerModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridFilteringTemplateSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxInputGroupModule', 'IgxDatePickerModule']
            }),
            component: 'HGridFilteringTemplateSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridExcelStyleFilteringSample1Component', 'IgxButtonGroupModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridExcelStyleFilteringSample1Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxButtonGroupModule']
            }),
            component: 'HGridExcelStyleFilteringSample1Component'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridExcelStyleFilteringSample2Component', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridExcelStyleFilteringSample2Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridExcelStyleFilteringSample2Component'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridExcelStyleFilteringSample3Component', 'IgxPreventDocumentScrollDirective', 'IgxIconModule'],
                ngDeclarations: ['HGridExcelStyleFilteringSample3Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxIconModule']
            }),
            component: 'HGridExcelStyleFilteringSample3Component'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridExcelStyleFilteringStyleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridExcelStyleFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridExcelStyleFilteringStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridExternalExcelStyleFilteringComponent', 'IgxSelectModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridExternalExcelStyleFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxSelectModule']
            }),
            component: 'HGridExternalExcelStyleFilteringComponent'
        }));

        configs.push(new Config({
            component: 'HGridExcelExportSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/artistData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridExcelExportSampleComponent', 'IgxHierarchicalGridModule', 'IgxPreventDocumentScrollDirective', 'IgxExcelExporterService'],
                ngDeclarations: ['HGridExcelExportSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule'],
                ngProviders: ['IgxExcelExporterService']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridExternalAdvancedFilteringComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridExternalAdvancedFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridExternalAdvancedFilteringComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridCustomFilteringSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridCustomFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridCustomFilteringSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts',
                '/src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component.ts',
                '/src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component.scss',
                '/src/app/hierarchical-grid/hierarchical-grid-sorting/hgrid-contextmenu/hgrid-contextmenu.component.html'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridSortingSampleComponent', 'HGridContextmenuComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridSortingSampleComponent', 'HGridContextmenuComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridSortingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridSortingStylingComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridSortingStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridSortingStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridSelectionSampleComponent', 'IgxSwitchModule',
                    'IgxSnackbarModule', 'IgxButtonGroupModule', 'IgxPreventDocumentScrollDirective', 'IgxIconModule'],
                ngDeclarations: ['HGridSelectionSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxSwitchModule', 'IgxSnackbarModule', 'IgxButtonGroupModule', 'IgxIconModule']
            }),
            component: 'HGridSelectionSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridSummaryStylingComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridSummaryStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridSummaryStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridSummarySampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridSummarySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridSummarySampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridPagingSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridPagingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridPagingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/hierarchical-grid/hierarchical-grid-paging/remotePagingService.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridRemotePagingSampleComponent', 'HttpClientModule', 'IgxSelectModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridRemotePagingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'HttpClientModule', 'IgxSelectModule']
            }),
            component: 'HGridRemotePagingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridDisplayDensitySampleComponent', 'IgxPreventDocumentScrollDirective', 'IgxButtonGroupModule'],
                ngDeclarations: ['HGridDisplayDensitySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxButtonGroupModule']
            }),
            component: 'HGridDisplayDensitySampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridColumnMovingSampleStyledComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridColumnMovingSampleStyledComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridColumnMovingSampleStyledComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridColumnMovingSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridColumnMovingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridColumnMovingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts', '/src/app/services/svgIcons.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridPinningSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridPinningSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridPinningSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridToolbarPinningComponent', 'IgxPreventDocumentScrollDirective', 'RouterModule'],
                ngDeclarations: ['HGridToolbarPinningComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'RouterModule', 'RouterModule.forRoot([])']
            }),
            component: 'HGridToolbarPinningComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridResizeLineStylingComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridResizeLineStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridResizeLineStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridColumnHidingSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridColumnHidingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridColumnHidingSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HierarchicalGridColumnHidingToolbarStyleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HierarchicalGridColumnHidingToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HierarchicalGridColumnHidingToolbarStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridCostumHidingSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridCostumHidingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridCostumHidingSampleComponent'
        }));

        // HGrid Multi Cell Selection Styling
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridMultiCellStyleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridMultiCellStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridMultiCellStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridMultiHeadersSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridMultiHeadersSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridMultiHeadersSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridMultiHeadersStylingComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridMultiHeadersStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridMultiHeadersStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridMultiColumnHeadersExportComponent', 'IgxPreventDocumentScrollDirective', 'IgxExcelExporterService'],
                ngDeclarations: ['HGridMultiColumnHeadersExportComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule'],
                ngProviders: ['IgxExcelExporterService']
            }),
            component: 'HGridMultiColumnHeadersExportComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridToolbarTitleSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridToolbarTitleSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridToolbarTitleSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridToolbarOptionsSampleComponent', 'IgxPreventDocumentScrollDirective', 'IgxSwitchModule', 'IgxInputGroupModule'],
                ngDeclarations: ['HGridToolbarOptionsSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxSwitchModule', 'IgxInputGroupModule']
            }),
            component: 'HGridToolbarOptionsSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridToolbarCustomSampleComponent', 'IgxButtonModule', 'IgxPreventDocumentScrollDirective', 'IgxIconModule'],
                ngDeclarations: ['HGridToolbarCustomSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxButtonModule', 'IgxIconModule']
            }),
            component: 'HGridToolbarCustomSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HierarchicalGridToolbarStyleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HierarchicalGridToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HierarchicalGridToolbarStyleComponent'
        }));

        // Hierarchical Grid Load on Demand Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remote-lod.service.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HierarchicalGridLoDSampleComponent', 'RemoteLoDService', 'HttpClientModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HierarchicalGridLoDSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'HttpClientModule'],
                ngProviders: ['RemoteLoDService']
            }),
            component: 'HierarchicalGridLoDSampleComponent'
        }));

        // Hierarchical Grid Excel Style Filtering Load On Demand Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/services/remoteValues.service.ts',
                '/src/app/data/singersData.ts', '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HierarchicalGridExcelStyleFilteringLoadOnDemandComponent', 'RemoteValuesService', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HierarchicalGridExcelStyleFilteringLoadOnDemandComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule'],
                ngProviders: ['RemoteValuesService']
            }),
            component: 'HierarchicalGridExcelStyleFilteringLoadOnDemandComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/files.data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridDragSampleComponent', 'IgxDragDropModule', 'IgxIconModule', 'IgxButtonModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridDragSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxDragDropModule', 'IgxIconModule', 'IgxButtonModule']
            }),
            component: 'HGridDragSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/files.data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridRowDragBaseComponent', 'IgxDragDropModule', 'IgxButtonModule', 'IgxPreventDocumentScrollDirective', 'IgxIconModule'],
                ngDeclarations: ['HGridRowDragBaseComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxDragDropModule', 'IgxButtonModule', 'IgxIconModule']
            }),
            component: 'HGridRowDragBaseComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/utils.ts',
                '/src/app/data/files.data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridMultiRowDragComponent', 'IgxDragDropModule', 'IgxButtonModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridMultiRowDragComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxDragDropModule', 'IgxButtonModule']
            }),
            component: 'HGridMultiRowDragComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridCustomKBNavigationComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridCustomKBNavigationComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridCustomKBNavigationComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/data/files.data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'IgxDragDropModule', 'HGridRowReorderComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridRowReorderComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxDragDropModule']
            }),
            component: 'HGridRowReorderComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridPagingStyleSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridPagingStyleSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridPagingStyleSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridMultiHeaderTemplateSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridMultiHeaderTemplateSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridMultiHeaderTemplateSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridStylingComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridStylingComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridAdvancedFilteringSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridAdvancedFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridAdvancedFilteringSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridAdvancedFilteringStyleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridAdvancedFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridAdvancedFilteringStyleComponent'
        }));

        configs.push(new Config({
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridConditionalRowSelectorsComponent', 'IgxCheckboxModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridConditionalRowSelectorsComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxCheckboxModule']
            }),
            component: 'HGridConditionalRowSelectorsComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCheckboxModule', 'IgxHierarchicalGridModule', 'HGridSelectionTemplateNumbersSampleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridSelectionTemplateNumbersSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxCheckboxModule', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridSelectionTemplateNumbersSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'IgxTooltipModule', 'HGridCollapsibleColumnGroupComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridCollapsibleColumnGroupComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxTooltipModule']
            }),
            component: 'HGridCollapsibleColumnGroupComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridAllDataSummaryComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridAllDataSummaryComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridAllDataSummaryComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridSummaryTemplateComponent', 'IgxInputGroupModule',
                    'IgxButtonGroupModule', 'IgxSwitchModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridSummaryTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxInputGroupModule',
                    'IgxButtonGroupModule', 'IgxSwitchModule']
            }),
            component: 'HGridSummaryTemplateComponent'
        }));

        configs.push(new Config({
            additionalFiles: [
                '/src/app/data/employeesData.ts',
                '/src/app/data/athletesData.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['HierarchicalGridRightPinningSampleComponent', 'IgxHierarchicalGridModule', 'IgxAvatarModule', 'IgxTooltipModule'],
                ngDeclarations: ['HierarchicalGridRightPinningSampleComponent'],
                ngImports: ['IgxHierarchicalGridModule', 'IgxAvatarModule', 'IgxTooltipModule'],
                ngProviders: []
            }),
            component: 'HierarchicalGridRightPinningSampleComponent'
        }));

        configs.push(new Config({
            component: 'HierarchicalGridColumnSelectionComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['HierarchicalGridColumnSelectionComponent', 'IgxHierarchicalGridModule', 'IgxPreventDocumentScrollDirective', 'IgxSelectModule'],
                ngDeclarations: ['HierarchicalGridColumnSelectionComponent'],
                ngImports: ['IgxHierarchicalGridModule', 'IgxPreventDocumentScrollDirective', 'IgxSelectModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'HierarchicalGridColumnGroupSelectionComponent',
            additionalFiles: [
                '/src/app/data/hierarchical-data.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['HierarchicalGridColumnGroupSelectionComponent', 'IgxHierarchicalGridModule'],
                ngDeclarations: ['HierarchicalGridColumnGroupSelectionComponent'],
                ngImports: ['IgxHierarchicalGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'HGridColumnSelectionStylesComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridColumnSelectionStylesComponent', 'IgxHierarchicalGridModule'],
                ngDeclarations: ['HGridColumnSelectionStylesComponent'],
                ngImports: ['IgxHierarchicalGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'HGridRowPinningExtraColumnSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/services/svgIcons.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridRowPinningExtraColumnSampleComponent', 'IgxHierarchicalGridModule', 'IgxIconModule', 'IgxPreventDocumentScrollDirective',
                    'IgxSwitchModule'],
                ngDeclarations: ['HGridRowPinningExtraColumnSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxIconModule', 'IgxSwitchModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'HGridRowPinningSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/services/svgIcons.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridRowPinningSampleComponent', 'IgxHierarchicalGridModule', 'IgxActionStripModule', 'IgxPreventDocumentScrollDirective',
                    'IgxSwitchModule'],
                ngDeclarations: ['HGridRowPinningSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxActionStripModule', 'IgxHierarchicalGridModule', 'IgxSwitchModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'HGridRowPinningStylingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts', '/src/app/services/svgIcons.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridRowPinningStylingSampleComponent', 'IgxHierarchicalGridModule', 'IgxActionStripModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridRowPinningStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxActionStripModule', 'IgxHierarchicalGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'HGridKeyboardnavGuide',
            additionalFiles: [
                '/src/app/data/hierarchical-data.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridKeyboardnavGuide', 'IgxHierarchicalGridModule', 'IgxListModule', 'IgxOverlayService'],
                ngDeclarations: ['HGridKeyboardnavGuide'],
                ngImports: ['IgxHierarchicalGridModule', 'IgxListModule'],
                ngProviders: ['IgxOverlayService']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/hierarchical-grid/hierarchical-grid-remote-paging-default-template/remotePagingService.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridRemotePagingDefaultTemplateComponent', 'HttpClientModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridRemotePagingDefaultTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'HttpClientModule']
            }),
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
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'IgxCheckboxModule', 'HGridSaveStateComponent', 'IgxIconModule', 'IgxButtonModule', 'HGridAboutComponent', 'IgxPreventDocumentScrollDirective', 'Router', 'RouterModule'],
                ngDeclarations: ['HGridSaveStateComponent', 'HGridAboutComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxCheckboxModule', 'IgxIconModule', 'IgxButtonModule',
                    'RouterModule.forRoot([\{component: HGridAboutComponent, path: \'hGrid-state-about\'},\{component: HGridSaveStateComponent, path: \'hGrid-state\'},\{ path: \'\', redirectTo: \'/hGrid-state\', pathMatch: \'full\' }])']
            }),
            component: 'HGridSaveStateComponent'
        });
        hGridSaveStateSampleConfig.usesRouting = true;
        configs.push(hGridSaveStateSampleConfig);

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HierarchicalGridExternalOutletComponent', 'IgxHierarchicalGridModule', 'IgxToggleModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HierarchicalGridExternalOutletComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxToggleModule']
            }),
            component: 'HierarchicalGridExternalOutletComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HierarchicalGridCellSelectionComponent', 'IgxSnackbarModule',
                    'IgxButtonModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HierarchicalGridCellSelectionComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxSnackbarModule', 'IgxButtonModule', 'IgxButtonGroupModule', 'IgxIconModule']
            }),
            component: 'HierarchicalGridCellSelectionComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'IgxPreventDocumentScrollDirective', 'HGridEditingLifecycleComponent', 'IgxSwitchModule', 'IgxIconModule', 'IgxButtonModule'],
                ngDeclarations: ['HGridEditingLifecycleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxSwitchModule', 'IgxIconModule', 'IgxButtonModule'],
                ngProviders: []
            }),
            component: 'HGridEditingLifecycleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridAddRowSampleComponent', 'IgxDialogModule',
                    'IgxButtonModule', 'IgxCheckboxModule', 'IgxDatePickerModule', 'IgxPreventDocumentScrollDirective',
                    'IgxActionStripModule'],
                ngDeclarations: ['HGridAddRowSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxDialogModule', 'IgxButtonModule', 'IgxCheckboxModule',
                    'IgxDatePickerModule', 'IgxActionStripModule']
            }),
            component: 'HGridAddRowSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts', '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridFormattedFilteringStrategyComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridFormattedFilteringStrategyComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridFormattedFilteringStrategyComponent'
        }));

        configs.push(new Config({
            component: 'HGridSummaryFormatterComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridSummaryFormatterComponent', 'IgxHierarchicalGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridSummaryFormatterComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule',
                    'HierarchicalGridPagerSampleComponent', 'IgxButtonModule', 'IgxIconModule', 'IgxSwitchModule'],
                ngDeclarations: ['HierarchicalGridPagerSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule',
                    'IgxButtonModule', 'IgxIconModule', 'IgxSwitchModule']
            }),
            component: 'HierarchicalGridPagerSampleComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            component: 'HGridRowClassesSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxIconModule', 'IgxButtonModule', 'HGridRowClassesSampleComponent'],
                ngDeclarations: ['HGridRowClassesSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxIconModule', 'IgxButtonModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            component: 'HGridRowStylesSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxIconModule', 'IgxButtonModule', 'HGridRowStylesSampleComponent'],
                ngDeclarations: ['HGridRowStylesSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxIconModule', 'IgxButtonModule']
            })
        }));

        configs.push(new Config({
            component: 'HGridActionStripSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['HGridActionStripSampleComponent', 'IgxHierarchicalGridModule', 'IgxDialogModule', 'IgxButtonModule', 'IgxPreventDocumentScrollDirective', 'IgxActionStripModule'],
                ngDeclarations: ['HGridActionStripSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxDialogModule', 'IgxButtonModule', 'IgxActionStripModule']
            })
        }));

        configs.push(new Config({
            component: 'HierarchicalGridValidatorServiceComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/hierarchical-data.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['HierarchicalGridValidatorServiceComponent', 'IgxHierarchicalGridModule', 'IgxPreventDocumentScrollDirective', 'IgxSwitchModule'],
                ngDeclarations: ['HierarchicalGridValidatorServiceComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxSwitchModule']
            })
        }));


        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/hierarchical-data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'HGridColumnAutoSizingSampleComponent'],
                ngDeclarations: ['HGridColumnAutoSizingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule'],
            }),
            component: 'HGridColumnAutoSizingSampleComponent'
        }));


        configs.push(new Config({
            component: 'HierarchicalGridValidatorServiceCrossCellComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/hierarchical-data.ts'

            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['HierarchicalGridValidatorServiceCrossCellComponent', 'IgxHierarchicalGridModule', 'IgxTooltipModule', 'ReactiveFormsModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HierarchicalGridValidatorServiceCrossCellComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule', 'IgxTooltipModule', 'ReactiveFormsModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridValidationStyleComponent', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HGridValidationStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            }),
            component: 'HGridValidationStyleComponent'
        }));

        configs.push(new Config({
            component: 'HierarchicalGridValidatorServiceExtendedComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/hierarchical-data.ts'

            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['HierarchicalGridValidatorServiceExtendedComponent', 'IgxHierarchicalGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['HierarchicalGridValidatorServiceExtendedComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/singersData.ts',
                '/src/app/hierarchical-grid/models.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxHierarchicalGridModule', 'HGridSummaryExportComponent', 'IgxPreventDocumentScrollDirective', 'IgxExcelExporterService'],
                ngDeclarations: ['HGridSummaryExportComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxHierarchicalGridModule'],
                ngProviders: ['IgxExcelExporterService']
            }),
            component: 'HGridSummaryExportComponent'
        }));

        return configs;
    }
}
