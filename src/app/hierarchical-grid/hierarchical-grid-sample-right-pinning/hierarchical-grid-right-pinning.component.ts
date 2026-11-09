import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { IPinningConfig, IgxCellHeaderTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { employeesData } from '../../data/employeesData';
import { athletesData } from '../../data/athletesData';
import { DatePipe } from '@angular/common';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'hierarchical-grid-sample',
    styleUrls: ['hierarchical-grid-right-pinning.component.scss'],
    templateUrl: 'hierarchical-grid-right-pinning.component.html',
    imports: [IgxHierarchicalGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxTooltipTargetDirective, IgxTooltipDirective, IgxAvatarComponent, IgxCellHeaderTemplateDirective, IgxIconComponent, IgxRowIslandComponent, DatePipe]
})

export class HierarchicalGridRightPinningSampleComponent implements OnInit {
    @ViewChild('grid1', { static: true })
    public grid1: IgxHierarchicalGridComponent;

    public data: any[];
    public employeesData: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
    private _columnsPinned = true;

    public ngOnInit(): void {
        this.data = athletesData;
        this.employeesData = employeesData;
        let i = 0;
        this.data.forEach((x) => {
            x.FirstPlaces = Math.floor(Math.random() * Math.floor(3));
            x.SecondPlaces = Math.floor(Math.random() * Math.floor(4));
            x.ThirdPlaces = Math.floor(Math.random() * Math.floor(5));
            x.RegistrationDate = this.generateReadableDate(x.Registered);
            x.Birthday = this.generateReadableDate(this.employeesData[i].birthday);
            x.Sponsor = this.employeesData[i].company;
            x.AgentData = [this.employeesData[i]];
            i++;
        });
    }

    public toggleColumn(col: IgxColumnComponent): void {
        col.pinned ? col.unpin() : col.pin();
    }

    public get columnsPinned(): boolean {
        return this._columnsPinned;
    }

    public set columnsPinned(pinned) {
        this._columnsPinned = !this._columnsPinned;
    }

    private generateReadableDate(timestamp: string): Date {
        let dateObj = new Date(timestamp);
        if (isNaN(dateObj.getTime())) {
            dateObj = new Date(timestamp.split(' ')[0]);
        }
        return dateObj;
    }

}
