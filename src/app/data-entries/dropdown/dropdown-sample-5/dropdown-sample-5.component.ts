import { Component, ViewChild } from "@angular/core";
import {
    CloseScrollStrategy,
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxDropDownComponent,
    VerticalAlignment
} from "igniteui-angular";
@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-dropdown-sample-5",
    styleUrls: ["./dropdown-sample-5.component.scss"],
    templateUrl: "./dropdown-sample-5.component.html"
})
export class DropDownSample5Component {
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    public disableMeats = false;

    // tslint:disable:object-literal-sort-keys
    public foods: Array<{
        name: string,
        entries: Array<{ name: string, refNo: string }>
    }> = [{
        name: "Vegetables",
        entries: [{
            name: "Cucumber",
            refNo: `00000`
        }, {
            name: "Lettuce",
            refNo: `00001`
        }, {
            name: "Cabbage",
            refNo: "00002"
        }]
    }, {
        name: "Fruits",
        entries: [{
            name: "Banana",
            refNo: `10000`
        }, {
            name: "Tomato",
            refNo: `10001`
        }, {
            name: "Kiwi",
            refNo: `10001`
        }]
    }, {
        name: "Meats",
        entries: [{
            name: "Chicken",
            refNo: `20000`
        }, {
            name: "Beef",
            refNo: `20001`
        }, {
            name: "Veal",
            refNo: `20001`
        }]
    }];

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

    public toggleDropDown(eventArgs) {
        this._overlaySettings.positionStrategy.settings.target = eventArgs.target;
        this.igxDropDown.toggle(this._overlaySettings);
    }
}
