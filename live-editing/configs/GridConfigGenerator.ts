/* tslint:disable:object-literal-sort-keys */
import { HttpClientModule } from "@angular/common/http";
import {
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxCalendarModule,
    IgxCheckboxModule,
    IgxChipsModule,
    IgxColumnHidingModule,
    IgxComboModule,
    IgxCsvExporterService,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxDropDownModule,
    IgxExcelExporterService,
    IgxFocusModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxLayoutModule,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSliderModule,
    IgxSnackbarModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxToggleModule
} from "igniteui-angular";
import {
    GridBatchEditingSampleComponent
} from "../../src/app/grid/grid-batch-editing/grid-batch-editing-sample.component";
import {
    GridColumnHidingSampleComponent
} from "../../src/app/grid/grid-column-hiding-sample/grid-column-hiding-sample.component";
import {
    GridColumnHidingToolbarSampleComponent
} from "../../src/app/grid/grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component";
import {
    GridConditionalCellStyleComponent
} from "../../src/app/grid/grid-conditional-cell-style/grid-conditional-cell-style.component";
import { GridCRMComponent } from "../../src/app/grid/grid-crm/grid-crm.component";
import {
    GridDisplayDensitySampleComponent
} from "../../src/app/grid/grid-displaydensity-sample/grid-displaydensity-sample.component";
import { GridEditingSampleComponent } from "../../src/app/grid/grid-editing-sample/grid-editing-sample.component";
import { FilteringSampleComponent } from "../../src/app/grid/grid-filtering-sample/grid-filtering-sample.component";
import { FinJSDemoComponent } from "../../src/app/grid/grid-finjs-demo/grid-finjs-demo.component";
import { GridGroupBySampleComponent } from "../../src/app/grid/grid-groupby-sample/grid-groupby-sample.component";
import { GridMovingSampleComponent } from "../../src/app/grid/grid-moving-sample/grid-moving-sample.component";
import { PagingSampleComponent } from "../../src/app/grid/grid-paging-sample/grid-paging-sample.component";
import {
    RemoteFilteringSampleComponent
} from "../../src/app/grid/grid-remote-filtering-sample/remote-filtering-sample.component";
import { RemotePagingGridSample } from "../../src/app/grid/grid-remote-paging-sample/remote-paging-sample.component";
import { ResizingSampleComponent } from "../../src/app/grid/grid-resizing-sample/grid-resizing-sample.component";
import {
    GridRowEditSampleComponent
} from "../../src/app/grid/grid-row-editing-sample/grid-row-editing-sample.component";
import { FinancialSampleComponent, LocalService } from "../../src/app/grid/grid-sample-2/grid-sample-2.component";
import { GridSample3Component } from "../../src/app/grid/grid-sample-3/grid-sample-3.component";
import { GridRemoteVirtualizationSampleComponent } from "../../src/app/grid/grid-sample-4/grid-sample-4.component";
import { PinningSampleComponent } from "../../src/app/grid/grid-sample-pinning/grid-pinning.component";
import { GridSelectionSampleComponent } from "../../src/app/grid/grid-sample-selection/grid-selection.component";
import { GridSearchSampleComponent } from "../../src/app/grid/grid-search-sample/grid-search-sample.component";
import {
    GridContextmenuComponent
} from "../../src/app/grid/grid-sorting-sample/grid-contextmenu/grid-contextmenu.component";
import { SortingSampleComponent } from "../../src/app/grid/grid-sorting-sample/grid-sorting-sample.component";
import { GridToolbarSample1Component } from "../../src/app/grid/grid-toolbar-sample/grid-toolbar-sample-1.component";
import { GridToolbarSample2Component } from "../../src/app/grid/grid-toolbar-sample/grid-toolbar-sample-2.component";
import { GridToolbarSample3Component } from "../../src/app/grid/grid-toolbar-sample/grid-toolbar-sample-3.component";
import { GridComponent } from "../../src/app/grid/grid.component";
import { GridMultiColumnHeadersComponent } from "../../src/app/grid/multi-column-headers/multi-column-headers";
import { DataService } from "../../src/app/grid/services/data.service";
import { LocalDataService } from "../../src/app/grid/services/localData.service";
import { RemoteService } from "../../src/app/grid/services/remote.service";
import { RemoteFilteringService } from "../../src/app/grid/services/remoteFilteringService";
import { RemotePagingService } from "../../src/app/grid/services/remotePagingService";
import { RemoteServiceVirt } from "../../src/app/grid/services/remoteService";
import { DarkThemeSampleComponent } from "../../src/app/theming/dark-theme-sample/dark-theme-sample.component";
import { DefaultThemeSampleComponent } from "../../src/app/theming/default-theme-sample/default-theme-sample.component";
import { ThemeChooserSampleComponent } from "../../src/app/theming/theme-chooser/theme-chooser-sample.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { GridCustomFilteringComponent } from "../../src/app/grid/grid-custom-filtering/grid-custom-filtering.component";

