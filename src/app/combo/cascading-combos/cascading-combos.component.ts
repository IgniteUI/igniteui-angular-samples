import { AfterViewInit, Component, ElementRef, ViewChild, ViewChildren } from "@angular/core";
import {
    ConnectedPositioningStrategy,
    IgxComboComponent,
    IgxDropDownComponent,
    IgxInputGroupComponent,
    NoOpScrollStrategy,
    OverlaySettings
} from "igniteui-angular";
import { data } from "./local-data";

@Component({
    selector: "app-combo",
    styleUrls: ["./cascading-combos.component.scss"],
    templateUrl: "./cascading-combos.component.html"
})
export class CascadingCombos {

    @ViewChild("inputGroupCountry", { read: IgxInputGroupComponent}) public inputGroupCountry: IgxInputGroupComponent;
    @ViewChild("inputGroupProvince", { read: IgxInputGroupComponent}) public inputGroupProvince: IgxInputGroupComponent;
    @ViewChild("dropdownCountry", { read: IgxDropDownComponent}) public dropdownCountry: IgxDropDownComponent;
    @ViewChild("dropdownProvince", { read: IgxDropDownComponent}) public dropdownProvince: IgxDropDownComponent;
    @ViewChild("comboTown", { read: IgxComboComponent }) public comboTown: IgxComboComponent;
    public arrowCountry = "arrow_drop_down";
    public arrowProvince = "arrow_drop_down";
    public disabledProvince = true;

    public countryData: any[] = [];
    public provinceData: any[] = [];
    public townData: any[] = [];
    public country: string;
    public province: string;
    public town: string;
    private _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(),
        scrollStrategy: new NoOpScrollStrategy()
    };

    constructor() {
        this.countryData = Object.keys(data);
    }

    public toggleDDCountry() {
        this._overlaySettings.positionStrategy.settings.target = this.inputGroupCountry.element.nativeElement;
        this.dropdownCountry.toggle(this._overlaySettings);
        this.arrowCountry = "arrow_drop_up";
    }

    public toggleDDProvince() {
        this._overlaySettings.positionStrategy.settings.target = this.inputGroupProvince.element.nativeElement;
        this.dropdownProvince.toggle(this._overlaySettings);
        this.arrowProvince = "arrow_drop_up";
    }

    public selectCountry(args) {
        this.disabledProvince = false;
        this.country = Object.keys(data)[args.newSelection.index];
        this.provinceData = Object.keys(data[this.country]);
        this.province = "";
        this.comboTown.deselectAllItems();
    }

    public selectProvince(args) {
        this.arrowProvince = "arrow_drop_down";
        this.comboTown.disabled = false;
        this.province = this.provinceData[args.newSelection.index];
        this.townData = data[this.country][this.province];
        this.comboTown.deselectAllItems();
    }

    public onCountryClosed() {
        this.arrowCountry = "arrow_drop_down";
    }

    public onProvinceClosed() {
        this.arrowProvince = "arrow_drop_down";
    }
}
