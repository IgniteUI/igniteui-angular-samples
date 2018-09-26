import { Component, ChangeDetectorRef, OnInit } from "@angular/core";

@Component({
    selector: "drag-drop-sample",
    styleUrls: ["./drag-drop.component.scss"],
    templateUrl: "./drag-drop.component.html"
})

export class DragAndDropSampleComponent implements OnInit {
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

    public puzzleBoard;
    private drop_id: number;

    constructor() {
    }

    ngOnInit() {
        this.drop_id = 0;
        this.puzzleBoard = [ [false, false, false], [false, false, false], [false, false, false] ];
    }

    public getId() {
        return "drop_" + this.drop_id++;
    }

    public getAllUrlsArray() {
        return [].concat(...this.urls);
    }
    

    public onDragBoardEnter(ev) {
        console.log(ev);
    }
}