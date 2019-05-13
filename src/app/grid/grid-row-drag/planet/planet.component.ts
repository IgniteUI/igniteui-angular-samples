import { ChangeDetectorRef, Component, HostBinding, HostListener, Input, ViewChild } from "@angular/core";
import { IgxDialogComponent } from "igniteui-angular";
import { IPlanet } from "../data";

@Component({
    selector: "planet",
    styleUrls: ["./planet.component.scss"],
    templateUrl: "planet.component.html"
})

export class PlanetComponent {

    @ViewChild("info", { read: IgxDialogComponent })
    public info: IgxDialogComponent;

    @Input()
    public data: IPlanet;

    private _moonCount: number = 0;

    @HostBinding("attr.data-name")
    public get name(): string {
        return this.data.name;
    }

    public get moonsCount(): number {
        return this._moonCount;
    }

    public set moonsCount(count: number) {
        this._moonCount = count;
        if (count === this.data.moons.length) {
            this.info.open();
        }
    }

    constructor(public cdr: ChangeDetectorRef) { }

    public get size(): number {
        return this.data.size * 10;
    }

    public get margin(): string {
        return `0px ${(70 - this.size) / 2}px`;
    }

    public moonClasses(moonIndex) {
        return `moon ${((moonIndex < this.moonsCount) ? "moon-selected" : "")}`;
    }

    public get description() {
        if (this.moonsCount < this.data.moons.length) {
            return `Drag and drop here all of the ${this.name} moons, listed in the grid.`;
        } else {
            return this.data.description;
        }
    }

    @HostListener("click")
    public onClick() {
        this.info.open();
    }
}
