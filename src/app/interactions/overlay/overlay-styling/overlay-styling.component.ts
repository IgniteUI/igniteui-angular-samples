import { Component, ElementRef } from "@angular/core";

@Component({
    selector: "app-overlay-styling",
    styleUrls: ["overlay-styling.component.scss"],
    templateUrl: "overlay-styling.component.html"
})
export class OverlayStylingComponent {
    public groups = ["Group 1", "Group 2", "Group 3"];
    public items = [{
        name: "Option 1",
        id: 0
    }, {
        name: "Option 2",
        id: 1
    }, {
        name: "Option 3",
        id: 2
    }, {
        name: "Option 4",
        id: 3
    },
    {
        name: "Option 5",
        id: 4
    }];

    constructor(public element: ElementRef) {
    }
}
