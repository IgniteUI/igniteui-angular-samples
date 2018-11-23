import { Component, OnInit, ViewChild } from "@angular/core";
import {
    CloseScrollStrategy ,
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxDropDownComponent,
    IgxInputDirective,
    IgxInputGroupComponent,
    VerticalAlignment
} from "igniteui-angular";
@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-dropdown-sample-2",
    styleUrls: ["./dropdown-sample-2.component.scss"],
    templateUrl: "./dropdown-sample-2.component.html"
})
export class DropDownSample2Component implements OnInit {
    @ViewChild("dropdown1", {read: IgxDropDownComponent}) public igxDropDown: IgxDropDownComponent;
    @ViewChild("dropdown2", {read: IgxDropDownComponent}) public igxInputDropDown: IgxDropDownComponent;
    @ViewChild("inputGroup", { read: IgxInputGroupComponent}) public inputGroup: IgxInputGroupComponent;
    @ViewChild("input", { read: IgxInputDirective })
    public input: IgxInputDirective;

    public items: any[] = [];
    public inputValue: string;

    private _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };
    private _overlaySettings = {
      closeOnOutsideClick: true,
      modal: false,
      positionStrategy: new ConnectedPositioningStrategy(this._positionSettings),
      scrollStrategy: new CloseScrollStrategy()
  };

    public ngOnInit() {
        for (let i = 1; i < 4; i ++) {
            const item = { field: "Option " + i };
            this.items.push(item);
        }
    }

    public toggleDropDown(eventArgs) {
        this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
        this.igxDropDown.toggle(this._overlaySettings);
    }

    public onOpening() {
        this.igxDropDown.setSelectedItem(0);
    }

    public onInputDropDownSelection(eventArgs) {
        this.inputValue = eventArgs.newSelection.element.nativeElement.textContent;
    }

    public openInputDropDown() {
        if (this.igxInputDropDown.collapsed) {
            this.igxInputDropDown.open({
                modal: false,
                positionStrategy: new ConnectedPositioningStrategy({
                    target: this.inputGroup.element.nativeElement
                })
            });
        }
    }
}
