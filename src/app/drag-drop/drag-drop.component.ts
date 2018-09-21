import { Component, ChangeDetectorRef } from "@angular/core";

@Component({
    selector: "drag-drop-sample",
    styleUrls: ["./drag-drop.component.scss"],
    templateUrl: "./drag-drop.component.html"
})

export class DragAndDropSampleComponent {
    public urls = [
        [
            '../../assets/images/drag-drop/infragistics-logo00.jpeg',
            '../../assets/images/drag-drop/infragistics-logo01.jpeg',
            '../../assets/images/drag-drop/infragistics-logo02.jpeg'
        ],
        [
            '../../assets/images/drag-drop/infragistics-logo10.jpeg',
            '../../assets/images/drag-drop/infragistics-logo11.jpeg',
            '../../assets/images/drag-drop/infragistics-logo12.jpeg'
        ],
        [
            '../../assets/images/drag-drop/infragistics-logo20.jpeg',
            '../../assets/images/drag-drop/infragistics-logo21.jpeg',
            '../../assets/images/drag-drop/infragistics-logo22.jpeg'
        ],
    ];

    constructor(private cdr: ChangeDetectorRef) {
    }

    public getAllUrlsArray() {
        return [].concat(...this.urls);
    }

    public onDragStart() {
        this.cdr.detectChanges();
    }

    public onDragEnd() {
        this.cdr.detectChanges();
    }
}