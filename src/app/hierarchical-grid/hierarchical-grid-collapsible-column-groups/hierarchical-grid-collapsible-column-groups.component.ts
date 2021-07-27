import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-hierarchical-grid-collapsible-column-groups',
    styleUrls: ['./hierarchical-grid-collapsible-column-groups.component.scss'],
    templateUrl: 'hierarchical-grid-collapsible-column-groups.component.html'
})

export class HGridCollapsibleColumnGroupComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;
    public localdata;

    constructor() {

    }
    public ngOnInit(): void {
        this.localdata = DATA;
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
