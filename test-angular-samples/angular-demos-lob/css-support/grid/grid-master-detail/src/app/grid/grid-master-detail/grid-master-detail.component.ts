import { Component, ViewChild } from "@angular/core";
import { IgxColumnComponent } from "igniteui-angular";
import { IgxLegendComponent } from "igniteui-angular-charts";
import { data } from "../../services/athletesData";

@Component({
    selector: "grid-master-detail",
    styleUrls: ["./grid-master-detail.component.css"],
    templateUrl: "grid-master-detail.component.html"
})

export class GridMasterDetailSampleComponent {
    @ViewChild("legend", { static: true })
    public legend: IgxLegendComponent;

    public data = [];
    public include = ["date", "estimated", "actual"];
    constructor() {
        this.data = data;
    }

    public getHeight(selectedIndex) {
        switch (selectedIndex) {
            case 0: return 250;
            case 1: return 320;
            case 2: return 400;
            default: return 250;
        }
    }

    public formatPieLabel = (args) => {
        return args.item.Value + " " + args.item.Label;
    }

    public formatDateLabel(item: any): string {
        return item.date.toLocaleDateString(undefined, { month: "short" });
    }

    public formatValue(val: any): string {
        return val.toLocaleString("en-us", { maximumFractionDigits: 2 });
    }
    public getPieData(dataItem) {
        return [
            { Label: "Won", Value: dataItem.deals_won },
            { Label: "Lost", Value: dataItem.deals_lost },
            { Label: "Pending", Value: dataItem.deals_pending }];
    }

    public getChartData(dataItem) {
        const year: number = new Date().getFullYear();
        const sales: any[] = [];
        for (let i = 0; i < 12; i++) {
            const value = this.getRandomNumber(2000, 10000);
            sales.push({
                estimated: value + this.getRandomNumber(-2000, 1000),
                actual: value, date: new Date(year, i, 1)
            });
        }
        dataItem.chartData = sales;
        return dataItem.chartData;
    }

    public gridData(dataItem) {
        const detailsData = [];
        let won = dataItem.deals_won;
        let lost = dataItem.deals_lost;
        let pending = dataItem.deals_pending;
        for (let j = 0; j < 3; j++) {
            detailsData.push({
                Q: "Q" + (j + 1),
                Won: this.getRandomNumber(0, won),
                Lost: this.getRandomNumber(0, lost),
                Pending: this.getRandomNumber(0, pending)
            });
            won -= detailsData[j].Won;
            lost -= detailsData[j].Lost;
            pending -= detailsData[j].Pending;
        }
        detailsData.push({
            Q: "Q4",
            Won: won,
            Lost: lost,
            Pending: pending
        });
        dataItem.gridData = detailsData;
        return dataItem.gridData;
    }

    public columnInit(event: IgxColumnComponent) {
        if (event.field === "Q") {
            event.width = "50px";
            event.header = " ";
        }
    }

    public getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }
}
