import { Component, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxHierarchicalGridComponent, IgxGridToolbarComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective, FilteringExpressionsTree, IgxDateFilteringOperand, IgxStringFilteringOperand, IgxNumberFilteringOperand, FilteringLogic } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-advanced-filtering',
    styleUrls: ['./hierarchical-grid-advanced-filtering.component.scss'],
    templateUrl: 'hierarchical-grid-advanced-filtering.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective]
})

export class HGridAdvancedFilteringSampleComponent implements AfterViewInit{
    @ViewChild('hGrid', { static: true })
    private hGrid: IgxHierarchicalGridComponent;

    public localData;

    constructor(private cdr: ChangeDetectorRef) {
        this.localData = SINGERS;
    }
    
    public ngAfterViewInit() {
        const albumsTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Albums', ['Artist']);
        albumsTree.filteringOperands.push({
            fieldName: 'LaunchDate',
            condition: IgxDateFilteringOperand.instance().condition('after'),
            conditionName: IgxDateFilteringOperand.instance().condition('after').name,
            searchVal: new Date(2017, 1, 1)
        });
        const tree = new FilteringExpressionsTree(FilteringLogic.And);
        tree.filteringOperands.push({
            fieldName: 'Artist',
            condition: IgxStringFilteringOperand.instance().condition('inQuery'),
            conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
            searchTree: albumsTree
        });
        this.hGrid.advancedFilteringExpressionsTree = tree;
        this.cdr.detectChanges();
    }

    public formatter = (a) => a;
}
