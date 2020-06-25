import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { IGridCreatedEventArgs, IGridEditEventArgs,
    IgxGridBaseDirective, IgxHierarchicalGridComponent, IgxToastComponent, IgxToastPosition } from "igniteui-angular";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { SINGERS } from "../data";
import { Singer } from "../models";

@Component({
    selector: "hierarchical-grid-editing-events",
    styleUrls: ["./hierarchical-grid-editing-events.component.scss"],
    templateUrl: "hierarchical-grid-editing-events.component.html"
})

export class HGridEditingEventsComponent implements OnInit, OnDestroy {
    @ViewChild(IgxHierarchicalGridComponent, { read: IgxHierarchicalGridComponent, static: true })
    public grid: IgxHierarchicalGridComponent;

    @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true })
    public toast: IgxToastComponent;

    public localData: Singer[];

    private destroy$ = new Subject();

    constructor() { }

    public ngOnInit(): void {
        this.localData = SINGERS;
        this.toast.position = IgxToastPosition.Middle;
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public formatter = (a) => a;

    public handleCellEdit(event: IGridEditEventArgs, grid: IgxGridBaseDirective) {
        const today = new Date();
        const column = grid.columnList.find(col => col.index === event.cellID.columnID);
        if (column.field === "Debut") {
            if (event.newValue > today.getFullYear()) {
                this.toast.message = "The debut date must be in the past!";
                this.toast.show();
                event.cancel = true;
            }
        } else if (column.field === "LaunchDate") {
            if (event.newValue > new Date()) {
                this.toast.message = "The launch date must be in the past!";
                this.toast.show();
                event.cancel = true;
            }
        }
    }

    public handleCreate(event: IGridCreatedEventArgs) {
        event.grid.onCellEdit.pipe(takeUntil(this.destroy$)).subscribe((e) => this.handleCellEdit(e, event.grid));
    }
}
