import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent } from 'igniteui-angular';
import { SINGERS } from '../data';

@Component({
    selector: 'app-hierarchical-grid-column-selection',
    templateUrl: './hierarchical-grid-column-selection.component.html',
    styleUrls: ['./hierarchical-grid-column-selection.component.scss']
})
export class HierarchicalGridColumnSelectionComponent implements OnInit, AfterViewInit {
    @ViewChild(IgxHierarchicalGridComponent)
    public hGrid: IgxHierarchicalGridComponent;

    public data;
    public currentColumnSelection = 'single';

    public formatter = (a) => a;

    public ngOnInit() {
        this.data = SINGERS;
    }

    public ngAfterViewInit() {
        this.hGrid.selectColumns(['Artist']);
    }

}
