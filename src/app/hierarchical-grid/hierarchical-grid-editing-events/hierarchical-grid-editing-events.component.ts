import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IGridCreatedEventArgs, IGridEditEventArgs,
    IgxHierarchicalGridComponent, IgxToastComponent, VerticalAlignment } from 'igniteui-angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SINGERS } from '../../data/singersData';
import { Singer } from '../models';

@Component({
    selector: 'app-hierarchical-grid-editing-events',
    styleUrls: ['./hierarchical-grid-editing-events.component.scss'],
    templateUrl: 'hierarchical-grid-editing-events.component.html'
})

export class HGridEditingEventsComponent implements OnInit, OnDestroy {
    @ViewChild(IgxHierarchicalGridComponent, { read: IgxHierarchicalGridComponent, static: true })
    public grid: IgxHierarchicalGridComponent;

    @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true })
    public toast: IgxToastComponent;

    public localData: Singer[];

    private destroy$ = new Subject<void>();

    constructor() { }

    public ngOnInit(): void {
        this.localData = SINGERS;
        this.toast.positionSettings.verticalDirection = VerticalAlignment.Middle;
    }

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    public formatter = (a) => a;

    public handleCellEdit(event: IGridEditEventArgs) {
        const today = new Date();
        const column = event.column;
        if (column.field === 'Debut') {
            if (event.newValue > today.getFullYear()) {
                this.toast.open('The debut date must be in the past!');
                event.cancel = true;
            }
        } else if (column.field === 'LaunchDate') {
            if (event.newValue > new Date()) {
                this.toast.open('The launch date must be in the past!');
                event.cancel = true;
            }
        }
    }

    public handleCreate(event: IGridCreatedEventArgs) {
        event.grid.cellEdit.pipe(takeUntil(this.destroy$)).subscribe((e) => this.handleCellEdit(e));
    }
}
