import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, IgxColumnComponent } from 'igniteui-angular';
import { TreeGridLoadOnDemandService } from './remoteService';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-load-on-demand-sample',
    styleUrls: ['./tree-grid-load-on-demand-sample.component.scss'],
    templateUrl: './tree-grid-load-on-demand-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridLoadOnDemandSampleComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data = [];
    private dataService = new TreeGridLoadOnDemandService();

    constructor() { }

    public ngOnInit() {
        this.treeGrid.isLoading = true;
        this.dataService.getData(-1, (children) => {
            this.data = children;
            this.treeGrid.isLoading = false;
        });
    }

    public loadChildren = (parentID: any, done: (children: any[]) => void) => {
        this.dataService.getData(parentID, (children) => done(children));
    };
}
