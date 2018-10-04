import { Component, OnInit } from "@angular/core";

@Component({
    selector: "drag-drop-sample",
    styleUrls: ["./drag-drop.component.scss"],
    templateUrl: "./drag-drop.component.html"
})

export class DragAndDropSampleComponent implements OnInit {
    public pieces = [];
    public puzzleBoard;

    private piecesArr = [
        {
            id: 0, url: "../../assets/images/drag-drop/infragistics-logo00.jpeg"
        },
        {
            id: 1, url: "../../assets/images/drag-drop/infragistics-logo01.jpeg"
        },
        {
            id: 2, url: "../../assets/images/drag-drop/infragistics-logo02.jpeg"
        },
        {
            id: 3, url: "../../assets/images/drag-drop/infragistics-logo10.jpeg"
        },
        {
            id: 4, url: "../../assets/images/drag-drop/infragistics-logo11.jpeg"
        },
        {
            id: 5, url: "../../assets/images/drag-drop/infragistics-logo12.jpeg"
        },
        {
            id: 6, url: "../../assets/images/drag-drop/infragistics-logo20.jpeg"
        },
        {
            id: 7, url: "../../assets/images/drag-drop/infragistics-logo21.jpeg"
        },
        {
            id: 8, url: "../../assets/images/drag-drop/infragistics-logo22.jpeg"
        }
    ];

    constructor() {
    }

    public ngOnInit() {
        this.puzzleBoard = [];
        this.shuffleArray();
    }

    public getAllPiecesArray() {
        return [].concat(...this.pieces);
    }

    public onPieceDropped(ev) {
        const dropIdString = ev.owner.element.nativeElement.id;
        const dragIdString = ev.drag.element.nativeElement.id;
        const dropId = dropIdString.match(/\d+/g).map(Number)[0];
        const dragId = dragIdString.match(/\d+/g).map(Number)[0];

        const foundIndex = this.findIndexOfDrag(dragId);
        const firstPartRow = foundIndex.row;
        const firstPartColl = foundIndex.coll;
        const secondPartRow = Math.floor(dropId / 3);
        const secondPartColl = dropId % 3;
        this.swapPieces(firstPartRow, firstPartColl, secondPartRow, secondPartColl);
        ev.cancel = true;
        ev.drag.dropFinished();
        if (this.checkForCompletedPuzzle()) {
            setTimeout(this.showMessage, 100);
        }
    }

    private showMessage() {
        alert("Congratulations!\nYou have successfully solved the puzzle.");
    }

    private swapPieces(firstPartRow, firstPartColl, secondPartRow, secondPartColl) {
        const temp = this.puzzleBoard[firstPartRow][firstPartColl];
        this.puzzleBoard[firstPartRow][firstPartColl] = this.puzzleBoard[secondPartRow][secondPartColl];
        this.puzzleBoard[secondPartRow][secondPartColl] = temp;

        const temp2 = this.pieces[firstPartRow][firstPartColl];
        this.pieces[firstPartRow][firstPartColl] = this.pieces[secondPartRow][secondPartColl];
        this.pieces[secondPartRow][secondPartColl] = temp2;
    }

    private findIndexOfDrag(dragId) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.puzzleBoard[i][j] === dragId) {
                    return { row: i, coll: j };
                }
            }
        }
    }

    private checkForCompletedPuzzle(): boolean  {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.puzzleBoard[i][j] !== (i * 3 + j)) {
                    return false;
                }
            }
        }

        return true;
    }

    private shuffleArray(): void {
        for (let i = this.piecesArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = this.piecesArr[i];
            this.piecesArr[i] = this.piecesArr[j];
            this.piecesArr[j] = temp;
        }

        for (let i = 0; i < 3; i++) {
            this.pieces.push([]);
            this.puzzleBoard.push([]);
            for (let j = 0; j < 3; j++) {
                this.pieces[i].push(this.piecesArr[i * 3 + j]);
                this.puzzleBoard[i].push(this.piecesArr[i * 3 + j].id);
            }
        }
    }
}
