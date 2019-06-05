import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    NgZone,
    OnDestroy,
    ViewChild
} from "@angular/core";
import { FinancialChartType } from "igniteui-angular-charts/ES5/FinancialChartType";
import { FinancialChartVolumeType } from "igniteui-angular-charts/ES5/FinancialChartVolumeType";
import { FinancialChartZoomSliderType } from "igniteui-angular-charts/ES5/FinancialChartZoomSliderType";
import { FinancialIndicatorType } from "igniteui-angular-charts/ES5/FinancialIndicatorType";
import { FinancialOverlayType } from "igniteui-angular-charts/ES5/FinancialOverlayType";
import { IgxFinancialChartComponent } from "igniteui-angular-charts/ES5/igx-financial-chart-component";
import { FinancialIndicatorTypeCollection } from "igniteui-angular-charts/ES5/igx-financial-indicator-type-collection";
import { FinancialOverlayTypeCollection } from "igniteui-angular-charts/ES5/igx-financial-overlay-type-collection";
import { StockDataService } from "../services/stock-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ StockDataService ],
    selector:  "app-financial-chart-panes",
    styleUrls: [ "./financial-chart-panes.component.scss"],
    templateUrl: "./financial-chart-panes.component.html"
})

export class FinancialChartPanesComponent implements AfterViewInit {

    public data: any[];
    @ViewChild("chart", { static: true })
    public chart: IgxFinancialChartComponent;

    constructor(private dataService: StockDataService) {
        this.data = this.dataService.GetStockTSLA();

    }

    public ngAfterViewInit(): void {

        this.chart.chartType = FinancialChartType.Candle;
        this.chart.zoomSliderType = FinancialChartZoomSliderType.Candle;
        this.chart.volumeType = FinancialChartVolumeType.Area;
        this.chart.indicatorTypes.add(FinancialIndicatorType.ForceIndex);
        this.chart.overlayTypes.add(FinancialOverlayType.PriceChannel);
    }
}
