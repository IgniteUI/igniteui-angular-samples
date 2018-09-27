import { Component, ChangeDetectorRef, OnInit } from "@angular/core";

@Component({
    selector: "drag-drop-sample",
    styleUrls: ["./drag-drop.component.scss"],
    templateUrl: "./drag-drop.component.html"
})

export class DragAndDropSampleComponent implements OnInit {
    public urls = [
        [
            {
                id: 0, url: '../../assets/images/drag-drop/infragistics-logo00.jpeg'
            },
            {
                id: 1, url: '../../assets/images/drag-drop/infragistics-logo01.jpeg'
            },
            {
                id: 2, url: '../../assets/images/drag-drop/infragistics-logo02.jpeg'
            },
        ],
        [
            {
                id: 3, url: '../../assets/images/drag-drop/infragistics-logo10.jpeg'
            },
            {
                id: 4, url: '../../assets/images/drag-drop/infragistics-logo11.jpeg'
            },
            {
                id: 5, url: '../../assets/images/drag-drop/infragistics-logo12.jpeg'
            },
        ],
        [
            {
                id: 6, url: '../../assets/images/drag-drop/infragistics-logo20.jpeg'
            },
            {
                id: 7, url: '../../assets/images/drag-drop/infragistics-logo21.jpeg'
            },
            {
                id: 8, url: '../../assets/images/drag-drop/infragistics-logo22.jpeg'
            },
        ],
    ];

    public puzzleBoard;

    constructor() {
    }

    ngOnInit() {
        this.puzzleBoard = [ [false, false, false], [false, false, false], [false, false, false] ];
    }

    public getAllUrlsArray() {
        return [].concat(...this.urls);
    }
    

    public onDragBoardEnter(ev) {
        let dropIdString = ev.owner.element.nativeElement.id;
        let dragIdString = ev.drag.element.nativeElement.id;
        let dropId = dropIdString.match(/\d+/g).map(Number)[0];
        let dragId = dragIdString.match(/\d+/g).map(Number)[0];

        let coll = dropId % 3
        let row = Math.floor(dropId / 3);
        console.log(coll);
        console.log(row);
        if(dragId === dropId) {
            this.puzzleBoard[row][coll] = true;
            if(this.checkForCompletedPuzzle()) {
                alert('Completed');
            }
        } else {
            this.puzzleBoard[row][coll] = false;
        }
    }

    private checkForCompletedPuzzle(): boolean  {
        for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
                if(!this.puzzleBoard[i][j]) {
                    console.log('No');
                    return false;
                }
            }
        }

        console.log('Si');
        return true;
    }
}