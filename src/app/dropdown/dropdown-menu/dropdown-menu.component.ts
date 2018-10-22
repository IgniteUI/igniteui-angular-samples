import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import {
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxDropDownComponent,
    IgxOverlayOutletDirective,
    NoOpScrollStrategy,
    OverlaySettings,
    VerticalAlignment
} from "igniteui-angular";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-dropdown-menu",
    styleUrls: ["./dropdown-menu.component.scss"],
    templateUrl: "./dropdown-menu.component.html"
})
export class DropdownMenuComponent implements OnInit {
    @ViewChild(IgxOverlayOutletDirective) public igxOverlayOutlet: IgxOverlayOutletDirective;
    @ViewChild(IgxDropDownComponent) public menu: IgxDropDownComponent;

    public items: any[] = [];
    public text;

    private positionSettings = {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public ngOnInit() {
        this.items = [{ text: "Add New Contact" }, { text: "Edit Contact" }, { text: "Refresh" }, { text: "Help" }];
    }

    public onSelection(eventArgs) {
        this.text = eventArgs.newSelection.element.nativeElement.textContent;
        eventArgs.cancel = true;
    }

    public toggleMenu(eventArgs) {
        const overlaySettings: OverlaySettings = {
            closeOnOutsideClick: true,
            modal: false,
            outlet: this.igxOverlayOutlet,
            positionStrategy: new ConnectedPositioningStrategy(this.positionSettings),
            scrollStrategy: new NoOpScrollStrategy()
        };

        overlaySettings.positionStrategy.settings.target = eventArgs.target;
        this.menu.toggle(overlaySettings);
    }
}
