import { Component, NgZone, OnInit, ViewChild } from "@angular/core";
import { IgxButtonGroupComponent, IgxColumnComponent, IgxGridComponent,
    IgxSliderComponent, SortingDirection } from "igniteui-angular";
import { Observable } from "rxjs";
import { LocalService } from "../services/localData.service";

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
    providers: [LocalService],
    selector: "app-grid-component",
    styleUrls: ["./grid-finjs-demo.component.scss"],
    templateUrl: "./grid-finjs-demo.component.html"
})
export class FinJSDemoComponent implements OnInit {
    @ViewChild("grid1") public grid1: IgxGridComponent;
    @ViewChild("buttonGroup1") public buttonGroup1: IgxButtonGroupComponent;
    @ViewChild("slider1") public slider1: IgxSliderComponent;

    public selection = true;
    public volume = 5000;
    public step = 100;
    public data: Observable < any[] > ;
    public recordsUpdatedLastSecond: number[] ;
    public controls = [
        new Button({
            disabled: false,
            icon: "play_arrow",
            label: "LIVE ALL DATA",
            selected: false
        }),
        new Button({
            disabled: false,
            icon: "update",
            label: "LIVE ALL PRICES",
            selected: false
        }),
        new Button({
            disabled: false,
            icon: "update",
            label: "LIVE PRICES",
            selected: false
        }),
        new Button({
            disabled: true,
            icon: "stop",
            label: "Stop",
            selected: false
        })
    ];

    private subscription;
    private _timer;
    private selectedButton;

    // tslint:disable-next-line:member-ordering
    constructor(private zone: NgZone, private localService: LocalService) {
        this.localService.getData(this.volume);
        this.data = this.localService.records;
    }
    // tslint:disable-next-line:member-ordering
    public ngOnInit() {
        this.grid1.groupingExpressions = [{
                dir: SortingDirection.Desc,
                fieldName: "Category"
            },
            {
                dir: SortingDirection.Desc,
                fieldName: "Type"
            }
        ];
    }

    public onButtonAction(event: any) {
        switch (event.index) {
            case 0:
                {
                    this.disableOtherButtons(event.index, true);
                    this.subscription = this.localService.allDataFeed(this.volume);
                    break;
                }
            case 1:
                {
                    this.disableOtherButtons(event.index, true);
                    const currData = this.grid1.data;
                    this.subscription = this.localService.allPrices(currData);
                    break;
                }
            case 2:
                {
                    this.disableOtherButtons(event.index, true);
                    this._timer = setInterval(() => this.updateRandomData(), 10);
                    break;
                }
                case 3:
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
                    fieldName: "Category"
                },
                {
                    dir: SortingDirection.Desc,
                    fieldName: "Type"
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
        return value.toFixed(2) + '%';
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

    public toggleColumn(col: IgxColumnComponent) {
        col.pinned ? col.unpin() : col.pin();
    }

    public handleRowSelection(event) {
        const targetCell = event.cell;
        if (!this.selection) {
            this.grid1.deselectAllRows();
            this.grid1.selectRows([targetCell.row.rowID]);
        }
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
    private strongNegative = (rowData: any): boolean => {
        return rowData["Change(%)"] <= -1;
    }

    // tslint:disable-next-line:member-ordering
    public trends = {
        negative: this.negative,
        positive: this.positive,
    };
    // tslint:disable-next-line:member-ordering
    public trendsChange = {
        changeNeg: this.changeNegative,
        changePos: this.changePositive,
        strongNegative: this.strongNegative,
        strongPositive: this.strongPositive
    };

    private disableOtherButtons(ind: number, disableButtons: boolean) {
        this.selectedButton = ind;
        this.buttonGroup1.buttons.forEach((button, index) => {
            if (ind !== index) { button.disabled = disableButtons; }
        });
        this.buttonGroup1.buttons[3].disabled = !disableButtons;
        this.slider1.disabled = disableButtons;
    }

    private updateRandomData() {
        const currData = this.grid1.data;
        this.subscription = this.localService.updateRandomData(currData);
        this.localService.updatedRecordsLastSecond.subscribe((val) => { this.recordsUpdatedLastSecond = val; });
    }

    get grouped(): boolean {
        return this.grid1.groupingExpressions.length > 0;
    }

    get buttonSelected(): number {
      return this.selectedButton || this.selectedButton === 0 ? this.selectedButton : -1;
    }
}
