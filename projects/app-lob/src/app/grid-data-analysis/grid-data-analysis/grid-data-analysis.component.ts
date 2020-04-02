// tslint:disable: max-line-length
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { CHART_TYPE, IDeterminedChartTypesArgs, IgxChartIntegrationDirective, OPTIONS_TYPE } from "@infragistics/igniteui-angular-extras";
import { FinancialData } from "../../services/financialData";
@Component({
  selector: "grid-data-analysis",
  templateUrl: "./grid-data-analysis.component.html",
  styleUrls: ["./grid-data-analysis.component.scss"]
})
export class GridDataAnalysisComponent implements OnInit, AfterViewInit {

  public data;

  @ViewChild(IgxChartIntegrationDirective, {read: IgxChartIntegrationDirective})
  public chartIntegrationDirective: IgxChartIntegrationDirective;

  public ngOnInit() {
      this.data = new FinancialData().generateData(1000);
  }

  public ngAfterViewInit() {
    this.chartIntegrationDirective.onChartTypesDetermined.subscribe((args: IDeterminedChartTypesArgs) => {
      args.chartsAvailabilty.forEach((isAvailable, chart) => {
          if (args.chartsForCreation.indexOf(chart) === -1) {
              this.chartIntegrationDirective.disableCharts([chart]);
          } else {
              this.chartIntegrationDirective.enableCharts([chart]);
          }
      });
   });
    const pieChartOptions = {
      labelsPosition: 4,
      allowSliceExplosion: true,
      sliceClick: (evt) => { evt.args.isExploded = !evt.args.isExploded; },
      formatLabel: (context) => `${context.percentValue.toFixed(2)}%`
    };
    this.chartIntegrationDirective.setChartComponentOptions(CHART_TYPE.PIE, OPTIONS_TYPE.CHART, pieChartOptions);
    this.chartIntegrationDirective.getAvailableCharts()
                       .filter(chart => chart.indexOf("Scatter") === -1 ||
                                        chart.indexOf("Bar") === -1 ||
                                        chart !== CHART_TYPE.PIE)
                       .forEach(chart => this.chartIntegrationDirective.setChartComponentOptions(chart, OPTIONS_TYPE.X_AXIS, {labelAngle: 30}));
  }

  public formatCurrency(value: number) {
      return "$" + value.toFixed(3);
  }

}
