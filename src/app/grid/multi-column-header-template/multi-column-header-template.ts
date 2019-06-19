import { Component, ViewChild } from "@angular/core";
import { IgxColumnGroupComponent, IgxGridComponent } from "igniteui-angular";
import { data } from "./data";

@Component({
    selector: "multi-column-header-template",
    styleUrls: [ "multi-column-header-template.scss" ],
    templateUrl: "multi-column-header-template.html"
})
export class GridMultiColumnHeaderTemplateComponent {

    @ViewChild(IgxGridComponent, { read: IgxGridComponent })
    public grid: IgxGridComponent;
    public data = data;
    public columnGroupStates = new Map<IgxColumnGroupComponent, boolean>();

    public toggleColumnGroup(columnGroup: IgxColumnGroupComponent) {
        const columns = columnGroup.children.toArray();

        if (columnGroup.header === "General Information") {
            const col = columns[1];
            col.hidden = !col.hidden;
        } else if (columnGroup.header === "Address Information") {
            for (const col of columns) {
                col.hidden = !col.hidden;
            }
        }

        this.columnGroupStates.set(columnGroup, !this.columnGroupStates.get(columnGroup));
    }
}
