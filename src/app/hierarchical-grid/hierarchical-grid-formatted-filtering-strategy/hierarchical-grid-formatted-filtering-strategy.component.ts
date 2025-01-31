import { Component, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, FormattedValuesFilteringStrategy, IgxColumnComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-formatted-filtering-strategy',
    styleUrls: ['./hierarchical-grid-formatted-filtering-strategy.component.scss'],
    templateUrl: 'hierarchical-grid-formatted-filtering-strategy.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridFormattedFilteringStrategyComponent {

    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;
    public filterStrategy = new FormattedValuesFilteringStrategy();

    constructor() {
        this.localdata = SINGERS;
    }

    public decadeFormatter = (value: number) => Math.floor(value / 10) * 10 + 's';
}
