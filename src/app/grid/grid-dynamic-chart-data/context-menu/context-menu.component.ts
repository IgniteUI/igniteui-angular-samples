import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "context-menu",
  templateUrl: "./context-menu.component.html",
  styleUrls: ["./context-menu.component.scss"]
})
export class ContextMenuComponent {

    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public cell;

    @Input()
    public selectedCells;

    public selectedData: any [];

    constructor() { }

    public hasMultiCellSelection() {
        return this.selectedCells && Object.entries(this.selectedCells).length !== 0;
    }
}
