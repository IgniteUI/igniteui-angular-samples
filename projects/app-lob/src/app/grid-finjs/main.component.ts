import { AfterViewInit, Component, HostBinding, OnDestroy, ViewChild } from '@angular/core';
import { IgxDialogComponent, IgxOverlayOutletDirective, OverlaySettings } from 'igniteui-angular';
import { IgxCategoryChartComponent } from 'igniteui-angular-charts';
import { Stock } from '../data/financialData';
import { ControllerComponent } from './controllers.component';
import { GridFinJSComponent } from './grid-finjs.component';

@Component({
    selector: 'app-finjs-main',
    styleUrls: ['./main.component.scss'],
    templateUrl: './main.component.html'
})
export class FinJSDemoComponent implements OnDestroy, AfterViewInit {
    @ViewChild('finGrid', { static: true }) public finGrid: GridFinJSComponent;
    @ViewChild('controllers', { static: true }) public controller: ControllerComponent;
    @ViewChild('dialog', { static: true }) public dialog: IgxDialogComponent;
    @ViewChild('chart1', { static: true }) public chart: IgxCategoryChartComponent;
    @ViewChild(IgxOverlayOutletDirective, { static: true }) public outlet: IgxOverlayOutletDirective;

    public overlaySettings: OverlaySettings = {
        modal: false,
        closeOnOutsideClick: true
    };

    public properties = ['price', 'country'];
    public chartData: Stock[] = [];
    public volume = 1000;
    public frequency = 500;
    private _timer: ReturnType<typeof setInterval>;

    public onSwitchChanged(event: { action: string; value: boolean }): void {
        switch (event.action) {
            case 'toolbar': {
                this.finGrid.showToolbar = event.value;
                break;
            }
            case 'grouped': {
                this.finGrid.toggleGrouping();
                break;
            }
            default: break;
        }
    }

    public ngAfterViewInit(): void {
        this.overlaySettings.outlet = this.outlet;
    }

    public onVolumeChanged(volume: number): void {
        this.volume = volume;
        this.finGrid.dataService.hasRemoteConnection ? this.finGrid.dataService
            .broadcastParams(this.controller.frequency, this.volume, false) : this.finGrid.dataService.getData(volume);
    }

    public onFrequencyChanged(frequency: number): void {
        this.frequency = frequency;
    }

    public onPlayAction(event: { action: string }): void {
        switch (event.action) {
            case 'playAll': {
                if (this.finGrid.dataService.hasRemoteConnection) {
                    this.finGrid.dataService.broadcastParams(this.frequency, this.volume, true);
                } else {
                    const currData: Stock[] = this.finGrid.grid.filteredSortedData ?? this.finGrid.grid.data;
                    this._timer = setInterval(() => this.finGrid.dataService.updateAllPriceValues(currData), this.controller.frequency);
                }
                break;
            }
            case 'stop': {
                this.finGrid.dataService.hasRemoteConnection ? this.finGrid.dataService.stopLiveData() : this.stopFeed();
                break;
            }
            case 'chart': {
                if (this.finGrid.grid.selectedRows.length !== 0) {
                    this.setChartData(this.finGrid.grid.selectedRows);
                    this.dialog.open(this.overlaySettings);
                } else {
                    this.controller.toast.open('Please select some rows first!');
                };
                break;
            }
            default: {
                break;
            }
        }
    }

    public setChartData(args: Stock[]): void {
        this.chartData = [];
        args.forEach(rowKey => {
            const row: Stock = this.finGrid.grid.getRowByKey(rowKey).data;
            this.chartData.push(row);
            this.chart.notifyInsertItem(this.chartData, this.chartData.length - 1, row);
        });
        // this.controller.controls[2].disabled = this.chartData.length === 0;
        this.setLabelIntervalAndAngle();
        this.setChartConfig('Countries', 'Prices (USD)', 'Data Chart with prices by Category and Country');
    }

    public onCloseHandler(): void {
        if (this.finGrid.grid.navigation.activeNode) {
            if (this.finGrid.grid.navigation.activeNode.row === -1) {
                this.finGrid.grid.theadRow.nativeElement.focus();
            } else {
                this.finGrid.grid.tbody.nativeElement.focus();
            }
            this.controller.playButtons.deselectButton(2);
        }
    }

    public closeDialog(): void {
        this.controller.playButtons.deselectButton(2);
        this.dialog.close();
    }

    public setChartConfig(xAsis: string, yAxis: string, title: string): void {
        // update label interval and angle based on data
        this.setLabelIntervalAndAngle();
        this.chart.xAxisTitle = xAsis;
        this.chart.yAxisTitle = yAxis;
        this.chart.chartTitle = title;
    }

    public setLabelIntervalAndAngle(): void {
        const intervalSet = this.chartData.length;
        if (intervalSet < 10) {
            this.chart.xAxisLabelAngle = 0;
            this.chart.xAxisInterval = 1;
        } else if (intervalSet < 15) {
            this.chart.xAxisLabelAngle = 30;
            this.chart.xAxisInterval = 1;
        } else if (intervalSet < 40) {
            this.chart.xAxisLabelAngle = 90;
            this.chart.xAxisInterval = 1;
        } else if (intervalSet < 100) {
            this.chart.xAxisLabelAngle = 90;
            this.chart.xAxisInterval = 3;
        } else if (intervalSet < 200) {
            this.chart.xAxisLabelAngle = 90;
            this.chart.xAxisInterval = 5;
        } else if (intervalSet < 400) {
            this.chart.xAxisLabelAngle = 90;
            this.chart.xAxisInterval = 7;
        } else if (intervalSet > 400) {
            this.chart.xAxisLabelAngle = 90;
            this.chart.xAxisInterval = 10;
        }
        this.chart.yAxisAbbreviateLargeNumbers = true;
    }

    public openSingleRowChart(rowData: Stock): void {
        this.chartData = [];
        setTimeout(() => {
            this.chartData = this.finGrid.grid.data.filter(item => item.region === rowData.region &&
                item.category === rowData.category);

            this.chart.notifyInsertItem(this.chartData, this.chartData.length - 1, {});

            this.setLabelIntervalAndAngle();
            this.chart.chartTitle = 'Data Chart with prices of ' + this.chartData[0].category + ' in ' +
                this.chartData[0].region + ' Region';

            this.dialog.open();
        }, 200);
    }

    public stopFeed(): void {
        if (this._timer) {
            clearInterval(this._timer);
        }
    }

    public ngOnDestroy(): void {
        this.stopFeed();
    }
}
