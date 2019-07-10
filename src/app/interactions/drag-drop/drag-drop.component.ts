import { Component } from "@angular/core";

@Component({
    selector: "drag-drop-sample",
    styleUrls: ["./drag-drop.component.scss"],
    templateUrl: "./drag-drop.component.html"
})

export class DragAndDropSampleComponent {
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

    public onTileDropped(ev) {
        ev.drag.dropFinished();
    }

    private swapIcons(dragIndex: number, dropIndex: number) {
        let iconMatrix = [
            [...this.icons.slice(0, 3)],
            [...this.icons.slice(3, 6)],
            [...this.icons.slice(6, 9)]
        ]
        let dragRow = dragIndex < 3 ? 0 : dragIndex > 5 ? 2 : 1;
        let dropRow = dropIndex < 3 ? 0 : dropIndex > 5 ? 2 : 1;
        let dragCol = dragIndex - 3 * dragRow
        let dropCol = dropIndex - 3 * dropRow
        let flattenArr = []
        if (dragRow < dropRow) {
            flattenArr = [...iconMatrix[dragRow], ...iconMatrix[dropRow]]
            flattenArr.splice(3 + dropCol, 0, flattenArr.splice(dragCol, 1)[0])
            iconMatrix[dragRow] = flattenArr.slice(0, 3)
            iconMatrix[dropRow] = flattenArr.slice(3)
            this.icons = [...iconMatrix[0], ...iconMatrix[1], ...iconMatrix[2]]
        } else if( dragRow > dropRow) {
        flattenArr = [...iconMatrix[dropRow], ...iconMatrix[dragRow]]
            flattenArr.splice(dropCol, 0, flattenArr.splice(dragCol + 3, 1)[0]);
            iconMatrix[dropRow] = flattenArr.slice(0, 3)
            iconMatrix[dragRow] = flattenArr.slice(3)
            this.icons = [...iconMatrix[0], ...iconMatrix[1], ...iconMatrix[2]]
        } else {
            [this.icons[dragIndex], this.icons[dropIndex]] = [this.icons[dropIndex], this.icons[dragIndex]]
        }
    }

    private onEnterHandler(ev):void {
        this.dropTileId = parseInt(ev.owner.element.nativeElement.id, 10)
        //the event get raised immediately, but we want to do something only when we drag over another tile
        if(this.dragIconId === this.dropTileId) {
            return;
        }
        let dragIndex = this.icons.findIndex((iconObj) => {
            return iconObj.id === this.dragIconId
        })
        let dropIndex = this.icons.findIndex((iconObj) => {
            return iconObj.id === this.dropTileId
        })
        this.swapIcons(dragIndex, dropIndex)
    }

    private dragStartHandler(id: string):void {
        this.dragIconId = parseInt(id, 10);
    }
}
