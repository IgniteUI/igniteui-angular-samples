import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, TreeGridFilteringStrategy } from 'igniteui-angular';
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
    public filterStrategy = new TreeGridFilteringStrategy();

    public ngOnInit(): void {
        this.filterStrategy = new TreeGridFilteringStrategy(['Name']);
        this.data = FOODS_DATA();
    }

    public formatPrice(value: number) {
        return value ? value < 15 ? 'low' : value > 50 ? 'high' : 'medium' : '';
    }
}
