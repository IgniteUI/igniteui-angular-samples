import { Component, ViewChild } from "@angular/core";
import { IgxColumnGroupComponent, IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/customers";

@Component({
    selector: "multi-column-header-template",
    styleUrls: [ "multi-column-header-template.scss" ],
    templateUrl: "multi-column-header-template.html"
})
export class GridMultiColumnHeaderTemplateComponent {

    @ViewChild(IgxGridComponent, { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data: any[] = DATA;
    public columnGroupStates = new Map<IgxColumnGroupComponent, boolean>();
    public selectionMode = "multiple";

    constructor() {
        for (const item of this.data) {
            item.Location = `${item.Address}, ${item.City}, ${item.Country}`;
        }
    }

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
