import { Component, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent, IgxHierarchicalRowComponent,
        IgxIconService, RowPinningPosition} from "igniteui-angular";
import { IPinningConfig } from "igniteui-angular/lib/grids/common/grid.interface";
import { icons } from "../../grid/services/svgIcons";
import { SINGERS } from "../data";

const FILTERING_ICONS_FONT_SET = "filtering-icons";
@Component({
    selector: "hierarchical-grid-row-pinning",
    styleUrls: ["./hierarchical-grid-row-pinning.component.scss"],
    templateUrl: "hierarchical-grid-row-pinning.component.html"
})

export class HGridRowPinningSampleComponent {
    public localdata;
    public pinningConfig: IPinningConfig = {rows: RowPinningPosition.Top};
    @ViewChild("hierarchicalGrid", { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor(private iconService: IgxIconService) {
        this.localdata = SINGERS;
    }

    public ngAfterViewInit() {
        const pinnedIcons = icons.filter(icon => icon.name === "pin" || icon.name === "unpin");
        pinnedIcons.forEach(icon => {
            if (!this.iconService.isSvgIconCached(icon.name, FILTERING_ICONS_FONT_SET)) {
                this.iconService.addSvgIconFromText(icon.name, icon.value, FILTERING_ICONS_FONT_SET);
            }
        });
    }

    public togglePinning(row: IgxHierarchicalRowComponent, event) {
        event.preventDefault();
        if (row.pinned) {
            row.unpin();
        } else {
            row.pin();
        }
    }

    public changePinningPosition() {
        if (this.pinningConfig.rows === RowPinningPosition.Bottom) {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Top };
        } else {
            this.pinningConfig = { columns: this.pinningConfig.columns, rows: RowPinningPosition.Bottom };
        }
    }

    public formatter = (a) => a;
}
