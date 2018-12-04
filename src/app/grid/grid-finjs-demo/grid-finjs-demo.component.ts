import { AfterViewInit, Component, ElementRef, NgZone, OnInit, QueryList, ViewChild } from "@angular/core";
import { AbsoluteScrollStrategy, ConnectedPositioningStrategy, DefaultSortingStrategy, HorizontalAlignment,
    IgxButtonGroupComponent, IgxColumnComponent, IgxDropDownComponent, IgxExcelExporterOptions,
    IgxExcelExporterService, IgxGridCellComponent, IgxGridComponent, IgxSliderComponent,
    OverlaySettings, PositionSettings,
    SortingDirection, VerticalAlignment} from "igniteui-angular";
import { Observable } from "rxjs";
import { LocalDataService } from "../services/localData.service";

interface IButton {
    ripple ?: string;
    label ?: string;
    disabled ?: boolean;
    togglable ?: boolean;
    selected ?: boolean;
    color ?: string;
    icon ?: string;
}

class Button {
    private ripple: string;
    private label: string;
    private disabled: boolean;
    private togglable: boolean;
    private selected: boolean;
    private color: string;
    private icon: string;

    constructor(obj ?: IButton) {
        this.label = obj.label;
        this.selected = obj.selected || false;
        this.togglable = obj.togglable;
        this.disabled = obj.disabled || false;
        this.color = obj.color;
        this.icon = obj.icon;
    }
}

@Component({
    providers: [LocalDataService],
    selector: "app-grid-component",
    styleUrls: ["./grid-finjs-demo.component.scss"],
    templateUrl: "./grid-finjs-demo.component.html"
})
export class FinJSDemoComponent implements OnInit, AfterViewInit {
    @ViewChild("grid1") public grid1: IgxGridComponent;
    @ViewChild("buttonGroup1") public buttonGroup1: IgxButtonGroupComponent;

    @ViewChild("slider1") public volumeSlider: IgxSliderComponent;
    @ViewChild("slider2") public intervalSlider: IgxSliderComponent;

    @ViewChild("hidingButton") public hidingButton: ElementRef;
    @ViewChild("pinningButton") public pinningButton: ElementRef;

    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    public cols: QueryList<IgxColumnComponent>;

    public theme = false;
    public volume = 1000;
    public frequency = 500;
    public data: Observable < any[] > ;
    public recordsUpdatedLastSecond: number[] ;
    public controls = [
        new Button({
            disabled: false,
            icon: "update",
            label: "LIVE PRICES",
            selected: false
        }),
        new Button({
            disabled: false,
            icon: "update",
            label: "LIVE ALL PRICES",
            selected: false
        }),
        new Button({
            disabled: true,
            icon: "stop",
            label: "Stop",
            selected: false
        })
    ];

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

    private subscription;
    private selectedButton;
    private _timer;

    // tslint:disable-next-line:member-ordering
    constructor(private zone: NgZone, private localService: LocalDataService) {
        this.subscription = this.localService.getData(this.volume);
        this.data = this.localService.records;
    }
    // tslint:disable-next-line:member-ordering
    public ngOnInit() {
        if (this.theme) {
            document.body.classList.add("dark-theme");
        }
        this.grid1.groupingExpressions = [{
                dir: SortingDirection.Desc,
                fieldName: "Category",
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: "Type",
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: "Contract",
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            }
        ];
    }

    public ngAfterViewInit() {
        this.cols = this.grid1.columnList;
        this.grid1.reflow();
    }

    public chartClick(cell: IgxGridCellComponent) {
        // TODO
        // cell.column.field returns the column
    }

    public onButtonAction(event: any) {
        switch (event.index) {
            case 0:
                {
                    this.disableOtherButtons(event.index, true);
                    const currData = this.grid1.data;
                    this._timer = setInterval(() => this.ticker(currData), this.frequency);
                    break;
                }
            case 1:
                {
                    this.disableOtherButtons(event.index, true);
                    const currData = this.grid1.data;
                    this._timer = setInterval(() => this.tickerAllPrices(currData), this.frequency);
                    break;
                }
                case 2:
                {
                    this.disableOtherButtons(event.index, false);
                    this.stopFeed();
                    break;
                }
            default:
                {
                    break;
                }
        }
    }

    public onChange(event: any) {
        if (this.grid1.groupingExpressions.length > 0) {
            this.grid1.groupingExpressions = [];
        } else {
            this.grid1.groupingExpressions = [{
                dir: SortingDirection.Desc,
                fieldName: "Category",
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: "Type",
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            },
            {
                dir: SortingDirection.Desc,
                fieldName: "Contract",
                ignoreCase: false,
                strategy: DefaultSortingStrategy.instance()
            }
        ];
        }
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
        return value.toFixed(2);
    }

