import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { IPinningConfig, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: 'app-tree-grid-sample',
    styleUrls: ['tree-grid-both-sides-pinning.component.scss'],
    templateUrl: 'tree-grid-both-sides-pinning.component.html',
    imports: [
        IgxTreeGridComponent,
        IgxGridToolbarComponent,
        IgxGridToolbarActionsComponent,
        IgxColumnComponent,
        IgxButtonDirective
    ]
})
export class TreeGridBothSidesPinningSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true })
    public grid1: IgxTreeGridComponent;
    @ViewChild('pinTemplate', { read: TemplateRef, static: true })
    public pinTemplate: TemplateRef<any>;

    public data: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
    public start = ColumnPinningPosition.Start;
    public end = ColumnPinningPosition.End;


    public ngOnInit(): void {
        this.data = generateEmployeeDetailedFlatData();
    }

    public pinLeft() {
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
            if (col.pinned) {
                col.unpin();
            }
            col.pin(undefined, ColumnPinningPosition.Start);
        });
    }

    public pinRight() {
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
            if (col.pinned) {
                col.unpin();
            }
            col.pin(undefined, ColumnPinningPosition.End);
        });
    }

    public unpinColumn() {
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
            col.unpin();
        });
    }
}
