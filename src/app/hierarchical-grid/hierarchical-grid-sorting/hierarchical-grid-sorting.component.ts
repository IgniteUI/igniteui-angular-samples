import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent, SortingDirection, DefaultSortingStrategy } from "igniteui-angular";
import { SINGERS } from '../data';

@Component({
    selector: "hierarchical-grid-sorting",
    styleUrls: ["./hierarchical-grid-sorting.component.scss"],
    templateUrl: "hierarchical-grid-sorting.component.html"
})

export class HGridSortingSampleComponent implements OnInit, AfterViewInit {
    public localdata;

    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public clickedCell = null;

    @ViewChild('layout1')
    layout1: IgxRowIslandComponent;

    @ViewChild('hGrid')
    hGrid: IgxHierarchicalGridComponent;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
        this.hGrid.sortingExpressions = [
            { dir: SortingDirection.Asc, fieldName: "Artist",
              ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
        ];
    }
    public ngAfterViewInit(): void {
        this.hGrid.cdr.detectChanges()
    }

    public rightClick(eventArgs) {

        eventArgs.event.preventDefault();
        this.contextmenuX = eventArgs.event.clientX;
        this.contextmenuY = eventArgs.event.clientY;
        this.contextmenu = true;
        this.clickedCell = eventArgs.cell;
      }
  
      public disableContextMenu() {
        this.contextmenu = false;
     }

}
