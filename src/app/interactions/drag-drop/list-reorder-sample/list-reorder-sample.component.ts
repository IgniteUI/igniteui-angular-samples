import { Component } from "@angular/core";

@Component({
    selector: "app-list-reorder-sample",
    templateUrl: "./list-reorder-sample.component.html",
    styleUrls: ["./list-reorder-sample.component.scss"]
})
export class ListReorderSampleComponent {
    public dragTileId: number;
    public dropTileId: number;
    public employees = [
        { id: 0, name: "Ivan Cornejo", title: "Senior Product Owner" },
        { id: 1, name: "Amish Shiravadakar", title: "Business Tools Director" },
        { id: 2, name: "Elsi Hansdottir", title: "Financial Director" },
        { id: 3, name: "Benito Noboa", title: "Marketing Specialist" },
        { id: 4, name: "Beth Murphy", title: "Platform Lead for Web" }
    ];

    public onTileDropped(ev) {
        ev.drag.dropFinished();
    }

    private swapTiles(dragIndex: number, dropIndex: number) {
        const tempObj = this.employees[dragIndex];
        this.employees.splice(dragIndex, 1);
        this.employees.splice(dropIndex, 0, tempObj);
    }

    private onEnterHandler(ev): void {
        this.dropTileId = parseInt(ev.owner.element.nativeElement.id, 10);
        // the event gets raised immediately, but we want to swap only when we drag over another tile
        if (this.dragTileId === this.dropTileId) {
            return;
        }
        const dragIndex = this.employees.findIndex((employee) => {
            return employee.id === this.dragTileId;
        });
        const dropIndex = this.employees.findIndex((employee) => {
            return employee.id === this.dropTileId;
        });
        this.swapTiles(dragIndex, dropIndex);
    }

    private dragStartHandler(id: string): void {
        this.dragTileId = parseInt(id, 10);
    }

}
