import { Component, Input, OnInit, ViewChild } from "@angular/core";
import {
    CloseScrollStrategy,
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxDialogComponent,
    IgxDropDownComponent,
    IgxGridComponent,
    IgxOverlayOutletDirective,
    IgxSnackbarComponent,
    VerticalAlignment
} from "igniteui-angular";
import { DATA } from "../data/data";
import { Record } from "../data/record";

@Component({
    selector: "app-default-theme-sample",
    styleUrls: ["./default-theme-sample.component.css"],
    templateUrl: "./default-theme-sample.component.html"
})
export class DefaultThemeSampleComponent implements OnInit {

    public data: any[] = DATA;
    public record;

    @ViewChild("dialog1", { read: IgxDialogComponent, static: true })
    public dialog: IgxDialogComponent;

    @ViewChild("outlet", { read: IgxOverlayOutletDirective, static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild("grid1", { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    @ViewChild("snackbar", { static: true })
    public snackbar: IgxSnackbarComponent;

    private deletedRow;

    private _dropdownPositionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    private _dropDownOverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(this._dropdownPositionSettings),
        scrollStrategy: new CloseScrollStrategy()
    };

    private _dialogOverlaySettings2 = {
        closeOnOutsideClick: true,
        modal: true,
        outlet: this.outlet,
        scrollStrategy: new CloseScrollStrategy()
    };

    constructor() { }

    public toggleDropDown(eventArgs, selectedDropDown: IgxDropDownComponent) {
        const dropDown = selectedDropDown;
        this._dropDownOverlaySettings.positionStrategy.settings.target = eventArgs.target;
        dropDown.toggle(this._dropDownOverlaySettings);
    }

    public addRow() {
        this.grid1.addRow(this.record);
        this.cancel();
    }

    public cancel() {
        this.dialog.close();
        this.record = new Record();
    }

    public openDialog() {
        this._dialogOverlaySettings2.outlet = this.outlet;
        this.dialog.open(this._dialogOverlaySettings2);
    }

    public removeRow(rowIndex) {
        const row = this.grid1.getRowByIndex(rowIndex);
        this.deletedRow = row.rowData;
        row.delete();
        this.snackbar.message = `Row with index ${rowIndex} has been deleted!`;
        this.snackbar.show();
    }

    public restoreRow() {
        this.grid1.addRow(this.deletedRow);
        this.snackbar.hide();
    }

    public ngOnInit() {
        this.data = DATA;
        this.record = new Record();
    }
}
