import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
    ISelectionEventArgs
} from "igniteui-angular";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-dropdown-menu",
    styleUrls: ["./dropdown-menu.component.scss"],
    templateUrl: "./dropdown-menu.component.html"
})
export class DropdownMenuComponent implements OnInit {
    public items: any[] = [];
    public text: string;

    public ngOnInit() {
        this.items = [{ text: "Add New Contact" }, { text: "Edit Contact" }, { text: "Refresh" }, { text: "Help" }];
    }

    public onSelection(eventArgs: ISelectionEventArgs) {
        this.text = eventArgs.newSelection.value;
        eventArgs.cancel = true;
    }
}
