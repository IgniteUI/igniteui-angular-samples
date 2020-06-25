import { Component, HostBinding, Input, OnInit, ViewChild } from "@angular/core";
import {
    CloseScrollStrategy,
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxDatePickerComponent,
    IgxDialogComponent,
    IgxDropDownComponent,
    IgxGridComponent,
    IgxOverlayOutletDirective,
    IgxSnackbarComponent,
    VerticalAlignment
} from "igniteui-angular";
import { DATA } from ".././data/data";
import { Record } from ".././data/record";

export enum THEME {
    LIGHT = "light-theme",
    DARK = "dark-theme",
    BLACK = "black-theme"
}
@Component({
    selector: "app-theme-chooser-sample",
    styleUrls: ["./theme-chooser-sample.component.scss"],
    templateUrl: "./theme-chooser-sample.component.html"
})
export class ThemeChooserSampleComponent implements OnInit {

    public THEME: typeof THEME = THEME;
    public data: any[] = DATA;
    public record;
    public themes = [THEME.LIGHT, THEME.DARK, THEME.BLACK];

    @HostBinding("class")
    public themesClass: THEME = THEME.LIGHT;

    @ViewChild("dialog1", { read: IgxDialogComponent, static: true })
    public dialog: IgxDialogComponent;

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild("grid1", { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    @ViewChild("datePicker", { static: true })
    public datePicker: IgxDatePickerComponent;

    @ViewChild("snackbar", { static: true })
    public snackbar: IgxSnackbarComponent;

    private deletedRow;

    private _dialogOverlaySettings2 = {
        closeOnOutsideClick: true,
        modal: true,
        outlet: this.outlet,
        scrollStrategy: new CloseScrollStrategy()
    };

    constructor() { }

    public selectTheme(value: THEME) {
        this.themesClass = value;
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
        this.datePicker.outlet = this.outlet;
        this.data = DATA;
        this.record = new Record();
    }
}
