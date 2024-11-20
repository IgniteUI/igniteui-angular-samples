import { Component, OnInit, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxTreeGridComponent, IgxColumnGroupComponent, IgxCollapsibleIndicatorTemplateDirective, IgxIconComponent, IgxTooltipTargetDirective, IgxTooltipDirective, IgxColumnComponent } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-multi-column-headers-sample',
    styleUrls: ['./tree-grid-collapsible-column-groups.component.scss'],
    templateUrl: './tree-grid-collapsible-column-groups.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnGroupComponent, IgxCollapsibleIndicatorTemplateDirective, IgxIconComponent, IgxTooltipTargetDirective, IgxTooltipDirective, IgxColumnComponent]
})
export class TreeGridMultiCollapsibleColumnGroupsComponent implements OnInit {

    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;
    public data = generateEmployeeDetailedFlatData();
    public selectionMode: GridSelectionMode = 'none';
    public ngOnInit() {
        for (const item of this.data) {
            const names = item.Name.split(' ');
            (item as any).LastName = names[names.length - 1];
            (item as any).FullAddress = `${item.Address}, ${item.City}, ${item.Country}`;
        }
    }

    public getTooltipText(expanded) {
        return expanded ?
            'The column is expanded! Click here to collapse.' : 'The column is collapsed! Click here to expand';
    }
}
