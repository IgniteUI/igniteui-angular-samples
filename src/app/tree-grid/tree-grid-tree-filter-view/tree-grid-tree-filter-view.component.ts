import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, TreeGridFilteringStrategy } from '@infragistics/igniteui-angular';
import { FOODS_DATA } from '../data/foods';

@Component({
    selector: 'app-tree-grid-tree-filter-view',
    styleUrls: ['./tree-grid-tree-filter-view.component.scss'],
    templateUrl: 'tree-grid-tree-filter-view.component.html'
})

export class TreeGridTreeFilterViewComponent implements OnInit {
    @ViewChild('treegrid1', { read: IgxTreeGridComponent, static: true })
    public treegrid1: IgxTreeGridComponent;

    public data: any[];
    public filterStrategy = new TreeGridFilteringStrategy(['Name']);

    public ngOnInit(): void {
        this.data = FOODS_DATA();
    }
}
