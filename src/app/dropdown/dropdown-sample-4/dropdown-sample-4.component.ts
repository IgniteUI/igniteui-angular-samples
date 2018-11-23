import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
    ConnectedPositioningStrategy,
    IgxDropDownComponent,
    IgxInputDirective,
    IgxInputGroupComponent
} from "igniteui-angular";
@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-dropdown-sample-4",
    styleUrls: ["./dropdown-sample-4.component.scss"],
    templateUrl: "./dropdown-sample-4.component.html"
})
export class DropDownSample4Component implements OnInit {
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;
    @ViewChild("inputGroup", { read: IgxInputGroupComponent}) public inputGroup: IgxInputGroupComponent;
    @ViewChild("input", { read: IgxInputDirective })
    public input: IgxInputDirective;

    public items: any[] = [];
    public value: string;

    public ngOnInit() {
        for (let i = 1; i < 4; i ++) {
            const item = { field: "Option " + i };
            this.items.push(item);
        }
    }

    public onSelection(eventArgs) {
        this.value = eventArgs.newSelection.element.nativeElement.textContent;
    }

    public openDropDown() {
        if (this.igxDropDown.collapsed) {
            this.igxDropDown.open({
                modal: false,
                positionStrategy: new ConnectedPositioningStrategy({
                    target: this.inputGroup.element.nativeElement
                })
            });
        }
    }
}
