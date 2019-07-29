import { Component, ViewChild } from "@angular/core";
import { IgxSelectComponent } from "igniteui-angular";

@Component({
    selector: "select-form",
    styleUrls: ["select-form.component.scss"],
    templateUrl: "select-form.component.html"
})
export class SelectFormComponent {
    public fruits: string[] = ["Orange", "Apple", "Banana", "Mango"];
    public selected: string = "Apple";
}
