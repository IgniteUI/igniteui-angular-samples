
import { AfterViewInit, Component, ElementRef, NgZone, OnInit, QueryList, ViewChild } from "@angular/core";
import { AbsoluteScrollStrategy, ConnectedPositioningStrategy, HorizontalAlignment, IgxButtonGroupComponent,
    IgxColumnComponent, IgxDropDownComponent, IgxExcelExporterOptions, IgxExcelExporterService,
    IgxGridCellComponent, IgxSliderComponent, IgxToggleDirective, IgxTreeGridComponent,
    OverlaySettings, PositionSettings, VerticalAlignment} from "igniteui-angular";
import { Observable } from "rxjs";
import { TreeLocalDataService } from "./treeLocalData.service";

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
    providers: [TreeLocalDataService],
    selector: "app-tree-grid-finjs-sample",
    styleUrls: ["./tree-grid-finjs-sample.component.scss"],
    templateUrl: "./tree-grid-finjs-sample.component.html"
})

export class TreeGridFinJSComponent implements AfterViewInit {
    @ViewChild("grid1") public grid1: IgxTreeGridComponent;
    @ViewChild("buttonGroup1") public buttonGroup1: IgxButtonGroupComponent;

    @ViewChild("slider1") public volumeSlider: IgxSliderComponent;
    @ViewChild("slider2") public intervalSlider: IgxSliderComponent;

    @ViewChild("toggleRefHiding") public toggleRefHiding: IgxToggleDirective;
    @ViewChild("toggleRefPinning") public toggleRefPinning: IgxToggleDirective;

    @ViewChild("hidingButton") public hidingButton: ElementRef;
    @ViewChild("pinningButton") public pinningButton: ElementRef;

    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    public cols: QueryList<IgxColumnComponent>;
    public hiddenColsLength: number;
    public pinnedColsLength: number;

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
    constructor(private zone: NgZone, private localService: TreeLocalDataService,
                private excelExporterService: IgxExcelExporterService) {
        this.subscription = this.localService.getData(this.volume);
        this.data = this.localService.records;
    }
    // tslint:disable-next-line:member-ordering
    public ngOnInit() {
        if (this.theme) {
            document.body.classList.add("finjs-dark-theme");
        }
    }

    public ngAfterViewInit() {
        this.cols = this.grid1.columnList;
        this.hiddenColsLength = this.cols.filter((col) => col.hidden).length;
        this.pinnedColsLength = this.cols.filter((col) => col.pinned).length;
        this.grid1.reflow();
    }

    public toggleDropDown(eventArgs) {
        this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
        this.igxDropDown.toggle(this._overlaySettings);
    }

    public toggleVisibility(col: IgxColumnComponent) {
        if (col.hidden) {
            this.hiddenColsLength--;
        } else {
            this.hiddenColsLength++;
        }
        col.hidden = !col.hidden;
    }

    public togglePin(col: IgxColumnComponent, evt) {
        if (col.pinned) {
            this.grid1.unpinColumn(col.field);
            this.pinnedColsLength--;
        } else {
            if (this.grid1.pinColumn(col.field)) {
                this.pinnedColsLength++;
            } else {
                // if pinning fails uncheck the checkbox
                evt.checkbox.checked = false;
            }
        }
    }

    public handleExporting(event: any) {
        if (event.newSelection.index === 0) {
            this.exportData();
        } else {
            // TODO
            // BRIAN CAN PUT HIS CODE HERE
        }
    }

    public exportData() {
        this.excelExporterService.exportData(this.grid1.data, new IgxExcelExporterOptions("Report"));
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

    public onVolumeChanged(event: any) {
        this.localService.getData(this.volume);
    }

    public onFrequencyChanged(event: any) {
    }

    public toggleHiding() {
        this._overlaySettings.positionStrategy.settings.target = this.hidingButton.nativeElement;
        this.toggleRefHiding.toggle(this._overlaySettings);
    }

    public togglePinning() {
        this._overlaySettings.positionStrategy.settings.target = this.pinningButton.nativeElement;
        this.toggleRefPinning.toggle(this._overlaySettings);
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
        for (const dataRow of data) {
          this.randomizeObjectData(dataRow, true);
        }
        return data;
      }

    // tslint:disable-next-line:member-ordering
    public updateRandomPrices(data: any[]): any {
        for (const dataRow of data) {
            this.randomizeObjectData(dataRow, false);
            this.randomizeChildObjData(dataRow);
        }
        return data;
      }

    private randomizeObjectData(dataObj, random: boolean) {
        const changeP = "Change(%)";
        const res = this.generateNewPrice(dataObj.Price);
        dataObj.Change = res.Price - dataObj.Price;
        dataObj.Price = res.Price;
        dataObj[changeP] = res.ChangePercent;

        if (random && dataObj.Categories) {
            // tslint:disable-next-line:prefer-for-of
            for (let y = 0; y < dataObj.Categories.length; y++) {
                this.randomizeObjectData(dataObj.Categories[y], false);
            }
        }
    }

    private randomizeChildObjData(dataObj) {
        for (let i = Math.round(Math.random() * 10); i < dataObj.Categories.length;
            i += Math.round(Math.random() * 10)) {
            this.randomizeObjectData(dataObj.Categories[i], false);
        }
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
