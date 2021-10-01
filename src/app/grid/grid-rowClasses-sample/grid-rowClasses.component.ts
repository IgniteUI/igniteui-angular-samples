import { Component, OnInit, ViewChild } from '@angular/core';
import {
    ConnectedPositioningStrategy,
    HorizontalAlignment,
    IgxGridComponent,
    OverlaySettings,
    RowType,
    VerticalAlignment
} from 'igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-row-classes-sample',
    styleUrls: ['./grid-rowClasses.component.scss'],
    templateUrl: 'grid-rowClasses.component.html'
})
export class GridRowClassesComponent implements OnInit {
    @ViewChild('grid', { static: true }) public grid: IgxGridComponent;
    public data: any[];
    public _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: false,
        modal: false,
        closeOnEscape: true,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings)
    };

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
