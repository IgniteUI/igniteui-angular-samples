import { Component, OnInit } from "@angular/core";

@Component({
    selector: "drag-drop-sample",
    styleUrls: ["./drag-drop.component.scss"],
    templateUrl: "./drag-drop.component.html"
})

export class DragAndDropSampleComponent implements OnInit {
    public dragIconId: number;
    public dropTileId: number;
    public icons = [];
    private iconsArr = [
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

    public ngOnInit() {
        for (let i = 0; i < 3; i++) {
            this.icons.push([]);
            for (let j = 0; j < 3; j++) {
                this.icons[i].push(this.iconsArr[i * 3 + j]);
            }
        }
    }

    public onTileDropped(ev) {
        ev.drag.dropFinished();
    }

    private swapIcons(dragRow: number, dragCol: number, dropRow: number, dropCol: number) {
        [this.icons[dragRow][dragCol], this.icons[dropRow][dropCol]] =
        [this.icons[dropRow][dropCol], this.icons[dragRow][dragCol]];
    }

    private findIndexOfDrag(dragId: number) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.icons[i][j].id === dragId) {
                    return { row: i, col: j };
                }
            }
        }
    }

    private onEnterHandler(ev):void {
        this.dropTileId = parseInt(ev.owner.element.nativeElement.id, 10)
        //the event get raised immediately, but we want to do something only when we drag over another tile
        if(this.dragIconId === this.dropTileId) {
            return;
        }

        let dragIndex = this.findIndexOfDrag(this.dragIconId)
        let dragRow = dragIndex.row;
        let dragCol = dragIndex.col;

        let dropIndex = this.findIndexOfDrag(this.dropTileId)
        let dropRow = dropIndex.row;
        let dropCol = dropIndex.col;

        //if the two icons are on the same row swap them
        if (dragRow === dropRow) {
            this.swapIcons(dragRow, dragCol, dropRow, dropCol)
        }

        console.log(`dragRow: ${dragRow}, dragCol: ${dragCol}`)
        console.log(`dropRow: ${dropRow}, dropCol: ${dropCol}`)

        console.log(this.icons[0]);
    }

    private dragStartHandler(id: string):void {
        this.dragIconId = parseInt(id, 10);
        console.log(`drag start: ${this.dragIconId}`)
    }
}
