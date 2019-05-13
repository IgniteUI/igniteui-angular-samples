import { Component, ViewChildren } from "@angular/core";
import { IGridDataBindable, IgxGridBaseComponent, IgxRowComponent } from "igniteui-angular";
import { moonData, planetData } from "./data";
import { PlanetComponent as PlanetComponent } from "./planet/planet.component";

enum DragIcon {
    DEFAULT = "drag_handle",
    BLOCK = "block",
    ALLOW = "add"
}

@Component({
    selector: "grid-row-drag-sample",
    styleUrls: ["./grid-row-drag.component.scss"],
    templateUrl: "grid-row-drag.component.html"
})

export class GridDragSampleComponent {
    public moonData: any[];
    public planetData: any[];
    @ViewChildren(PlanetComponent) public planets: PlanetComponent[];

    private row: IgxRowComponent<IgxGridBaseComponent & IGridDataBindable>;
    private ghost: HTMLElement;

    constructor() {
        this.moonData = moonData;
        this.planetData = planetData;
    }

    public onRowDragStart(args) {
        this.row = args.dragData;
        if (this.row.isSelected) {
            args.cancel = true;
        }
    }

    public onEnter(args) {
        const dragGhost: HTMLElement =  args.drag.dragGhost;
        dragGhost.style.opacity = "0.5";
        if (this.isDropAllowed(args)) {
            dragGhost.style.backgroundColor = "green";
            dragGhost.style.cursor = "crosshair";
        } else {
            dragGhost.style.backgroundColor = "red";
            dragGhost.style.cursor = "not-allowed";
        }
    }

    public onLeave(args) {
        const dragGhost: HTMLElement =  args.drag.dragGhost;
        if (dragGhost) {
            dragGhost.style.opacity = "1";
            dragGhost.style.cursor = "move";
            dragGhost.style.backgroundColor = "#c0e6ff";
        }
    }

    public onDrop(args) {
        args.cancel = true;

        if (this.isDropAllowed(args)) {
            this.updateGrid(args);
            this.updatePlanet(args);
        }
    }

    private isDropAllowed(dropData): boolean {
        this.row = dropData.dragData;
        const dragMoon = this.row.rowData.name;
        const dropPlanetName = dropData.owner.element.nativeElement.getAttribute("data-name");

        return this.planetData.filter((planet) => planet.name === dropPlanetName)[0].moons.includes(dragMoon);
    }

    private updateGrid(dropData): void {
        this.row = dropData.dragData;
        const dropPlanetName = dropData.owner.element.nativeElement.getAttribute("data-name");

        this.row.rowData.planet = dropPlanetName;
        this.row.grid.selectRows([this.row.rowID]);
    }

    private updatePlanet(dropData) {
        this.getPlanetComponent(dropData).moonsCount++;
    }

    private getPlanetComponent(dropData): PlanetComponent {
        const dropPlanetName = dropData.owner.element.nativeElement.getAttribute("data-name");

        return this.planets.filter((planet) => planet.name === dropPlanetName)[0];
    }
}
