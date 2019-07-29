import { Component, ViewChild } from "@angular/core";
import { CloseScrollStrategy, IgxDialogComponent, IgxOverlayOutletDirective } from "igniteui-angular";

@Component({
    selector: "app-dialog-styling-sample",
    styleUrls: ["./dialog-styling-sample.component.scss"],
    templateUrl: "./dialog-styling-sample.component.html"
})
export class DialogStylingSample {

    @ViewChild(IgxOverlayOutletDirective, { static: true })
    public outlet: IgxOverlayOutletDirective;

    @ViewChild("dialog1", { read: IgxDialogComponent, static: true })
    public dialog: IgxDialogComponent;

    private _dialogOverlaySettings2 = {
        closeOnOutsideClick: false,
        modal: true,
        outlet: this.outlet,
        scrollStrategy: new CloseScrollStrategy()
    };

    public openDialog() {
        this._dialogOverlaySettings2.outlet = this.outlet;
        this.dialog.open(this._dialogOverlaySettings2);
    }
}
