import { Component, ChangeDetectorRef, OnInit } from "@angular/core";

@Component({
    selector: "drag-drop-sample",
    styleUrls: ["./drag-drop.component.scss"],
    templateUrl: "./drag-drop.component.html"
})

export class DragAndDropSampleComponent implements OnInit {
    public pieces = [];

    private piecesArr = [
        {
            id: 0, url: '../../assets/images/drag-drop/infragistics-logo00.jpeg'
        },
        {
            id: 1, url: '../../assets/images/drag-drop/infragistics-logo01.jpeg'
        },
        {
            id: 2, url: '../../assets/images/drag-drop/infragistics-logo02.jpeg'
        },
        {
            id: 3, url: '../../assets/images/drag-drop/infragistics-logo10.jpeg'
        },
        {
            id: 4, url: '../../assets/images/drag-drop/infragistics-logo11.jpeg'
        },
        {
            id: 5, url: '../../assets/images/drag-drop/infragistics-logo12.jpeg'
        },
        {
            id: 6, url: '../../assets/images/drag-drop/infragistics-logo20.jpeg'
        },
        {
            id: 7, url: '../../assets/images/drag-drop/infragistics-logo21.jpeg'
        },
        {
            id: 8, url: '../../assets/images/drag-drop/infragistics-logo22.jpeg'
        },
    ];

    public puzzleBoard;

    constructor() {
    }

    ngOnInit() {
        this.shuffleArray();
        this.puzzleBoard = [ [false, false, false], [false, false, false], [false, false, false] ];
    }

    public getAllPiecesArray() {
        return [].concat(...this.pieces);
    }

    public onPieceDropped(ev) {
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
                    return false;
                }
            }
        }

        return true;
    }

    private shuffleArray(): void {
        for (var i = this.piecesArr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.piecesArr[i];
            this.piecesArr[i] = this.piecesArr[j];
            this.piecesArr[j] = temp;
        }

        for(let i = 0; i < 3; i++) {
            this.pieces.push([]);
            for(let j = 0; j < 3; j++) {
                this.pieces[i].push(this.piecesArr[i * 3 + j]);
            }
        }
    }
}