import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxColumnGroupComponent, IgxCollapsibleIndicatorTemplateDirective, IgxIconComponent, IgxTooltipTargetDirective, IgxTooltipDirective, IgxColumnComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-collapsible-column-groups',
    styleUrls: ['./hierarchical-grid-collapsible-column-groups.component.scss'],
    templateUrl: 'hierarchical-grid-collapsible-column-groups.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnGroupComponent, IgxCollapsibleIndicatorTemplateDirective, IgxIconComponent, IgxTooltipTargetDirective, IgxTooltipDirective, IgxColumnComponent, IgxRowIslandComponent]
})

export class HGridCollapsibleColumnGroupComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;
    public localdata;

    constructor() {

    }
    public ngOnInit(): void {
        this.localdata = CUSTOMERS;
        for (const item of this.localdata) {
            const names = item.ContactName.split(' ');
            item.FirstName = names[0];
            item.LastName = names[names.length - 1];
            item.FullAddress = `${item.Address}, ${item.City}, ${item.Country}`;
        }
    }

    public getTooltipText(expanded) {
        return expanded ?
            'The column is expanded! Click here to collapse.' : 'The column is collapsed! Click here to expand';
    }

}
