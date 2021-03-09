import { Component, OnInit } from '@angular/core';
import { FOODS_DATA } from '../data/foods';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'tree-grid-paging-sample',
    styleUrls: ['./tree-grid-paging-style-sample.component.scss'],
    templateUrl: 'tree-grid-paging-style-sample.component.html'
})

export class TreeGridPagingStyleSampleComponent implements OnInit {

    public data: any[];

    public ngOnInit(): void {
        this.data = FOODS_DATA();
    }
}
