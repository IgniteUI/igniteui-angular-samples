import { AfterViewInit, Component, ElementRef, OnInit, OnDestroy, ViewChild, HostBinding } from '@angular/core';
import {
    AbsoluteScrollStrategy, ConnectedPositioningStrategy, HorizontalAlignment,
    IgxButtonGroupComponent, IgxOverlayOutletDirective, IgxSliderComponent, IgxTreeGridComponent, OverlaySettings,
    PositionSettings, SortingDirection, VerticalAlignment
} from 'igniteui-angular';
import { Contract, REGIONS } from '../data/financialData';
import { ITreeGridAggregation } from './tree-grid-grouping.pipe';
import { SignalRService } from '../services/signal-r.service';

@Component({
    providers: [SignalRService],
    selector: 'app-tree-grid-finjs-sample',
    styleUrls: ['./tree-grid-finjs-sample.component.scss'],
    templateUrl: './tree-grid-finjs-sample.component.html'
})

export class TreeGridFinJSComponent implements AfterViewInit, OnDestroy, OnInit {
    @ViewChild('grid1', { static: true }) public grid1: IgxTreeGridComponent;
    @ViewChild('buttonGroup1', { static: true }) public buttonGroup1: IgxButtonGroupComponent;
    @ViewChild('slider1', { static: true }) public volumeSlider: IgxSliderComponent;
    @ViewChild('slider2', { static: true }) public intervalSlider: IgxSliderComponent;
    @ViewChild(IgxOverlayOutletDirective, { static: true }) public outlet: IgxOverlayOutletDirective;

    @HostBinding('class.dark-theme')
    public theme = false;

    public showToolbar = true;
    public selectionMode = 'multiple';
    public volume = 1000;
    public frequency = 500;
    public data$: any;
    public overlaySettings: OverlaySettings = {
        modal: false
    };
    public controls = [
        {
            disabled: false,
            icon: 'update',
            label: 'LIVE ALL PRICES',
            selected: false
        },
        {
            disabled: true,
            icon: 'stop',
            label: 'Stop',
            selected: false
        }
    ];
    public groupColumns = ['category', 'type', 'contract'];
    public aggregations: ITreeGridAggregation[] = [
        {
            aggregate: (parent: any, data: any[]) => data.map((r) => r.change).reduce((ty, u) => ty + u, 0),
            field: 'change'
        },
        {
            aggregate: (parent: any, data: any[]) => data.map((r) => r.price).reduce((ty, u) => ty + u, 0),
            field: 'price'
        },
        {
            aggregate: (parent: any, data: any[]) => parent.change / (parent.price - parent.change) * 100,
            field: 'changeP'
        }
    ];
    public primaryKey = 'id';
    public childDataKey = 'children';
    public groupColumnKey = 'categories';

    public items: any[] = [{ field: 'Export native' }, { field: 'Export JS Excel' }];

    public _positionSettings: PositionSettings = {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
        scrollStrategy: new AbsoluteScrollStrategy()
    };

    public contracts = Contract;
    public regions = REGIONS;
    public isLoading = true;

    private subscription;
    private selectedButton;
    private _timer;

    constructor(private elRef: ElementRef, public dataService: SignalRService) {
        this.dataService.startConnection();
        this.overlaySettings.outlet = this.outlet;
        this.data$ = this.dataService.data;
        this.dataService.getData(0);

        this.data$.subscribe((data) => {
            if (data.length !== 0) {
                this.isLoading = false;
            };
        });
    }

    public ngOnInit() {
        this.overlaySettings.outlet = this.outlet;
        this.grid1.sortingExpressions = [{ fieldName: this.groupColumnKey, dir: SortingDirection.Desc }];
    }

    public ngAfterViewInit() {
        this.groupColumns.forEach(col => {
            const column = this.grid1.getColumnByName(col);
            if (column) {
                column.hidden = !column.hidden;
            }
        });
        this.grid1.reflow();
    }

    public onButtonAction(event: any) {
        switch (event.index) {
            case 0: {
                this.disableOtherButtons(event.index, true);
                if (this.dataService.hasRemoteConnection) {
                    this.dataService.broadcastParams(this.frequency, this.volume, true);
                } else {
                    const currData = this.grid1.filteredSortedData ?? this.grid1.data;
                    this._timer = setInterval(() => this.dataService.updateAllPriceValues(currData), this.frequency);
                }
                break;
            }
            case 1: {
                if (this.dataService.hasRemoteConnection) {
                    this.dataService.stopLiveData();
                } else {
                    this.stopFeed();
                }
                this.disableOtherButtons(event.index, false);
                break;
            }
            default: break;
        }
    }

    updateVolume() {
        this.dataService.hasRemoteConnection ? this.dataService.broadcastParams(this.frequency, this.volume, false) :
        this.dataService.getData(this.volume);
    }

    public stopFeed() {
        if (this._timer) {
            clearInterval(this._timer);
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    public formatNumber(value: number) {
        return value ? value.toFixed(2) : '';
    }

    public percentage(value: number) {
        return value ? value.toFixed(2) + '%' : '';
    }

    public formatCurrency(value: number) {
        return value ? '$' + value.toFixed(3) : '';
    }

    /**
     * the below code is needed when accessing the sample through the navigation
     * it will style all the space below the sample component element, but not the navigation menu
     */
    public onThemeChanged(event: any) {
        const parentEl = this.parentComponentEl();
        if (event.checked && parentEl.classList.contains('main')) {
            parentEl.classList.add('fin-dark-theme');
        } else {
            parentEl.classList.remove('fin-dark-theme');
        }
    }

    public ngOnDestroy() {
        this.stopFeed();
    }

    public toggleToolbar() {
        this.showToolbar = !this.showToolbar;
    }

    private negative = (rowData: any): boolean => rowData['changeP'] < 0;
    private positive = (rowData: any): boolean => rowData['changeP'] > 0;
    private changeNegative = (rowData: any): boolean => rowData['changeP'] < 0 && rowData['changeP'] > -1;
    private changePositive = (rowData: any): boolean => rowData['changeP'] > 0 && rowData['changeP'] < 1;
    private strongPositive = (rowData: any): boolean => rowData['changeP'] >= 1;
    private strongNegative = (rowData: any, key: string): boolean => rowData['changeP'] <= -1;

    /* eslint-disable @typescript-eslint/member-ordering */
    public trends = {
        changeNeg: this.changeNegative,
        changePos: this.changePositive,
        negative: this.negative,
        positive: this.positive,
        strongNegative: this.strongNegative,
        strongPositive: this.strongPositive
    };

    public trendsChange = {
        changeNeg2: this.changeNegative,
        changePos2: this.changePositive,
        strongNegative2: this.strongNegative,
        strongPositive2: this.strongPositive
    };
    /* eslint-enable @typescript-eslint/member-ordering */

    private disableOtherButtons(ind: number, disableButtons: boolean) {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.volumeSlider.disabled = disableButtons;
        this.intervalSlider.disabled = disableButtons;
        this.selectedButton = ind;
        this.buttonGroup1.buttons.forEach((button, index) => {
            if (index === 1) { button.disabled = !disableButtons; } else {
                button.disabled = disableButtons;
            }
        });
    }

    /**
     * returns the main div container of the Index Component,
     * if path is /samples/sample-url, or the appRoot, if path is /sample-url
     */
    private parentComponentEl() {
        return this.elRef.nativeElement.parentElement.parentElement;
    }

    get buttonSelected(): number {
        return this.selectedButton || this.selectedButton === 0 ? this.selectedButton : -1;
    }
}
