/* eslint-disable max-len */
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IgxChartIntegrationDirective, IgxContextMenuDirective, IgxConditionalFormattingDirective,  OPTIONS_TYPE, CHART_TYPE, PageHeaderComponent } from 'igniteui-angular-extras';

import { FinancialData } from '../data/financialData';
import { IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { DecimalPipe, CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-grid-dynamic-chart-data',
    templateUrl: './grid-dynamic-chart-data.component.html',
    styleUrls: ['./grid-dynamic-chart-data.component.scss'],
    imports: [IgxGridComponent, PageHeaderComponent, IgxChartIntegrationDirective, IgxConditionalFormattingDirective, IgxContextMenuDirective, IgxColumnComponent, IgxCellTemplateDirective, DecimalPipe, CurrencyPipe]
})
export class GridDynamicChartDataComponent implements OnInit, AfterViewInit {

    public data;

    @ViewChild(IgxChartIntegrationDirective, {static: false})
    public chartDirective: IgxChartIntegrationDirective;

    public ngOnInit() {
        this.data = FinancialData.generateData(1000);
    }

    public ngAfterViewInit() {
      const pieChartOptions = {
        labelsPosition: 4,
        allowSliceExplosion: true,
        sliceClick: (evt) => { evt.args.isExploded = !evt.args.isExploded; },
        formatLabel: (context) => `${context.percentValue.toFixed(2)}%`
      };

      this.chartDirective.setChartComponentOptions(CHART_TYPE.PIE, OPTIONS_TYPE.CHART, pieChartOptions);
      this.chartDirective.getAvailableCharts()
                         .filter(chart => chart.indexOf('Scatter') === -1 ||
                                          chart.indexOf('Bar') === -1 ||
                                          chart !== CHART_TYPE.PIE)
                         .forEach(chart => this.chartDirective.setChartComponentOptions(chart, OPTIONS_TYPE.X_AXIS, {labelAngle: 30}));
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(3);
    }
}