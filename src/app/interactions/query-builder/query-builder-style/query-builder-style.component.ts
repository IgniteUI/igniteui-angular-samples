import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-query-builder-style-sample',
    styleUrls: ['./query-builder-style.component.scss'],
    templateUrl: 'query-builder-style.component.html'
})
export class QueryBuilderStyleComponent implements OnInit {
    public entities: any[];
    public companiesFields: any[];
    public ordersFields: any[];

    public ngOnInit(): void {
        this.companiesFields = [
            { field: "ID", dataType: "string" },
            { field: "CompanyName", dataType: "string" },
            { field: "ContactName", dataType: "string" },
            { field: "Employees", dataType: "number" },
            { field: "ContactTitle", dataType: "string" },
            { field: "DateCreated", dataType: "date" },
            { field: "TimeCreated", dataType: "time" },
            { field: "Address", dataType: "string" },
            { field: "City", dataType: "string" },
            { field: "Region", dataType: "string" },
            { field: "PostalCode", dataType: "string" },
            { field: "Phone", dataType: "string" },
            { field: "Fax", dataType: "string" },
            { field: "Contract", dataType: "boolean" }
        ];

        this.ordersFields = [
            { field: "OrderId", dataType: "number" },
            { field: "EmployeeId", dataType: "number" },
            { field: "OrderDate", dataType: "date" },
            { field: "RequiredDate", dataType: "date" },
            { field: "ShippedDate", dataType: "date" },
            { field: "ShipVia", dataType: "number" },
            { field: "Freight", dataType: "number" },
            { field: "ShipName", dataType: "string" },
            { field: "ShipCity", dataType: "string" },
            { field: "ShipPostalCode", dataType: "string" },
            { field: "ShipCountry", dataType: "string" },
            { field: "Region", dataType: "string" }
        ];

        this.entities = [
            {
                name: "Companies",
                fields: this.companiesFields
            },
            {
                name: "Orders",
                fields: this.ordersFields
            }
        ];
    }
}
