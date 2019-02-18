
import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild } from "@angular/core";
import { AbsoluteScrollStrategy, ConnectedPositioningStrategy, DataUtil, HorizontalAlignment,
    IgxButtonGroupComponent, IgxSliderComponent, IgxTreeGridComponent, OverlaySettings,
    PositionSettings,
    VerticalAlignment} from "igniteui-angular";
import { LocalDataService } from "../grid-finjs/localData.service";
import { ITreeGridAggregation } from "./tree-grid-grouping.pipe";

interface IButton {
    ripple ?: string;
    label ?: string;
    disabled ?: boolean;
    togglable ?: boolean;
    selected ?: boolean;
    color ?: string;
    icon ?: string;
}

export class Button {
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
    selector: "app-tree-grid-finjs-sample",
    styleUrls: ["./tree-grid-finjs-sample.component.scss"],
    templateUrl: "./tree-grid-finjs-sample.component.html"
})

export class TreeGridFinJSComponent implements AfterViewInit, OnDestroy  {
    @ViewChild("grid1") public grid1: IgxTreeGridComponent;
    @ViewChild("buttonGroup1") public buttonGroup1: IgxButtonGroupComponent;

    @ViewChild("slider1") public volumeSlider: IgxSliderComponent;
    @ViewChild("slider2") public intervalSlider: IgxSliderComponent;

    public theme = false;
    public volume = 1000;
    public frequency = 500;
    public data: any[] = [];
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
    public groupColumns = ["Category", "Type", "Contract"];
    public aggregations: ITreeGridAggregation[] = [
        {
            aggregate: (parent: any, data: any[]) => {
                return data.map((r) => r.Change).reduce((ty, u) => ty + u, 0);
            },
            field: "Change"
        },
        {
            aggregate: (parent: any, data: any[]) => {
                return data.map((r) => r.Price).reduce((ty, u) => ty + u, 0);
            },
            field: "Price"
        },
        {
            aggregate: (parent: any, data: any[]) => {
                return parent.Change / (parent. Price - parent.Change) * 100;
            },
            field: "Change(%)"
        }
    ];
    // public groupColumnName = "Categories";

    public items: any[] = [{field: "Export native"}, { field: "Export JS Excel"}];

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
    constructor(private zone: NgZone, private localService: LocalDataService, private elRef: ElementRef) {
        this.subscription = this.localService.getData(this.volume);
        this.localService.records.subscribe((d) => this.data = d);
    }
    // tslint:disable-next-line:member-ordering
    public ngOnInit() {
        if (this.theme) {
            document.body.classList.add("dark-theme");
        }
    }

    public ngAfterViewInit() {
        this.grid1.reflow();
    }
    public onButtonAction(event: any) {
        switch (event.index) {
            case 0: {
                    this.disableOtherButtons(event.index, true);
                    this._timer = setInterval(() => this.ticker(this.data), this.frequency);
                    break;
                }
            case 1: {
                    this.disableOtherButtons(event.index, true);
                    this._timer = setInterval(() => this.tickerAllPrices(this.data), this.frequency);
                    break;
                }
                case 2: {
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

    public stopFeed() {
        if (this._timer) {
            clearInterval(this._timer);
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    public formatNumber(value: number) {
        return value ? value.toFixed(2) : "";
    }

    public percentage(value: number) {
        return value ? value.toFixed(2) + "%" : "";
    }

    public formatCurrency(value: number) {
        return value ? "$" + value.toFixed(3) : "";
    }

    public onVolumeChanged(event: any) {
        this.localService.getData(this.volume);
    }

    // the below code is needed when accessing the sample through the navigation
    // it will style all the space below the sample component element, but not the navigation menu
    public onThemeChanged(event: any) {
        const parentEl = this.parentComponentEl();
        if (event.checked && parentEl.classList.contains("main")) {
            parentEl.classList.add("dark-theme");
        } else {
            parentEl.classList.remove("dark-theme");
        }
    }

    public parentComponentEl() {
        // returns the main div container of the Index Component,
        // if path is /samples/sample-url, or the appRoot, if path is /sample-url
        return this.elRef.nativeElement.parentElement.parentElement;
    }

    public ngOnDestroy() {
        this.stopFeed();
    }

    public toggleToolbar(event: any) {
        this.grid1.showToolbar = !this.grid1.showToolbar;
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

    get buttonSelected(): number {
      return this.selectedButton || this.selectedButton === 0 ? this.selectedButton : -1;
    }

    // tslint:disable-next-line:member-ordering
    public ticker(data: any) {
        this.zone.runOutsideAngular(() => {
            this.data = this.updateRandomPrices(data.splice(0));
            // this.zone.run(() => this.grid1.markForCheck());
        });
    }

    // tslint:disable-next-line:member-ordering
    public tickerAllPrices(data: any) {
        this.zone.runOutsideAngular(() => {
            this.data = this.updateAllPrices(data.splice(0));
            // this.zone.run(() => this.grid1.markForCheck());
        });
    }

    // tslint:disable-next-line:member-ordering
    public updateAllPrices(data: any[]): any {
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
