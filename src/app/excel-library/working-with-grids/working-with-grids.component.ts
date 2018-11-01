import {
    AfterViewInit, ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef
} from "@angular/core";

// TODO import Grid component:
// import { IgxGridComponent } from "igniteui-angular";

// TODO import Excel components that the sample will be showcasing:
import { TextFormatMode } from "igniteui-angular-excel/ES5/TextFormatMode";
import { Workbook } from "igniteui-angular-excel/ES5/Workbook";
import { WorkbookFormat } from "igniteui-angular-excel/ES5/WorkbookFormat";
import { Worksheet } from "igniteui-angular-excel/ES5/Worksheet";
import { WorksheetTable } from "igniteui-angular-excel/ES5/WorksheetTable";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-working-with-grids",
    styleUrls: ["./working-with-grids.component.scss"],
    templateUrl: "./working-with-grids.component.html"
})
export class ExcelLibWorkingWithGridsComponent implements AfterViewInit {

    // TODO uncomment and add a grid in html file
    // @ViewChild("grid")
    // public grid: IgxGridComponent;

    public data: any;

    constructor() {

        // TODO generate excel data or load data from .xls file
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
        // TODO bind excel data to the grid
    }

}
