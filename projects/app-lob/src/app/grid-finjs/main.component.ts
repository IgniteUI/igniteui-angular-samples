import { Component, EventEmitter, HostBinding, OnDestroy, Output, ViewChild } from '@angular/core';
import { IDialogEventArgs, IgxDialogComponent } from 'igniteui-angular';
import { IgxCategoryChartComponent } from 'igniteui-angular-charts';
import { ControllerComponent } from './controllers.component';
import { GridFinJSComponent } from './grid-finjs.component';

@Component({
    selector: 'app-finjs-main',
    styleUrls: ['./main.component.scss'],
    templateUrl: './main.component.html'
})
export class FinJSDemoComponent implements OnDestroy {
    @ViewChild('finGrid', { static: true }) public finGrid: GridFinJSComponent;
    @ViewChild('controllers', { static: true }) public controller: ControllerComponent;
    @ViewChild('dialog', { static: true }) public dialog: IgxDialogComponent;
    @ViewChild('chart1', { static: true }) public chart: IgxCategoryChartComponent;

    @Output() public switch = new EventEmitter<any>();
    @Output() public recordsVolume = new EventEmitter<any>();
    @Output() public frequencyTimer = new EventEmitter<any>();
    @Output() public player = new EventEmitter<any>();

    @HostBinding('class.dark-theme')
    public darkTheme = false;

    public properties = ['price', 'country'];
    public chartData = [];
    public volume = 1000;
    public frequency = 500;
    private _timer;

    constructor() {
    }

    public onSwitchChanged(event: any) {
        switch (event.action) {
            case 'toolbar': {
                this.finGrid.showToolbar = event.value;
                break;
            }
            case 'grouped': {
                this.finGrid.toggleGrouping();
                break;
            }
            case 'theme': {
                this.darkTheme = event.value;
                break;
            }
            default: break;
        }
    }

    public onVolumeChanged(volume: any) {
        this.volume = volume;
        this.finGrid.dataService.hasRemoteConnection ? this.finGrid.dataService
            .broadcastParams(this.controller.frequency, this.volume, false) : this.finGrid.dataService.getData(volume);
    }

    public onFrequencyChanged(frequency: any) {
        this.frequency = frequency;
    }

    public onPlayAction(event: any) {
        switch (event.action) {
            case 'playAll': {
                if (this.finGrid.dataService.hasRemoteConnection) {
                    this.finGrid.dataService.broadcastParams(this.frequency, this.volume, true);
                } else {
                    const currData = this.finGrid.grid.filteredSortedData ?? this.finGrid.grid.data;
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
                    this.dialog.open();
                } else {
                    this.controller.toast.open('Please select some rows first!');
                };
                break;
            }
            default:
                {
                    break;
                }
        }
    }

    public setChartData(args: any[]) {
        this.chartData = [];
        args.forEach(row => {
            this.chartData.push(this.finGrid.grid.data[row]);
            this.chart.notifyInsertItem(this.chartData, this.chartData.length - 1,
                this.finGrid.grid.data[row]);
        });
        // this.controller.controls[2].disabled = this.chartData.length === 0;
        this.setLabelIntervalAndAngle();
        this.setChartConfig('Countries', 'Prices (USD)', 'Data Chart with prices by Category and Country');
    }

    public onCloseHandler(evt: IDialogEventArgs) {
        if (this.finGrid.grid.navigation.activeNode) {
            if (this.finGrid.grid.navigation.activeNode.row === -1) {
                this.finGrid.grid.theadRow.nativeElement.focus();
            } else {
                this.finGrid.grid.tbody.nativeElement.focus();
            }
            this.controller.playButtons.deselectButton(2);
        }
    }

    public closeDialog() {
        this.controller.playButtons.deselectButton(2);
        this.dialog.close();
    }

    public setChartConfig(xAsis, yAxis, title) {
        // update label interval and angle based on data
        this.setLabelIntervalAndAngle();
        this.chart.xAxisTitle = xAsis;
        this.chart.yAxisTitle = yAxis;
        this.chart.chartTitle = title;
    }

    public setLabelIntervalAndAngle() {
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

    public openSingleRowChart(rowData: any) {
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

    public stopFeed() {
        if (this._timer) {
            clearInterval(this._timer);
        }
    }

    public ngOnDestroy() {
        this.stopFeed();
    }
}