export class GridConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: GridComponent,
            additionalFiles: ["/src/app/grid/services/data.service.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, GridComponent, DataService],
                ngDeclarations: [GridComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule.forRoot(),
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule, IgxRippleModule,
                    IgxSwitchModule, HttpClientModule],
                ngProviders: [DataService]
            })
        }));

        configs.push(new Config({
            component: FinancialSampleComponent,
            additionalFiles: ["/src/app/grid/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, FinancialSampleComponent, LocalService],
                ngDeclarations: [FinancialSampleComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule.forRoot(),
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, HttpClientModule],
                ngProviders: [LocalService]
            })
        }));

        configs.push(new Config({
            component: GridSample3Component,
            additionalFiles: ["/src/app/grid/grid-sample-3/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxButtonModule, IgxGridModule, IgxInputGroupModule,
                    IgxRippleModule, IgxSwitchModule, GridSample3Component, LocalService, IgxIconModule],
                ngDeclarations: [GridSample3Component],
                ngImports: [IgxButtonModule, IgxGridModule.forRoot(),
                    IgxInputGroupModule, IgxRippleModule, HttpClientModule, IgxIconModule]
            })
        }));

        configs.push(new Config({
            component: GridGroupBySampleComponent,
            additionalFiles: ["/src/app/grid/grid-groupby-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxGridModule,
                    IgxSwitchModule, GridGroupBySampleComponent, IgxIconModule, IgxBadgeModule],
                ngDeclarations: [GridGroupBySampleComponent],
                ngImports: [IgxButtonModule, IgxGridModule.forRoot(), IgxIconModule, IgxBadgeModule]
            })
        }));

        configs.push(new Config({
            component: FilteringSampleComponent,
            additionalFiles: ["/src/app/grid/grid-filtering-sample/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxRippleModule, FilteringSampleComponent, IgxInputGroupModule],
                ngDeclarations: [FilteringSampleComponent],
                ngImports: [IgxGridModule.forRoot(), IgxRippleModule, IgxInputGroupModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: PagingSampleComponent,
            additionalFiles: ["/src/app/grid/services/data.service.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, PagingSampleComponent, DataService],
                ngDeclarations: [PagingSampleComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule.forRoot(),
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, HttpClientModule],
                ngProviders: [DataService]
            })
        }));

        configs.push(new Config({
            component: GridSelectionSampleComponent,
            additionalFiles: ["/src/app/grid/grid-sample-selection/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, GridSelectionSampleComponent],
                ngDeclarations: [GridSelectionSampleComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule.forRoot(),
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, HttpClientModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridSearchSampleComponent,
            additionalFiles: ["/src/app/grid/grid-search-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxButtonModule, IgxGridModule, IgxIconModule,
                    IgxInputGroupModule, IgxRippleModule, IgxChipsModule, GridSearchSampleComponent],
                ngDeclarations: [GridSearchSampleComponent],
                ngImports: [IgxButtonModule, IgxGridModule.forRoot(),
                    IgxIconModule, IgxInputGroupModule,
                    IgxRippleModule, IgxChipsModule, HttpClientModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridColumnHidingSampleComponent,
            additionalFiles: ["/src/app/grid/grid-column-hiding-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxGridModule, IgxRadioModule,
                    IgxColumnHidingModule, GridColumnHidingSampleComponent],
                ngDeclarations: [GridColumnHidingSampleComponent],
                ngImports: [IgxGridModule.forRoot(), IgxRadioModule, IgxColumnHidingModule, HttpClientModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridColumnHidingToolbarSampleComponent,
            additionalFiles: ["/src/app/grid/grid-column-hiding-toolbar-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxGridModule, GridColumnHidingToolbarSampleComponent],
                ngDeclarations: [GridColumnHidingToolbarSampleComponent],
                ngImports: [IgxGridModule.forRoot(), HttpClientModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridCRMComponent,
            additionalFiles: ["/src/app/grid/grid-crm/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, IgxToggleModule, IgxCheckboxModule,
                    IgxExcelExporterService, GridCRMComponent],
                ngDeclarations: [GridCRMComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule.forRoot(),
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, IgxToggleModule, IgxCheckboxModule, HttpClientModule],
                ngProviders: [IgxExcelExporterService]
            })
        }));

        configs.push(new Config({
            component: ResizingSampleComponent,
            additionalFiles: ["/src/app/grid/grid-resizing-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, ResizingSampleComponent],
                ngDeclarations: [ResizingSampleComponent],
                ngImports: [IgxGridModule.forRoot()],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: SortingSampleComponent,
            additionalFiles: ["/src/app/grid/grid-sorting-sample/nwindData.ts",
                "/src/app/grid/grid-sorting-sample/grid-contextmenu/grid-contextmenu.component.html",
                "/src/app/grid/grid-sorting-sample/grid-contextmenu/grid-contextmenu.component.ts",
                "/src/app/grid/grid-sorting-sample/grid-contextmenu/grid-contextmenu.component.scss"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxIconModule, IgxRippleModule,
                    SortingSampleComponent, IgxInputGroupModule, GridContextmenuComponent],
                ngDeclarations: [SortingSampleComponent, GridContextmenuComponent],
                ngImports: [IgxGridModule.forRoot(), IgxRippleModule, IgxIconModule, IgxInputGroupModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridRemoteVirtualizationSampleComponent,
            additionalFiles: ["/src/app/grid/services/remoteService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridRemoteVirtualizationSampleComponent, IgxGridModule, IgxToastModule,
                    IgxBadgeModule, HttpClientModule, RemoteServiceVirt],
                ngDeclarations: [GridRemoteVirtualizationSampleComponent],
                ngImports: [IgxGridModule.forRoot(), IgxToastModule, IgxBadgeModule, HttpClientModule],
                ngProviders: [RemoteServiceVirt]
            })
        }));

        configs.push(new Config({
            component: RemoteFilteringSampleComponent,
            additionalFiles: ["/src/app/grid/services/remoteFilteringService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [RemoteFilteringSampleComponent, IgxGridModule,
                    IgxBadgeModule, HttpClientModule, RemoteFilteringService, IgxToastModule],
                ngDeclarations: [RemoteFilteringSampleComponent],
                ngImports: [IgxGridModule.forRoot(), IgxBadgeModule, HttpClientModule, IgxToastModule],
                ngProviders: [RemoteFilteringService]
            })
        }));

        configs.push(new Config({
            component: PinningSampleComponent,
            additionalFiles: ["/src/app/grid/grid-sample-pinning/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [PinningSampleComponent, IgxGridModule, IgxIconModule],
                ngDeclarations: [PinningSampleComponent],
                ngImports: [IgxGridModule.forRoot(), IgxIconModule],
                ngProviders: []
            })
        }));

        // column-moving sample
        configs.push(new Config({
            component: GridMovingSampleComponent,
            additionalFiles: ["/src/app/grid/grid-sample-selection/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMovingSampleComponent, IgxGridModule, IgxBadgeModule, IgxIconModule],
                ngDeclarations: [GridMovingSampleComponent],
                ngImports: [IgxGridModule.forRoot(), IgxBadgeModule, IgxIconModule],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridToolbarSample1Component,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridToolbarSample1Component, IgxAvatarModule, IgxGridModule],
                ngDeclarations: [GridToolbarSample1Component],
                ngImports: [IgxAvatarModule, IgxGridModule.forRoot()],
                ngProviders: []
            })
        }));

        configs.push(new Config({
            component: GridToolbarSample2Component,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridToolbarSample2Component, IgxAvatarModule, IgxGridModule,
                    IgxExcelExporterService, IgxCsvExporterService],
                ngDeclarations: [GridToolbarSample2Component],
                ngImports: [IgxAvatarModule, IgxGridModule.forRoot()],
                ngProviders: [IgxExcelExporterService, IgxCsvExporterService]
            })
        }));

        configs.push(new Config({
            component: GridToolbarSample3Component,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridToolbarSample3Component, IgxAvatarModule, IgxGridModule,
                    IgxExcelExporterService, IgxCsvExporterService],
                ngDeclarations: [GridToolbarSample3Component],
                ngImports: [IgxAvatarModule, IgxGridModule.forRoot()],
                ngProviders: [IgxExcelExporterService, IgxCsvExporterService]
            })
        }));

        configs.push(new Config({
            component: GridEditingSampleComponent,
            additionalFiles: ["/src/app/grid/grid-editing-sample/data.ts",
                "/src/app/grid/grid-editing-sample/product.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCheckboxModule, IgxDatePickerModule, IgxDialogModule,
                    IgxGridModule, IgxInputGroupModule, IgxIconModule, IgxComboModule,
                    IgxRippleModule, GridEditingSampleComponent],
                ngDeclarations: [GridEditingSampleComponent],
                ngImports: [IgxButtonModule, IgxCheckboxModule, IgxDatePickerModule, IgxDialogModule,
                    IgxGridModule.forRoot(), IgxInputGroupModule, IgxIconModule, IgxRippleModule, IgxComboModule]
            })
        }));

        configs.push(new Config({
            component: GridMultiColumnHeadersComponent,
            additionalFiles: ["/src/app/grid/multi-column-headers/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridMultiColumnHeadersComponent, IgxGridModule, IgxButtonModule],
                ngDeclarations: [GridMultiColumnHeadersComponent],
                ngImports: [IgxGridModule.forRoot(), IgxButtonModule]
            })
        }));

        configs.push(new Config({
            component: RemotePagingGridSample,
            additionalFiles: ["/src/app/grid/services/remotePagingService.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [RemotePagingGridSample, IgxGridModule, HttpClientModule, RemoteService],
                ngDeclarations: [RemotePagingGridSample],
                ngImports: [IgxGridModule.forRoot(), HttpClientModule],
                ngProviders: [RemoteService]
            })
        }));

        configs.push(new Config({
            component: GridDisplayDensitySampleComponent,
            additionalFiles: ["/src/app/grid/grid-displaydensity-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxButtonGroupModule,
                    IgxGridModule, GridDisplayDensitySampleComponent],
                ngDeclarations: [GridDisplayDensitySampleComponent],
                ngImports: [IgxButtonModule, IgxButtonGroupModule,
                    IgxGridModule.forRoot()]
            })
        }));

        configs.push(new Config({
            component: ThemeChooserSampleComponent,
            additionalFiles: ["/src/app/theming/data/data.ts",
                "/src/app/theming/data/record.ts",
                "/src/app/theming/styles/themes.scss",
                "/src/app/theming/styles/theme-classes.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule,
                    IgxGridModule, IgxDialogModule, IgxSnackbarModule, IgxLayoutModule, ThemeChooserSampleComponent,
                    IgxCalendarModule, IgxToggleModule, IgxIconModule, IgxRippleModule, IgxButtonModule,
                    IgxCalendarModule, IgxInputGroupModule, IgxDatePickerModule],
                ngDeclarations: [ThemeChooserSampleComponent],
                ngImports: [IgxDropDownModule,
                    IgxDialogModule, IgxSnackbarModule, IgxLayoutModule, IgxCalendarModule,
                    IgxToggleModule, IgxIconModule, IgxRippleModule, IgxButtonModule,
                    IgxCalendarModule, IgxInputGroupModule, IgxDatePickerModule,
                    IgxGridModule.forRoot(), IgxLayoutModule]
            })
        }));

        configs.push(new Config({
            component: DefaultThemeSampleComponent,
            additionalFiles: ["/src/app/theming/data/data.ts", "/src/app/theming/data/record.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule,
                    IgxGridModule, IgxDialogModule, IgxSnackbarModule, IgxLayoutModule, DefaultThemeSampleComponent,
                    IgxCalendarModule, IgxToggleModule, IgxIconModule, IgxRippleModule, IgxButtonModule,
                    IgxCalendarModule, IgxInputGroupModule, IgxDatePickerModule],
                ngDeclarations: [DefaultThemeSampleComponent],
                ngImports: [IgxDropDownModule,
                    IgxDialogModule, IgxSnackbarModule, IgxLayoutModule, IgxCalendarModule,
                    IgxToggleModule, IgxIconModule, IgxRippleModule, IgxButtonModule,
                    IgxCalendarModule, IgxInputGroupModule, IgxDatePickerModule,
                    IgxGridModule.forRoot(), IgxLayoutModule]
            })
        }));

        configs.push(new Config({
            component: DarkThemeSampleComponent,
            additionalFiles: ["/src/app/theming/data/data.ts", "/src/app/theming/data/record.ts",
                "/src/app/theming/styles/dark-theme.scss",
                "/src/app/theming/styles/dark-theme-class.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule,
                    IgxGridModule, IgxDialogModule, IgxSnackbarModule, IgxLayoutModule, DarkThemeSampleComponent,
                    IgxCalendarModule, IgxToggleModule, IgxIconModule, IgxRippleModule, IgxButtonModule,
                    IgxCalendarModule, IgxInputGroupModule, IgxDatePickerModule],
                ngDeclarations: [DarkThemeSampleComponent],
                ngImports: [IgxDropDownModule,
                    IgxDialogModule, IgxSnackbarModule, IgxLayoutModule, IgxCalendarModule,
                    IgxToggleModule, IgxIconModule, IgxRippleModule, IgxButtonModule,
                    IgxCalendarModule, IgxInputGroupModule, IgxDatePickerModule,
                    IgxGridModule.forRoot(), IgxLayoutModule]
            })
        }));

        configs.push(new Config({
            component: GridConditionalCellStyleComponent,
            additionalFiles: ["/src/app/grid/services/data.service.ts", "/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, GridConditionalCellStyleComponent],
                ngDeclarations: [GridConditionalCellStyleComponent],
                ngImports: [IgxGridModule.forRoot()]
            })
        }));

        // FinJS demo component sample
        configs.push(new Config({
            component: FinJSDemoComponent,
            additionalFiles: ["/src/app/grid/services/localData.service.ts", "/src/app/grid/services/financialData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxGridModule, IgxButtonGroupModule, IgxIconModule, IgxSliderModule, IgxToggleModule,
                    IgxButtonModule, IgxExcelExporterService, IgxSwitchModule, IgxRippleModule, FinJSDemoComponent,
                    LocalDataService],
                ngDeclarations: [FinJSDemoComponent],
                ngImports: [IgxGridModule, IgxButtonGroupModule, IgxIconModule, IgxSliderModule, IgxToggleModule,
                    IgxButtonModule, IgxSwitchModule, IgxRippleModule, IgxGridModule.forRoot()],
                ngProviders: [LocalDataService, IgxExcelExporterService]
            })
        }));

        configs.push(new Config({
            component: GridBatchEditingSampleComponent,
            additionalFiles: ["/src/app/grid/grid-batch-editing/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridBatchEditingSampleComponent, IgxGridModule, IgxDialogModule, IgxButtonModule,
                    IgxFocusModule],
                ngDeclarations: [GridBatchEditingSampleComponent],
                ngImports: [IgxGridModule, IgxDialogModule, IgxButtonModule,
                    IgxFocusModule]
            })
        }));

        configs.push(new Config({
            component: GridRowEditSampleComponent,
            additionalFiles: ["src/app/grid/grid-row-editing-sample/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridRowEditSampleComponent, IgxGridModule, IgxFocusModule],
                ngDeclarations: [GridRowEditSampleComponent],
                ngImports: [IgxGridModule.forRoot(), IgxFocusModule]
            })
        }));

        configs.push(new Config({
            component: GridCustomFilteringComponent,
            additionalFiles: ["/src/app/grid/grid-filtering-sample/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridCustomFilteringComponent, IgxGridModule],
                ngDeclarations: [GridCustomFilteringComponent],
                ngImports: [IgxGridModule.forRoot()]
            })
        }));

        return configs;
    }
}
