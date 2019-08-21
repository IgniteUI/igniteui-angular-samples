import { AfterViewInit, Component, Inject, OnInit, ViewChild  } from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import { IgxCategoryChartComponent } from "igniteui-angular-charts/ES5/igx-category-chart-component";

@Component({
  selector: "app-context-dialog-with-chart",
  templateUrl: "./context-dialog-with-chart.component.html",
  styleUrls: ["./context-dialog-with-chart.component.scss"]
})

export class ContextDialogWithChartComponent implements OnInit, AfterViewInit {
    @ViewChild("chart1", { static: true }) public chart1: IgxCategoryChartComponent;
    public price = ["Price", "Country"];

    constructor(public dialog: MatDialogModule,
                public dialogRef: MatDialogRef<ContextDialogWithChartComponent>,
                @Inject(MAT_DIALOG_DATA) public data) {

    }

    public onNoClick(): void {
        this.dialogRef.close();
    }

    public ngOnInit() {
    }

    public ngAfterViewInit() {
         // update interval based on data
         const intervalSet = this.data.length;
         if (intervalSet < 10) {
            this.chart1.xAxisLabelAngle = 0;
            this.chart1.xAxisInterval = 1;
         } else if (intervalSet < 15) {
            this.chart1.xAxisLabelAngle = 30;
            this.chart1.xAxisInterval = 1;
         } else if (intervalSet < 30) {
            this.chart1.xAxisLabelAngle = 90;
            this.chart1.xAxisInterval = 1;
         } else if (intervalSet > 50) {
            this.chart1.xAxisLabelAngle = 90;
            this.chart1.xAxisInterval = 20;
         }

         this.chart1.yAxisAbbreviateLargeNumbers = true;
         this.chart1.xAxisTitle = "Countries";
         this.chart1.yAxisTitle = "Prices (USD)";
         this.chart1.chartTitle = "Data Chart with Prices By Country";
    }

}
