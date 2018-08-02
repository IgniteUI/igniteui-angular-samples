/* tslint:disable:object-literal-sort-keys */
import { HttpClientModule } from "@angular/common/http";
import {
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxColumnHidingModule,
    IgxCsvExporterService,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxExcelExporterService,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRadioModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxToastModule,
    IgxToggleModule
} from "igniteui-angular";
import {
    GridColumnHidingSampleComponent
} from "../../src/app/grid/grid-column-hiding-sample/grid-column-hiding-sample.component";
import {
    GridColumnHidingToolbarSampleComponent
} from "../../src/app/grid/grid-column-hiding-toolbar-sample/grid-column-hiding-toolbar-sample.component";
import { GridCRMComponent } from "../../src/app/grid/grid-crm/grid-crm.component";
import { GridEditingSampleComponent } from "../../src/app/grid/grid-editing-sample/grid-editing-sample.component";
import { FilteringSampleComponent } from "../../src/app/grid/grid-filtering-sample/grid-filtering-sample.component";
import { GridGroupBySampleComponent } from "../../src/app/grid/grid-groupby-sample/grid-groupby-sample.component";
import { GridMovingSampleComponent } from "../../src/app/grid/grid-moving-sample/grid-moving-sample.component";
import { PagingSampleComponent } from "../../src/app/grid/grid-paging-sample/grid-paging-sample.component";
import {
    RemoteFilteringSampleComponent
} from "../../src/app/grid/grid-remote-filtering-sample/remote-filtering-sample.component";
import { RemotePagingGridSample } from "../../src/app/grid/grid-remote-paging-sample/remote-paging-sample.component";
import { ResizingSampleComponent } from "../../src/app/grid/grid-resizing-sample/grid-resizing-sample.component";
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
import { RemoteFilteringService } from "../../src/app/grid/services/remoteFilteringService";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

import { RemoteService } from "../../src/app/grid/services/remote.service";
import { RemoteServiceVirt } from "../../src/app/grid/services/remoteService";

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
                    IgxInputGroupModule, IgxRippleModule, GridSearchSampleComponent],
                ngDeclarations: [GridSearchSampleComponent],
                ngImports: [IgxButtonModule, IgxGridModule.forRoot(),
                    IgxIconModule, IgxInputGroupModule,
                    IgxRippleModule, HttpClientModule],
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
                imports: [GridToolbarSample2Component, IgxAvatarModule, IgxGridModule, IgxExcelExporterService, IgxCsvExporterService],
                ngDeclarations: [GridToolbarSample2Component],
                ngImports: [IgxAvatarModule, IgxGridModule.forRoot()],
                ngProviders: [IgxExcelExporterService, IgxCsvExporterService]
            })
        }));

        configs.push(new Config({
            component: GridToolbarSample3Component,
            additionalFiles: ["/src/app/grid/services/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [GridToolbarSample3Component, IgxAvatarModule, IgxGridModule, IgxExcelExporterService, IgxCsvExporterService],
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
                    IgxGridModule, IgxInputGroupModule, IgxIconModule,
                    IgxRippleModule, GridEditingSampleComponent],
                ngDeclarations: [GridEditingSampleComponent],
                ngImports: [IgxButtonModule, IgxCheckboxModule, IgxDatePickerModule, IgxDialogModule,
                    IgxGridModule.forRoot(), IgxInputGroupModule, IgxIconModule, IgxRippleModule]
            })
        }));

        configs.push(new Config({
            component: GridMultiColumnHeadersComponent,
            additionalFiles: ["/src/app/grid/multi-column-headers/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [ GridMultiColumnHeadersComponent, IgxGridModule, IgxButtonModule ],
                ngDeclarations: [GridMultiColumnHeadersComponent],
                ngImports: [IgxGridModule.forRoot(), IgxButtonModule ]
            })
        }));

        configs.push(new Config({
            component: RemotePagingGridSample,
            additionalFiles: ["/src/app/grid/services/remote.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [RemotePagingGridSample, IgxGridModule, HttpClientModule, RemoteService],
                ngDeclarations: [ RemotePagingGridSample ],
                ngImports: [IgxGridModule.forRoot()],
                ngProviders: [RemoteService]
            })
        }));

        return configs;
    }
}
