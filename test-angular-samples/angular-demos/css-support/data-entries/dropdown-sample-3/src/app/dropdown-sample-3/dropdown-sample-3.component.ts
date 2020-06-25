import { Component } from "@angular/core";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-dropdown-sample-3",
    styleUrls: ["./dropdown-sample-3.component.css"],
    templateUrl: "./dropdown-sample-3.component.html"
})
export class DropDownSample3Component {
    public items: any[] = [
        { field: "EU", header: true },
        { field: "Germany" },
        { field: "Bulgaria", selected: true },
        { field: "UK", disabled: true },
        { field: "NA", header: true },
        { field: "Canada" },
        { field: "USA" },
        { field: "Mexico" }];
}
