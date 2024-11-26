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
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing';
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
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridRowEditSampleComponent'],
                ngDeclarations: ['TreeGridRowEditSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridRowEditSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Row Edit Style
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridRowEditStyleComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridRowEditStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridRowEditStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Virtualization sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/financialData.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxBadgeModule', 'TreeGridVirtualizationSampleComponent'],
                ngDeclarations: ['TreeGridVirtualizationSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxBadgeModule']
            }),
            component: 'TreeGridVirtualizationSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Conditional Cell Style sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridConditionalCellStyleComponent'],
                ngDeclarations: ['TreeGridConditionalCellStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridConditionalCellStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Batch Editing sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/utils.ts',
                '/src/app/tree-grid/data/employees-flat.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridBatchEditingSampleComponent',
                    'IgxButtonModule', 'IgxDialogModule', 'IgxGridModule'],
                ngDeclarations: ['TreeGridBatchEditingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxDialogModule', 'IgxGridModule']
            }),
            component: 'TreeGridBatchEditingSampleComponent'
        }));

        // TreeGrid Search sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridSearchSampleComponent', 'IgxButtonModule',
                    'IgxIconModule', 'IgxInputGroupModule', 'IgxRippleModule', 'IgxChipsModule'],
                ngDeclarations: ['TreeGridSearchSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxRippleModule', 'IgxChipsModule']
            }),
            component: 'TreeGridSearchSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Hiding sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridColumnHidingSampleComponent', 'IgxRadioModule'],
                ngDeclarations: ['TreeGridColumnHidingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxRadioModule']
            }),
            component: 'TreeGridColumnHidingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Hiding Toolbar sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridColumnHidingToolbarSampleComponent'],
                ngDeclarations: ['TreeGridColumnHidingToolbarSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridColumnHidingToolbarSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Hiding Toolbar style sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridColumnHidingToolbarStyleComponent'],
                ngDeclarations: ['TreeGridColumnHidingToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridColumnHidingToolbarStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Selection sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridSelectionSampleComponent',
                    'IgxSwitchModule', 'IgxSnackbarModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxCheckboxModule'],
                ngDeclarations: ['TreeGridSelectionSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxSwitchModule', 'IgxSnackbarModule', 'IgxButtonGroupModule', 'IgxIconModule', 'IgxCheckboxModule']
            }),
            component: 'TreeGridSelectionSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Sorting sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts',
                '/src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component.html',
                '/src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component.ts',
                '/src/app/tree-grid/tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component.scss'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridSortingSampleComponent', 'IgxIconModule', 'IgxSimpleComboModule', 'IgxButtonModule', 'TreeGridContextmenuComponent'],
                ngDeclarations: ['TreeGridSortingSampleComponent', 'TreeGridContextmenuComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxIconModule', 'IgxSimpleComboModule', 'IgxButtonModule']
            }),
            component: 'TreeGridSortingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Sorting Styling sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridSortingStylingComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridSortingStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridSortingStylingComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Moving sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridColumnMovingSampleComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridColumnMovingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridColumnMovingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridColumnMovingStyledSampleComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridColumnMovingStyledSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridColumnMovingStyledSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Pinning sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts', '/src/app/services/svgIcons.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridColumnPinningSampleComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridColumnPinningSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridColumnPinningSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar Pinning sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridPinningToolbarSampleComponent', 'IgxIconModule', 'RouterModule'],
                ngDeclarations: ['TreeGridPinningToolbarSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxIconModule', 'RouterModule', 'RouterModule.forRoot([])']
            }),
            component: 'TreeGridPinningToolbarSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Resizing sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridColumnResizingSampleComponent'],
                ngDeclarations: ['TreeGridColumnResizingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridColumnResizingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        //TreeGrid Column Autosizing sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridColumnAutoSizingSampleComponent'],
                ngDeclarations: ['TreeGridColumnAutoSizingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridColumnAutoSizingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Column Resizing Line Styling sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridResizeLineStylingSampleComponent'],
                ngDeclarations: ['TreeGridResizeLineStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridResizeLineStylingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Filtering Style sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridFilteringStyleComponent'],
                ngDeclarations: ['TreeGridFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridFilteringStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Filtering sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridFilteringSampleComponent', 'IgxInputGroupModule'],
                ngDeclarations: ['TreeGridFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxInputGroupModule']
            }),
            component: 'TreeGridFilteringSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridFilteringTemplateSampleComponent', 'IgxInputGroupModule', 'IgxDatePickerModule'],
                ngDeclarations: ['TreeGridFilteringTemplateSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxInputGroupModule', 'IgxDatePickerModule']
            }),
            component: 'TreeGridFilteringTemplateSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridExcelStyleFilteringSample1Component', 'IgxInputGroupModule', 'IgxButtonGroupModule'],
                ngDeclarations: ['TreeGridExcelStyleFilteringSample1Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxInputGroupModule', 'IgxButtonGroupModule']
            }),
            component: 'TreeGridExcelStyleFilteringSample1Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridExcelStyleFilteringSample2Component', 'IgxInputGroupModule'],
                ngDeclarations: ['TreeGridExcelStyleFilteringSample2Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxInputGroupModule']
            }),
            component: 'TreeGridExcelStyleFilteringSample2Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridExcelStyleFilteringSample3Component', 'IgxInputGroupModule', 'IgxIconModule'],
                ngDeclarations: ['TreeGridExcelStyleFilteringSample3Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxInputGroupModule', 'IgxIconModule']
            }),
            component: 'TreeGridExcelStyleFilteringSample3Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridExcelStyleFilteringStyleComponent'],
                ngDeclarations: ['TreeGridExcelStyleFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridExcelStyleFilteringStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Custom Filtering sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridFilteringCustomSampleComponent', 'IgxInputGroupModule'],
                ngDeclarations: ['TreeGridFilteringCustomSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxInputGroupModule']
            }),
            component: 'TreeGridFilteringCustomSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Multi Column Headers sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridMultiColumnHeadersSampleComponent', 'IgxButtonModule'],
                ngDeclarations: ['TreeGridMultiColumnHeadersSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule']
            }),
            component: 'TreeGridMultiColumnHeadersSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Multi Column Headers Styling
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridMultiColumnHeadersStylingComponent', 'IgxButtonModule'],
                ngDeclarations: ['TreeGridMultiColumnHeadersStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule']
            }),
            component: 'TreeGridMultiColumnHeadersStylingComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Multi Column Headers Export
        configs.push(new Config({
            component: 'TreeGridMultiColumnHeadersExportComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridMultiColumnHeadersExportComponent', 'IgxTreeGridModule', 'IgxPreventDocumentScrollDirective', 'IgxExcelExporterService'],
                ngDeclarations: ['TreeGridMultiColumnHeadersExportComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule'],
                ngProviders: ['IgxExcelExporterService']
            })
        }));

        // TreeGrid Display Density sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridDisplaydensitySampleComponent', 'IgxButtonGroupModule'],
                ngDeclarations: ['TreeGridDisplaydensitySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonGroupModule']
            }),
            component: 'TreeGridDisplaydensitySampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar sample 1
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridToolbarSample1Component', 'IgxAvatarModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService', 'IgxSwitchModule', 'IgxInputGroupModule'],
                ngDeclarations: ['TreeGridToolbarSample1Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxAvatarModule', 'IgxSwitchModule', 'IgxInputGroupModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            }),
            component: 'TreeGridToolbarSample1Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar sample 2
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridToolbarSample2Component', 'IgxAvatarModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService'],
                ngDeclarations: ['TreeGridToolbarSample2Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxAvatarModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            }),
            component: 'TreeGridToolbarSample2Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar sample 3
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridToolbarSample3Component', 'IgxAvatarModule', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule'],
                ngDeclarations: ['TreeGridToolbarSample3Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxAvatarModule', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule'],
                ngProviders: []
            }),
            component: 'TreeGridToolbarSample3Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar sample 4
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridToolbarSample4Component', 'IgxAvatarModule'],
                ngDeclarations: ['TreeGridToolbarSample4Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxAvatarModule'],
                ngProviders: []
            }),
            component: 'TreeGridToolbarSample4Component',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Toolbar style sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridToolbarStyleComponent', 'IgxAvatarModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService'],
                ngDeclarations: ['TreeGridToolbarStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxAvatarModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            }),
            component: 'TreeGridToolbarStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Summary sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridSummarySampleComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridSummarySampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridSummarySampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Summary Styling sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridSummaryStylingComponent', 'IgxIconModule'],
                ngDeclarations: ['TreeGridSummaryStylingComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxIconModule']
            }),
            component: 'TreeGridSummaryStylingComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Summary2 sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxButtonModule', 'IgxButtonGroupModule', 'IgxTreeGridModule', 'TreeGridSummary2SampleComponent', 'IgxIconModule', 'IgxSwitchModule'],
                ngDeclarations: ['TreeGridSummary2SampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxButtonModule', 'IgxButtonGroupModule', 'IgxTreeGridModule', 'IgxIconModule', 'IgxSwitchModule']
            }),
            component: 'TreeGridSummary2SampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Paging sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridPagingSampleComponent', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule'],
                ngDeclarations: ['TreeGridPagingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule']
            }),
            component: 'TreeGridPagingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Reusable Paginator sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridPagerSampleComponent', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule', 'IgxSwitchModule', 'IgxSelectModule'],
                ngDeclarations: ['TreeGridPagerSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule', 'IgxSwitchModule', 'IgxSelectModule']
            }),
            component: 'TreeGridPagerSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Editing sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/tree-grid/tree-grid-editing-sample/employee.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridEditingSampleComponent', 'IgxButtonModule', 'IgxDialogModule',
                    'IgxInputGroupModule', 'IgxCheckboxModule', 'IgxDatePickerModule', 'IgxIconModule'],
                ngDeclarations: ['TreeGridEditingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxDialogModule', 'IgxInputGroupModule', 'IgxCheckboxModule', 'IgxDatePickerModule', 'IgxIconModule']
            }),
            component: 'TreeGridEditingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'TreeGridEditingEventsComponent', 'IgxTreeGridModule', 'IgxToastModule'],
                ngDeclarations: ['TreeGridEditingEventsComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxToastModule']
            }),
            component: 'TreeGridEditingEventsComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridEditingStyleComponent'],
                ngDeclarations: ['TreeGridEditingStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridEditingStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxSelectModule', 'TreeGridExternalExcelStyleFilteringComponent'],
                ngDeclarations: ['TreeGridExternalExcelStyleFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxSelectModule']
            }),
            component: 'TreeGridExternalExcelStyleFilteringComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridExternalAdvancedFilteringComponent'],
                ngDeclarations: ['TreeGridExternalAdvancedFilteringComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridExternalAdvancedFilteringComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Remote Filtering sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/tree-grid/services/remoteFilteringService.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridRemoteFilteringSampleComponent', 'IgxIconModule', 'IgxToastModule'],
                ngDeclarations: ['TreeGridRemoteFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxIconModule', 'IgxToastModule']
            }),
            component: 'TreeGridRemoteFilteringSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid multi cell selection
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'TreeGridMultiCellSelectionComponent', 'IgxGridModule', 'IgxTreeGridModule', 'IgxToastModule', 'IgxSnackbarModule'],
                ngDeclarations: ['TreeGridMultiCellSelectionComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxTreeGridModule', 'IgxToastModule', 'IgxSnackbarModule']
            }),
            component: 'TreeGridMultiCellSelectionComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid multi cell selection - styling
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'TreeGridMultiCellSelectionStyleComponent', 'IgxTreeGridModule'],
                ngDeclarations: ['TreeGridMultiCellSelectionStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridMultiCellSelectionStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Load On Demand Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-load-on-demand-sample/remoteService.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridLoadOnDemandSampleComponent'],
                ngDeclarations: ['TreeGridLoadOnDemandSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
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
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridGroupByLoadOnDemandComponent'],
                ngDeclarations: ['TreeGridGroupByLoadOnDemandComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridGroupByLoadOnDemandComponent'
        }));

        // TreeGrid Excel Style Filtering Load On Demand Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-excel-style-filtering-load-on-demand/remoteValues.service.ts',
                '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridExcelStyleFilteringLoadOnDemandComponent', 'IgxIconModule', 'RemoteValuesService'],
                ngDeclarations: ['TreeGridExcelStyleFilteringLoadOnDemandComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxIconModule'],
                ngProviders: ['RemoteValuesService']
            }),
            component: 'TreeGridExcelStyleFilteringLoadOnDemandComponent'
        }));

        // Tree Grid Row Drag - Advanced Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridRowDragComponent', 'IgxButtonModule',
                    'IgxInputGroupModule', 'IgxIconModule', 'IgxDragDropModule'],
                ngDeclarations: ['TreeGridRowDragComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxInputGroupModule', 'IgxIconModule', 'IgxDragDropModule']
            }),
            component: 'TreeGridRowDragComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // Tree Grid Row Drag - Base Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridRowDragBaseComponent', 'IgxButtonModule',
                    'IgxInputGroupModule', 'IgxDragDropModule', 'IgxIconModule'],
                ngDeclarations: ['TreeGridRowDragBaseComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxInputGroupModule', 'IgxDragDropModule', 'IgxIconModule']
            }),
            component: 'TreeGridRowDragBaseComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // Tree Grid Multi Row Drag sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridMultiRowDragComponent', 'IgxButtonModule',
                    'IgxInputGroupModule', 'IgxIconModule', 'IgxDragDropModule'],
                ngDeclarations: ['TreeGridMultiRowDragComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxInputGroupModule', 'IgxIconModule', 'IgxDragDropModule']
            }),
            component: 'TreeGridMultiRowDragComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // Tree Grid Row Rerdering sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridRowReorderComponent', 'IgxDragDropModule'],
                ngDeclarations: ['TreeGridRowReorderComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxDragDropModule']
            }),
            component: 'TreeGridRowReorderComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // Tree Grid Keyboard Navigation Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-keyboard-navigation/data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridKBNavigationComponent'],
                ngDeclarations: ['TreeGridKBNavigationComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridKBNavigationComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // Tree Grid Remote Paging Sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-remote-paging-sample/remotePagingService.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridRemotePagingSampleComponent', 'IgxSelectModule'],
                ngDeclarations: ['TreeGridRemotePagingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxSelectModule']
            }),
            component: 'TreeGridRemotePagingSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Paging sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridPagingStyleSampleComponent', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule'],
                ngDeclarations: ['TreeGridPagingStyleSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxRippleModule', 'IgxIconModule']
            }),
            component: 'TreeGridPagingStyleSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Multi Column Header Template sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridMultiColumnHeaderTemplateSampleComponent'],
                ngDeclarations: ['TreeGridMultiColumnHeaderTemplateSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridMultiColumnHeaderTemplateSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid Clipboard actions sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-clipboard-operations-sample/data.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridClipboardSampleComponent', 'IgxSwitchModule' , 'IgxInputGroupModule', 'IgxIconModule', 'IgxRippleModule', 'IgxButtonModule'],
                ngDeclarations: ['TreeGridClipboardSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxSwitchModule', 'IgxInputGroupModule', 'IgxIconModule', 'IgxRippleModule', 'IgxButtonModule']
            }),
            component: 'TreeGridClipboardSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));
        // Tree Grid cell selection sample
        configs.push(new Config({
            component: 'TreeGridCellSelectionComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/data/utils.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'TreeGridCellSelectionComponent', 'IgxGridModule', 'IgxSwitchModule',
                    'IgxIconModule', 'IgxButtonGroupModule', 'IgxAvatarModule', 'IgxTreeGridModule', 'IgxSnackbarModule'],
                ngDeclarations: ['TreeGridCellSelectionComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxGridModule', 'IgxIconModule', 'IgxSwitchModule',
                    'IgxButtonGroupModule', 'IgxAvatarModule', 'IgxTreeGridModule', 'IgxSnackbarModule']
            })
        }));

        // TreeGrid Advanced Filtering sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridAdvancedFilteringSampleComponent'],
                ngDeclarations: ['TreeGridAdvancedFilteringSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridAdvancedFilteringSampleComponent'
        }));

        // TreeGrid Advanced Filtering Style sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridAdvancedFilteringStyleComponent'],
                ngDeclarations: ['TreeGridAdvancedFilteringStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridAdvancedFilteringStyleComponent'
        }));

        // TreeGrid Conditional Row Selection Template actions sample
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridConditionalRowSelectorsSampleComponent', 'IgxCheckboxModule'],
                ngDeclarations: ['TreeGridConditionalRowSelectorsSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxCheckboxModule']
            }),
            component: 'TreeGridConditionalRowSelectorsSampleComponent'
        }));

        // TreeGrid Row Selectors Template - Numbers
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/tree-grid/data/employees-flat.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxCheckboxModule', 'IgxTreeGridModule', 'TreeGridSelectionTemplateNumbersSampleComponent'],
                ngDeclarations: ['TreeGridSelectionTemplateNumbersSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxCheckboxModule', 'IgxTreeGridModule']
            }),
            component: 'TreeGridSelectionTemplateNumbersSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-avatars.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridStyleComponent', 'IgxAvatarModule'],
                ngDeclarations: ['TreeGridStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxAvatarModule']
            }),
            component: 'TreeGridStyleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        // TreeGrid cellStyles
        configs.push(new Config({
            component: 'TreeGridConditionalCellStyle2Component',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxInputGroupModule', 'TreeGridConditionalCellStyle2Component'],
                ngDeclarations: ['TreeGridConditionalCellStyle2Component'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxInputGroupModule']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxTooltipModule', 'TreeGridMultiCollapsibleColumnGroupsComponent'],
                ngDeclarations: ['TreeGridMultiCollapsibleColumnGroupsComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxTooltipModule']
            }),
            component: 'TreeGridMultiCollapsibleColumnGroupsComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/tree-grid/data/employees-flat.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridAllDataSummaryComponent'],
                ngDeclarations: ['TreeGridAllDataSummaryComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridAllDataSummaryComponent'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/tree-grid/data/employees-flat.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxInputGroupModule',
                    'IgxButtonGroupModule', 'IgxSwitchModule', 'TreeGridSummaryTemplateComponent'],
                ngDeclarations: ['TreeGridSummaryTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxInputGroupModule',
                    'IgxButtonGroupModule', 'IgxSwitchModule']
            }),
            component: 'TreeGridSummaryTemplateComponent'
        }));

        configs.push(new Config({
            additionalFiles: [
                '/src/app/data/athletesData.ts',
                '/src/app/tree-grid/data/employees-flat-detailed.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridRightPinningSampleComponent', 'IgxTreeGridModule'],
                ngDeclarations: ['TreeGridRightPinningSampleComponent'],
                ngImports: ['IgxTreeGridModule'],
                ngProviders: []
            }),
            component: 'TreeGridRightPinningSampleComponent'
        }));

        configs.push(new Config({
            component: 'TreeGridColumnSelectionComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridColumnSelectionComponent', 'IgxTreeGridModule', 'IgxPreventDocumentScrollDirective', 'IgxInputGroupModule', 'IgxSelectModule'],
                ngDeclarations: ['TreeGridColumnSelectionComponent'],
                ngImports: ['IgxTreeGridModule', 'IgxPreventDocumentScrollDirective', 'IgxInputGroupModule', 'IgxSelectModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'TreeGridColumnGroupSelectionComponent',
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/tree-grid/data/employees-flat-detailed.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridColumnGroupSelectionComponent', 'IgxTreeGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['TreeGridColumnGroupSelectionComponent'],
                ngImports: ['IgxTreeGridModule', 'IgxPreventDocumentScrollDirective'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'TreeGridColumnSelectionStylesComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridColumnSelectionStylesComponent', 'IgxTreeGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['TreeGridColumnSelectionStylesComponent'],
                ngImports: ['IgxTreeGridModule', 'IgxPreventDocumentScrollDirective'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'TreeGridRowPinningSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridRowPinningSampleComponent', 'IgxActionStripModule', 'IgxSwitchModule', 'IgxTreeGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['TreeGridRowPinningSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxActionStripModule', 'IgxSwitchModule', 'IgxTreeGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'TreeGridRowPinningExtraColumnSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/services/svgIcons.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridRowPinningExtraColumnSampleComponent', 'IgxTreeGridModule', 'IgxSwitchModule', 'IgxIconModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['TreeGridRowPinningExtraColumnSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxSwitchModule', 'IgxIconModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'TreeGridRowPinningStylingSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridRowPinningStylingSampleComponent', 'IgxActionStripModule', 'IgxTreeGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['TreeGridRowPinningStylingSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxActionStripModule', 'IgxTreeGridModule'],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: 'TGridKeyboardnavGuide',
            additionalFiles: [
                '/src/app/tree-grid/data/employees-flat-detailed.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['TGridKeyboardnavGuide', 'IgxTreeGridModule', 'IgxListModule', 'IgxOverlayService'],
                ngDeclarations: ['TGridKeyboardnavGuide'],
                ngImports: ['IgxTreeGridModule', 'IgxListModule'],
                ngProviders: ['IgxOverlayService']
            })
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/tree-grid-remote-paging-default-template/remotePagingService.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridRemotePagingDefaultTemplateComponent'],
                ngDeclarations: ['TreeGridRemotePagingDefaultTemplateComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridRemotePagingDefaultTemplateComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        const treeGridSaveStateSampleConfig = new Config({
            additionalFiles: [
                '/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/tree-grid/tree-grid-save-state/data.ts',
                '/src/app/tree-grid/tree-grid-save-state/about.component.ts',
                '/src/app/tree-grid/tree-grid-save-state/about.component.html'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxCheckboxModule', 'IgxIconModule', 'IgxButtonModule', 'TGridSaveStateComponent', 'TGridAboutComponent', 'Router', 'RouterModule'],
                ngDeclarations: ['TGridSaveStateComponent', 'TGridAboutComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxCheckboxModule', 'IgxIconModule', 'IgxButtonModule',
                    'RouterModule.forRoot([\{component: TGridAboutComponent, path: \'tree-grid-state-about\'},\{component: TGridSaveStateComponent, path: \'tree-grid-state\'},\{ path: \'\', redirectTo: \'/tree-grid-state\', pathMatch: \'full\' }])']

            }),
            component: 'TGridSaveStateComponent',
            shortenComponentPathBy: '/tree-grid/'
        });
        treeGridSaveStateSampleConfig.usesRouting = true;
        configs.push(treeGridSaveStateSampleConfig);

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridExternalOutletComponent', 'IgxToggleModule'],
                ngDeclarations: ['TreeGridExternalOutletComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxToggleModule']
            }),
            component: 'TreeGridExternalOutletComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridExportVisualizationComponent', 'IgxToggleModule' , 'IgxButtonModule',
                    'IgxExcelExporterService', 'IgxCsvExporterService'],
                ngDeclarations: ['TreeGridExportVisualizationComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxToggleModule', 'IgxButtonModule'],
                ngProviders: ['IgxExcelExporterService', 'IgxCsvExporterService']
            }),
            component: 'TreeGridExportVisualizationComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'TGridEditingLifecycleComponent', 'IgxTreeGridModule', 'IgxSwitchModule', 'IgxIconModule', 'IgxButtonModule'],
                ngDeclarations: ['TGridEditingLifecycleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxSwitchModule', 'IgxIconModule', 'IgxButtonModule']
            }),
            component: 'TGridEditingLifecycleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts', '/src/app/tree-grid/tree-grid-add-row-sample/employee.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridAddRowSampleComponent', 'IgxIconModule', 'IgxActionStripModule'],
                ngDeclarations: ['TreeGridAddRowSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxIconModule', 'IgxActionStripModule']
            }),
            component: 'TreeGridAddRowSampleComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridFormattedFilteringStrategyComponent'],
                ngDeclarations: ['TreeGridFormattedFilteringStrategyComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridFormattedFilteringStrategyComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridTreeFilterViewComponent'],
                ngDeclarations: ['TreeGridTreeFilterViewComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            component: 'TreeGridTreeFilterViewComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            component: 'TreeGridSummaryFormatterComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridSummaryFormatterComponent', 'IgxTreeGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['TreeGridSummaryFormatterComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            component: 'TreeGridRowClassesComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridRowClassesComponent', 'IgxTreeGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['TreeGridRowClassesComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            component: 'TreeGridRowStylesComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridRowStylesComponent', 'IgxTreeGridModule', 'IgxPreventDocumentScrollDirective'],
                ngDeclarations: ['TreeGridRowStylesComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
            }),
            shortenComponentPathBy: '/tree-grid/'
        }));

        configs.push(new Config({
            component: 'TreeGridActionStripSampleComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat-detailed.ts', '/src/app/data/utils.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['TreeGridActionStripSampleComponent', 'IgxTreeGridModule', 'IgxDialogModule', 'IgxButtonModule', 'IgxPreventDocumentScrollDirective', 'IgxActionStripModule'],
                ngDeclarations: ['TreeGridActionStripSampleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxDialogModule', 'IgxButtonModule', 'IgxActionStripModule']
            })
        }));

        configs.push(new Config({
            component: 'TreeGridValidatorServiceComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/utils.ts',
                '/src/app/tree-grid/data/employees-flat.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridValidatorServiceComponent',
                    'IgxButtonModule', 'IgxSwitchModule'],
                ngDeclarations: ['TreeGridValidatorServiceComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxSwitchModule']
            })
        }));

        configs.push(new Config({
            component: 'TreeGridValidatorServiceCrossFieldComponent',
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts',
                '/src/app/data/utils.ts',
                '/src/app/tree-grid/data/employees-flat-detailed.ts'
            ],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridValidatorServiceCrossFieldComponent',
                    'IgxButtonModule', 'IgxTooltipModule', 'ReactiveFormsModule'],
                ngDeclarations: ['TreeGridValidatorServiceCrossFieldComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule', 'IgxTooltipModule', 'ReactiveFormsModule']
            })
        }));

        // TreeGrid Validation Style
        configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/employees-flat.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridValidationStyleComponent'],
                ngDeclarations: ['TreeGridValidationStyleComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule']
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
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridValidatorServiceExtendedComponent',
                    'IgxButtonModule'],
                ngDeclarations: ['TreeGridValidatorServiceExtendedComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxButtonModule']
            })
        }));

         configs.push(new Config({
            additionalFiles: ['/src/app/directives/prevent-scroll.directive.ts', '/src/app/tree-grid/data/orders.ts'],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'TreeGridSummaryExportComponent', 'IgxIconModule', 'IgxExcelExporterService'],
                ngDeclarations: ['TreeGridSummaryExportComponent'],
                ngImports: ['IgxPreventDocumentScrollDirective', 'IgxTreeGridModule', 'IgxIconModule'],
                ngProviders: ['IgxExcelExporterService']
            }),
            component: 'TreeGridSummaryExportComponent',
            shortenComponentPathBy: '/tree-grid/'
        }));

        return configs;
    }
}