    public percentage(value: number) {
        return value.toFixed(2) + "%";
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(3);
    }

    public groupingDone(event: any) {
        // event.forEach(expr => {
        //     this.grid1.columnList.filter(c => c.field === expr.fieldName)[0].hidden = true;
        // });
    }

    public onVolumeChanged(event: any) {
        this.localService.getData(this.volume);
    }

    public onFrequencyChanged(event: any) {
    }

    private negative = (rowData: any): boolean => {
        return rowData["Change(%)"] < 0;
    }
    private positive = (rowData: any): boolean => {
        return rowData["Change(%)"] > 0;
    }
    private changeNegative = (rowData: any): boolean => {
        return rowData["Change(%)"] < 0 && rowData["Change(%)"] > -1;
    }
    private changePositive = (rowData: any): boolean => {
        return rowData["Change(%)"] > 0 && rowData["Change(%)"] < 1;
    }
    private strongPositive = (rowData: any): boolean => {
        return rowData["Change(%)"] >= 1;
    }
    private strongNegative = (rowData: any, key: string): boolean => {
        return rowData["Change(%)"] <= -1;
    }

    // tslint:disable-next-line:member-ordering
    public trends = {
        changeNeg: this.changeNegative,
        changePos: this.changePositive,
        negative: this.negative,
        positive: this.positive,
        strongNegative: this.strongNegative,
        strongPositive: this.strongPositive
    };
    // tslint:disable-next-line:member-ordering
    public trendsChange = {
        changeNeg2: this.changeNegative,
        changePos2: this.changePositive,
        strongNegative2: this.strongNegative,
        strongPositive2: this.strongPositive
    };
    // tslint:disable-next-line:member-ordering
    public buttonCols = {
        buttonCols: true
    };

    private disableOtherButtons(ind: number, disableButtons: boolean) {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.volumeSlider.disabled = disableButtons;
        this.intervalSlider.disabled = disableButtons;
        this.selectedButton = ind;
        this.buttonGroup1.buttons.forEach((button, index) => {
            if (index === 2) { button.disabled = !disableButtons; } else {
                button.disabled = disableButtons;
            }
        });
    }

    // private updateRandomData(data?: any[]) {
    //     const currData = data ? data : this.grid1.data;
    //     this.subscription = this.localService.updateRandomData(currData);
    //     this.zone.run(() => {});
    // }

    get grouped(): boolean {
        return this.grid1.groupingExpressions.length > 0;
    }

    get buttonSelected(): number {
      return this.selectedButton || this.selectedButton === 0 ? this.selectedButton : -1;
    }

    // tslint:disable-next-line:member-ordering
    public ticker(data: any) {
        this.zone.runOutsideAngular(() => {
            this.grid1.data = this.updateRandomPrices(data);
            this.zone.run(() => this.grid1.markForCheck());
        });
    }

    // tslint:disable-next-line:member-ordering
    public tickerAllPrices(data: any) {
        this.zone.runOutsideAngular(() => {
            this.grid1.data = this.updateAllPrices(data);
            this.zone.run(() => this.grid1.markForCheck());
        });
    }

    // tslint:disable-next-line:member-ordering
    public updateAllPrices(data: any[]): any {
        const currData = [];
        for (const dataRow of data) {
          this.randomizeObjectData(dataRow);
        }
        return data;
      }

    // tslint:disable-next-line:member-ordering
    public updateRandomPrices(data: any[]): any {
        let y = 0;
        for (let i = Math.round(Math.random() * 10); i < data.length; i += Math.round(Math.random() * 10)) {
          this.randomizeObjectData(data[i]);
          y++;
        }
       // return {data: currData, recordsUpdated: y };
        return data;
      }

    private randomizeObjectData(dataObj) {
        const changeP = "Change(%)";
        const res = this.generateNewPrice(dataObj.Price);
        dataObj.Change = res.Price - dataObj.Price;
        dataObj.Price = res.Price;
        dataObj[changeP] = res.ChangePercent;
    }
    private generateNewPrice(oldPrice): any {
        const rnd = parseFloat(Math.random().toFixed(2));
        const volatility = 2;
        let newPrice = 0;

        let changePercent = 2 * volatility * rnd;
        if (changePercent > volatility) {
            changePercent -= (2 * volatility);
        }

        const changeAmount = oldPrice * (changePercent / 100);
        newPrice = oldPrice + changeAmount;

        const result = {Price: 0, ChangePercent: 0};
        result.Price = parseFloat(newPrice.toFixed(2));
        result.ChangePercent = parseFloat(changePercent.toFixed(2));

        return result;
    }
}
