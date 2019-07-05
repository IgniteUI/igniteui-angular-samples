import { Component, ElementRef } from "@angular/core";

@Component({
    selector: "app-overlay-styling",
    styleUrls: ["overlay-styling.component.scss"],
    templateUrl: "overlay-styling.component.html"
})
export class OverlayStylingComponent {
    public items = [
        {
            name: "Group 1",
            header: true,
            id: 1
        }, {
            name: "Option 1",
            id: 100
        }, {
            name: "Option 2",
            id: 101
        }, {
            name: "Option 3",
            id: 102
        }, {
            name: "Group 2",
            header: true,
            id: 2
        }, {
            name: "Option 1",
            id: 200
        }, {
            name: "Option 2",
            id: 201
        }, {
            name: "Option 3",
            id: 202
        }
    ];

    constructor(public element: ElementRef) {
    }
}
