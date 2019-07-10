import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector: "drag-drop-sample",
    styleUrls: ["./drag-drop.component.scss"],
    templateUrl: "./drag-drop.component.html"
})

export class DragAndDropSampleComponent implements OnInit{
    public dragIconId: number;
    public dropTileId: number;
    public icons = [
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
    }

    public onTileDropped(ev) {
        ev.drag.dropFinished();
    }

    private swapIcons(dragIndex: number, dropIndex: number) {
        // let flattenArr = []
        //     if (dragRow < dropRow) {
        // flattenArr = [...this.icons[dragRow], ...this.icons[dropRow]]
        //     flattenArr.splice(3 + dropCol, 0, flattenArr.splice(dragCol, 1)[0])
        //     this.icons[dragRow] = flattenArr.slice(0, 3)
        //     this.icons[dropRow] = flattenArr.slice(3)
        // } else if( dragRow > dropRow) {
        // flattenArr = [...this.icons[dropRow], ...this.icons[dragRow]]
        //     flattenArr.splice(dropCol, 0, flattenArr.splice(dragCol + 3, 1)[0]);
        //     this.icons[dropRow] = flattenArr.slice(0, 3)
        //     this.icons[dragRow] = flattenArr.slice(3)
        // } else {
            [this.icons[dragIndex], this.icons[dropIndex]] = [this.icons[dropIndex], this.icons[dragIndex]]
        //}
    }

    private findIndexOfDrag(dragId: number) {
        for (let i = 0; i < 9; i++) {
            if (this.icons[i].id === dragId) {
                return i;
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
        let dropIndex = this.findIndexOfDrag(this.dropTileId)
        this.swapIcons(dragIndex, dropIndex)
    }

    private dragStartHandler(id: string):void {
        this.dragIconId = parseInt(id, 10);
    }
    private dragEndHandler():void {
        //debugger;
    }
}
