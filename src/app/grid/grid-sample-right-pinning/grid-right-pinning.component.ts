import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxColumnComponent, IgxGridComponent, ColumnPinningPosition } from "igniteui-angular";
import { IPinningConfig } from 'igniteui-angular/lib/grids/common/grid.interface';
import { athletesData } from "../services/data";

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
            x.RegistrationDate = this.generateReadableDate(x.Registered);
        });
    }

    public toggleColumn(col: IgxColumnComponent): void {
        col.pinned ? col.unpin() : col.pin();
    }

    public get columnsPinned(): boolean {
        return this._columnsPinned;
    }

    public set columnsPinned(pinned) {
        this._columnsPinned = !this._columnsPinned;
    }

    private generateReadableDate(timestamp: string): string {
        const dateObj = new Date(timestamp.split(" ")[0]);
        const month = dateObj.toLocaleString("default", { month: "long"});
        return month + " " + dateObj.getFullYear();
    }

}
