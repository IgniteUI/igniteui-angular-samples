import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxColumnComponent, IgxGridComponent } from "igniteui-angular";
// import { DATA } from "../../data/customers";
import { athletesData } from "../services/data";

export enum ColumnPinningPosition {
    Start,
    End
}

export enum RowPinningPosition {
    Top,
    Bottom
}

export interface IPinningConfig {
    columns?: ColumnPinningPosition;
    rows?: RowPinningPosition;
}

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: "grid-sample",
    styleUrls: ["grid-right-pinning.component.scss"],
    templateUrl: "grid-right-pinning.component.html"
})

export class RightPinningSampleComponent {

    
    @ViewChild("grid1", { static: true }) 
    public grid1: IgxGridComponent;
    
    public data: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
    private _columnsPinned: boolean = true;

    public ngOnInit(): void {
        this.data = athletesData;
        this.data.forEach((x) => {
            x.FirstPlaces = Math.floor(Math.random() * Math.floor(3));
            x.SecondPlaces = Math.floor(Math.random() * Math.floor(4));
            x.ThirdPlaces = Math.floor(Math.random() * Math.floor(5));
        });
    }

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }

    public get columnsPinned(): boolean {
        return this._columnsPinned;
    }

    public set columnsPinned(pinned) {
        this._columnsPinned = !this._columnsPinned;
    } 

}
