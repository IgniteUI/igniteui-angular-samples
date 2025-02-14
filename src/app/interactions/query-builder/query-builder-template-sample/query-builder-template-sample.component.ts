import { NgForOf, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilteringExpressionsTree, FilteringLogic, IExpressionTree, IgxComboModule, IgxDateFilteringOperand, IgxNumberFilteringOperand, IgxQueryBuilderComponent, IgxQueryBuilderHeaderComponent, IgxQueryBuilderSearchValueTemplateDirective, IgxRadioModule, IgxSelectModule, IgxStringFilteringOperand } from 'igniteui-angular';

@Component({
    selector: 'app-query-builder-template-sample',
    styleUrls: ['./query-builder-template-sample.component.scss'],
    templateUrl: 'query-builder-template-sample.component.html',
    imports: [IgxQueryBuilderComponent, IgxQueryBuilderHeaderComponent, IgxSelectModule, IgxRadioModule, IgxComboModule, FormsModule, IgxQueryBuilderSearchValueTemplateDirective, NgForOf, NgTemplateOutlet]
})
export class QueryBuilderTemplateSampleComponent implements OnInit {
    public shipViaFormatterData: any[];
    public entities: any[];
    public companiesFields: any[];
    public ordersFields: any[];
    public expressionTree: IExpressionTree;
    public regionOptions = [
        { text: 'Central North America', value: 'CNA' },
        { text: 'Central Europe', value: 'CEU' },
        { text: 'Mediterranean region', value: 'MED' },
        { text: 'Central Asia', value: 'CAS' },
        { text: 'South Asia', value: 'SAS' },
        { text: 'Western Africa', value: 'WAF' },
        { text: 'Amazonia', value: 'AMZ' },
        { text: 'Southern Africa', value: 'SAF' },
        { text: 'Northern Australia', value: 'NAU' }];

    public countries = [
        { text: "United States", data: { iso: "US", code: "+1" } },
        { text: "Canada", data: { iso: "CA", code: "+1" } },
        { text: "Mexico", data: { iso: "MX", code: "+52" } },
        { text: "Brazil", data: { iso: "BR", code: "+55" } },
        { text: "Argentina", data: { iso: "AR", code: "+54" } },
        { text: "Colombia", data: { iso: "CO", code: "+57" } },
        { text: "Germany", data: { iso: "DE", code: "+49" } },
        { text: "United Kingdom", data: { iso: "GB", code: "+44" } },
        { text: "France", data: { iso: "FR", code: "+33" } },
        { text: "Nigeria", data: { iso: "NG", code: "+234" } },
        { text: "Egypt", data: { iso: "EG", code: "+20" } },
        { text: "South Africa", data: { iso: "ZA", code: "+27" } },
        { text: "China", data: { iso: "CN", code: "+86" } },
        { text: "India", data: { iso: "IN", code: "+91" } },
        { text: "Japan", data: { iso: "JP", code: "+81" } },
        { text: "Australia", data: { iso: "AU", code: "+61" } },
        { text: "New Zealand", data: { iso: "NZ", code: "+64" } },
        { text: "Papua New Guinea", data: { iso: "PG", code: "+675" } }
    ];

    public statusOptions = [
        { text: 'New', value: 1 },
        { text: 'Shipped', value: 2 },
        { text: 'Done', value: 3 }];

    public ngOnInit(): void {
        this.ordersFields = [
            { field: "CompanyID", dataType: "string" },
            { field: "OrderID", dataType: "number" },
            { field: "EmployeeId", dataType: "number" },
            { field: "OrderDate", dataType: "date" },
            { field: "RequiredDate", dataType: "date" },
            { field: "ShippedDate", dataType: "date" },
            { field: "ShipVia", dataType: "number" },
            { field: "Freight", dataType: "number" },
            { field: "ShipName", dataType: "string" },
            { field: "ShipCity", dataType: "string" },
            { field: "ShipPostalCode", dataType: "string" },
            { field: "ShipCountry", dataType: "string", formatter: (value: any, rowData: any) => rowData === 'equals' || rowData === 'doesNotEqual' ? `${value.iso} (${value.code})` : value },
            { field: "Region", dataType: "string" },
            { field: "OrderStatus", dataType: "number" }
        ];

        this.entities = [
            {
                name: "Orders",
                fields: this.ordersFields
            }
        ];

        const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Orders', ['*']);
        tree.filteringOperands.push({
            fieldName: 'Region',
            condition: IgxStringFilteringOperand.instance().condition('equals'),
            conditionName: 'equals',
            searchVal: 'CNA'
        });
        tree.filteringOperands.push({
            fieldName: 'OrderStatus',
            condition: IgxNumberFilteringOperand.instance().condition('equals'),
            conditionName: 'equals',
            searchVal: 1
        });
        tree.filteringOperands.push({
            fieldName: 'ShipCountry',
            condition: IgxStringFilteringOperand.instance().condition('equals'),
            conditionName: 'equals',
            searchVal: this.countries[3].data
        });

        this.expressionTree = tree;
        this.shipViaFormatterData = [{ id: 0, field: 'sea' }, { id: 1, field: 'air' }, { id: 2, field: 'land' }]
    }

    public printExpressionTree(tree: IExpressionTree) {
        return tree ? JSON.stringify(tree, null, 2) : 'Please add an expression!';
    }
}
