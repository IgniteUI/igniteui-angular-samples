import { Component, HostBinding, ViewChild} from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { athletesData } from "../services/data";

@Component({
    selector: "custom-grid-paging-style-sample",
    styleUrls: ["custom-grid-paging-style.component.scss", "grid-paging-themes.scss"],
    templateUrl: "custom-grid-paging-style.component.html"
})

export class CustomGridPagingStyleSample {
    @ViewChild("grid1") public grid1: IgxGridComponent;
    public data: any[];

    @HostBinding("class")
    public themeClass = "dark-grid-paginator";

    public lightTheme = false;
    constructor() {
    }
    public ngOnInit(): void {
        this.data = athletesData;
    }

    public cellSelection(evt) {
        const cell = evt.cell;
        this.grid1.selectRows([cell.row.rowID], true);
    }

    public changeTheme() {
        this.lightTheme = !this.lightTheme;
        if (this.lightTheme) {
            this.themeClass = "light-grid-paginator";
        } else {
            this.themeClass = "dark-grid-paginator";
        }
    }
}
