import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxColumnComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-resizing",
    styleUrls: ["./hierarchical-grid-resizing.component.css"],
    templateUrl: "hierarchical-grid-resizing.component.html"
})

export class HGridColumnResizingSampleComponent implements OnInit {
    public years = 10;
    public localdata: any[];
    public col: IgxColumnComponent;
    public pWidth: string;
    public nWidth: string;

    @ViewChild("hierarchicalGrid", { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        const singers = SINGERS;
        for (const singer of singers) {
            this.getSales(singer);
        }
        this.localdata = singers;
    }

    public ngOnInit(): void {

    }

    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }

    public getSales(singer: any): any {
        singer["Sales"] = this.getSalesData(10);
    }

    public getSalesData(years?: number): any[] {
        if (years === undefined) {
            years = 20;
        }
        const sales: any[] = [];
        for (let y = 0; y < years; y++) {
            const value = this.getRandomNumber(0, 1000);
            sales.push({Copies: value, Year: y});
        }
        return sales;
    }

    public  getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    public formatter = (a) => a;
}
