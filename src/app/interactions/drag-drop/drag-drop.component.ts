import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

@Component({
    selector: "drag-drop-sample",
    styleUrls: ["./drag-drop.component.scss"],
    templateUrl: "./drag-drop.component.html"
})

export class DragAndDropSampleComponent implements OnInit {
    public dragIconId: number;
    public dropTileId: number;
    public tiles = [];
    public readonly boardEdgeLength: number = 3;
    private tilesArr = [
        {
            id: 0, url: "assets/images/drag-drop/profile.png"
        },
        {
            id: 1, url: "assets/images/drag-drop/calendar.png"
        },
        {
            id: 2, url: "assets/images/drag-drop/mail.png"
        },
        {
            id: 3, url: "assets/images/drag-drop/photos.png"
        },
        {
            id: 4, url: "assets/images/drag-drop/videos.png"
        },
        {
            id: 5, url: "assets/images/drag-drop/cloud.png"
        },
        {
            id: 6, url: "assets/images/drag-drop/map.png"
        },
        {
            id: 7, url: "assets/images/drag-drop/contacts.png"
        },
        {
            id: 8, url: "assets/images/drag-drop/chat.png"
        }
    ];
    constructor(private cdr: ChangeDetectorRef) {

    }

    public ngOnInit() {
        for (let i = 0; i < this.boardEdgeLength; i++) {
            this.tiles.push([]);
            for (let j = 0; j < this.boardEdgeLength; j++) {
                this.tiles[i].push(this.tilesArr[i * this.boardEdgeLength + j]);
            }
        }
        console.log(this.tiles)
    }

    public onTileDropped(ev) {
        const dropId = parseInt((ev.owner.element.nativeElement.id).slice(-1), 10);
        const dragId = parseInt((ev.drag.element.nativeElement.id).slice(-1), 10);
        const foundIndex = this.findIndexOfDrag(dragId);
        const firstPartRow = foundIndex.row;
        const firstPartColl = foundIndex.coll;
        const secondPartRow = Math.floor(dropId / this.boardEdgeLength);
        const secondPartColl = dropId % this.boardEdgeLength;
        this.swapTiles(firstPartRow, firstPartColl, secondPartRow, secondPartColl);
        ev.cancel = true;
        ev.drag.dropFinished();
    }

    private swapTiles(firstPartRow: number, firstPartColl: number, secondPartRow: number, secondPartColl: number) {
        [this.tiles[firstPartRow][firstPartColl], this.tiles[secondPartRow][secondPartColl]] =
        [this.tiles[secondPartRow][secondPartColl], this.tiles[firstPartRow][firstPartColl]];
    }

    private findIndexOfDrag(dragId: number) {
        for (let i = 0; i < this.boardEdgeLength; i++) {
            for (let j = 0; j < this.boardEdgeLength; j++) {
                if (this.tiles[i][j].id === dragId) {
                    return { row: i, coll: j };
                }
            }
        }
    }

    private onEnterHandler(ev):void {
        this.dropTileId = parseInt((ev.owner.element.nativeElement.id).slice(-1), 10)
        //the event get raised immediately, but we want to do something only when we enter another tile
        if(this.dragIconId === this.dropTileId) {
            return;
        }
        let dragIndex = this.findIndexOfDrag(this.dragIconId)
        let dragRow = dragIndex.row;
        let dragCol = dragIndex.coll;

        let dropIndex = this.findIndexOfDrag(this.dropTileId)
        let dropRow = dropIndex.row;
        let dropCol = dropIndex.coll;

        //if the two tiles are on the same row swap them
        if (dragRow === dropRow) {
            this.dragIconId = this.dropTileId;
            this.swapTiles(dragRow, dragCol, dropRow, dropCol)
        }
        console.log(`dragRow: ${dragRow}, dragCol: ${dragCol}`)
        console.log(`dropRow: ${dropRow}, dropCol: ${dropCol}`)

        //console.log(this.puzzleBoard[0]);
        // [this.puzzleBoard[this.dropTileId], this.puzzleBoard[this.dragIconId]] = [this.puzzleBoard[this.dragIconId], this.puzzleBoard[this.dropTileId]]
        // [this.tiles[this.dropTileId], this.tiles[this.dragIconId]] = [this.tiles[this.dragIconId], this.tiles[this.dropTileId]]
        //console.log(`Entered: ${this.dropTileId}`)
    }

    private dragStartHandler(id: string):void {
        this.dragIconId = parseInt(id, 10);
        console.log(`drag start: ${this.dragIconId}`)
    }

    private dragEndHandler(id:string):void {
        console.log(`drag ended: ${id}`)
    }
}
