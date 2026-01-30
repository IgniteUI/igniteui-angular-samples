import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, RowType } from 'igniteui-angular/grids/core';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-row-classes-sample',
    styleUrls: ['./grid-rowClasses.component.scss'],
    templateUrl: 'grid-rowClasses.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class GridRowClassesComponent implements OnInit {
    @ViewChild('grid', { static: true }) public grid: IgxGridComponent;
    public data: any[];

    public constructor() { }

    public activeRowCondition = (row: RowType) => this.grid?.navigation.activeNode?.row === row.index;
    // eslint-disable-next-line @typescript-eslint/member-ordering
    public rowClasses = {
        activeRow: this.activeRowCondition
    };

    public ngOnInit(): void {
        this.data = DATA;
    }

    public handleChange() {
        requestAnimationFrame(() => {
            this.grid.pipeTrigger++;
            this.grid.notifyChanges();
        });
    }
    public handleLeftClick(args) {
        args.event.preventDefault();
        this.grid.navigation.setActiveNode({ row: args.cell.row.index, column: args.cell.column.visibleIndex });

    }
}
