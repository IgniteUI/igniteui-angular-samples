/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, RowType, IgxColumnComponent, IgxCellTemplateDirective, IgxIconButtonDirective, IgxIconComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { isPlatformBrowser } from '@angular/common';
@Component({
    selector: 'app-hgrid-row-classes',
    styleUrls: ['./hgrid-rowClasses.component.scss'],
    templateUrl: 'hgrid-rowClasses.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxIconButtonDirective, IgxIconComponent, IgxRowIslandComponent]
})

export class HGridRowClassesSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;
    public localdata;

    constructor(@Inject(PLATFORM_ID) private platformId: any) { }

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }

    public removeRow(rowIndex) {
        const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
        row.delete();
    }

    public activeRowCondition = (row: RowType) => this.hierarchicalGrid?.navigation.activeNode?.row === row.index;
    // eslint-disable-next-line @typescript-eslint/member-ordering
    public rowClasses = {
        activeRow: this.activeRowCondition
    };


    public handleChange() {
        if (isPlatformBrowser(this.platformId)) {
            requestAnimationFrame(() => {
                this.hierarchicalGrid.pipeTrigger++;
                this.hierarchicalGrid.notifyChanges();
            });
        }
    }
    public handleLeftClick(args) {
        args.event.preventDefault();
        this.hierarchicalGrid.navigation.setActiveNode({ row: args.cell.row.index, column: args.cell.column.visibleIndex });
    }

}
