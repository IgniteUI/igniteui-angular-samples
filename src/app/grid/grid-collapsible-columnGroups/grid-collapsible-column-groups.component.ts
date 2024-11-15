import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxColumnGroupComponent, IgxCollapsibleIndicatorTemplateDirective, IgxIconComponent, IgxTooltipTargetDirective, IgxTooltipDirective, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { INVOICE_DATA } from '../../data/invoiceData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgIf, DatePipe } from '@angular/common';

@Component({
    selector: 'app-grid-collapsible-column-groups',
    styleUrls: ['./grid-collapsible-column-groups.component.scss'],
    templateUrl: './grid-collapsible-column-groups.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnGroupComponent, IgxCollapsibleIndicatorTemplateDirective, IgxIconComponent, IgxTooltipTargetDirective, IgxTooltipDirective, NgIf, IgxColumnComponent, IgxCellTemplateDirective, DatePipe]
})
export class GridCollapsibleColumnGroupsComponent implements OnInit {

    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data;

    public ngOnInit() {
        this.data = INVOICE_DATA;
        for (const item of this.data) {
            const names = item.CustomerName.split(' ');
            item.FirstName = names[0];
            item.LastName = names[names.length - 1];
            item.FullAddress = `${item.Address}, ${item.City}, ${item.Country}`;
        }
    }
}
