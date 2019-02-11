import { Component } from "@angular/core";

@Component({
    selector: "select-sample-2",
    styleUrls: ["select-sample-2.component.scss"],
    templateUrl: "select-sample-2.component.html"
})
export class SelectSample2Component {
    public items: any[] = [
        { type: "Fruits", fruits: [ "Apple", "Orange", "Banana" ] },
        { type: "Vegetables", vegetables: [ "Cucumber", "Potato", "Pepper" ] }
    ];
}
