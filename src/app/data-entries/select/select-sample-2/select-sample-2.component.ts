
import { Component } from "@angular/core";

@Component({
    selector: "select-sample-2",
    styleUrls: ["select-sample-2.component.scss"],
    templateUrl: "select-sample-2.component.html"
})
export class SelectSample2Component {
    public greengrocery: any[] = [
        { label: "Fruits", items: [ "Apple", "Orange", "Banana" ] },
        { label: "Vegetables", items: [ "Cucumber", "Potato", "Pepper" ] }
    ];
}
