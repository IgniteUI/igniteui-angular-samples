import { Component } from "@angular/core";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "app-grid-add-row",
    styleUrls: [`grid-add-row-sample.component.scss`],
    templateUrl: "grid-add-row-sample.component.html"
})
export class GridAddRowSampleComponent {
    public data: any[] = DATA;

    onMouseOver(event, grid, actionStrip) {
        if (event.target.nodeName.toLowerCase() === 'igx-grid-cell') {
            const rowIndex = parseInt(event.target.attributes['data-rowindex'].value, 10);
            const row = grid.getRowByIndex(rowIndex);
            actionStrip.show(row);
        }
    }

    onMouseLeave(actionstrip, event?) {
        if (!event || event.relatedTarget.nodeName.toLowerCase() !== 'igx-drop-down-item') {
            actionstrip.hide();
        }
    }
}