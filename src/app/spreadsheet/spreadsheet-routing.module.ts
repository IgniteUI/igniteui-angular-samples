// tslint:disable:max-line-length
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { spreadsheetRoutesData } from "./spreadsheet-routes-data";

// tslint:enable:max-line-length
import { SpreadsheetActivationComponent } from "./spreadsheet-activation/spreadsheet-activation.component";
import { SpreadsheetAdapterComponent } from "./spreadsheet-adapter/spreadsheet-adapter.component";
import { SpreadsheetClipboardComponent } from "./spreadsheet-clipboard/spreadsheet-clipboard.component";
import { SpreadsheetCommandsComponent } from "./spreadsheet-commands/spreadsheet-commands.component";
// tslint:disable-next-line: max-line-length
import { SpreadsheetCondFormatComponent } from "./spreadsheet-conditional-formatting/spreadsheet-cond-formatting.component";
import { SpreadsheetConfiguringComponent} from "./spreadsheet-configuring/spreadsheet-configuring.component";
import { SpreadsheetDataValidComponent } from "./spreadsheet-data-validation/spreadsheet-data-validation.component";
// import { SpreadsheetFilterDialogComponent } from "./spreadsheet-filter-dialog/spreadsheet-filter-dialog.component";
// import { SpreadsheetFormatDialogComponent } from "./spreadsheet-format-dialog/spreadsheet-format-dialog.component";
import { SpreadsheetHyperlinksComponent } from "./spreadsheet-hyperlinks/spreadsheet-hyperlinks.component";
import { SpreadsheetOverviewComponent } from "./spreadsheet-overview/spreadsheet-overview.component";
// import { SpreadsheetSortDialogComponent } from "./spreadsheet-sort-dialog/spreadsheet-sort-dialog.component";

export const spreadsheetRoutes: Routes = [
    {
        component: SpreadsheetOverviewComponent,
        data: spreadsheetRoutesData["spreadsheet-overview"],
        path: "spreadsheet-overview"
    },
    {
        component: SpreadsheetAdapterComponent,
        data: spreadsheetRoutesData["spreadsheet-adapter"],
        path: "spreadsheet-adapter"
    },
    {
        component: SpreadsheetClipboardComponent,
        data: spreadsheetRoutesData["spreadsheet-clipboard"],
        path: "spreadsheet-clipboard"
    },
    {
        component: SpreadsheetDataValidComponent,
        data: spreadsheetRoutesData["spreadsheet-data-validation"],
        path: "spreadsheet-data-validation"
    },
    {
        component: SpreadsheetHyperlinksComponent,
        data: spreadsheetRoutesData["spreadsheet-hyperlinks"],
        path: "spreadsheet-hyperlinks"
    },
    {
        component: SpreadsheetCommandsComponent,
        data: spreadsheetRoutesData["spreadsheet-commands"],
        path: "spreadsheet-commands"
    },
    {
        component: SpreadsheetActivationComponent,
        data: spreadsheetRoutesData["spreadsheet-activation"],
        path: "spreadsheet-activation"
    },
    {
        component: SpreadsheetCondFormatComponent,
        data: spreadsheetRoutesData["spreadsheet-conditional-formatting"],
        path: "spreadsheet-conditional-formatting"
    },
    {
        component: SpreadsheetConfiguringComponent,
        data: spreadsheetRoutesData["spreadsheet-configuring"],
        path: "spreadsheet-configuring"
    }/*,
    {
        component: SpreadsheetFormatDialogComponent,
        data: spreadsheetRoutesData["spreadsheet-format-dialog"],
        path: "spreadsheet-format-dialog"
    },
    {
        component: SpreadsheetSortDialogComponent,
        data: spreadsheetRoutesData["spreadsheet-sort-dialog"],
        path: "spreadsheet-sort-dialog"
    },
    {
        component: SpreadsheetFilterDialogComponent,
        data: spreadsheetRoutesData["spreadsheet-filter-dialog"],
        path: "spreadsheet-filter-dialog"
    }*/
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(spreadsheetRoutes)
    ]
})
export class SpreadsheetRoutingModule { }
