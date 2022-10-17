import { Component } from '@angular/core';

@Component({
    selector: 'app-query-builder-style-sample',
    styleUrls: ['./query-builder-style.component.scss'],
    templateUrl: 'query-builder-style.component.html'
})
export class QueryBuilderStyleComponent {
    
    public fields: any[] = [
        { field: 'ID', dataType: 'string' },
        { field: 'CompanyName', dataType: 'string' },
        { field: 'ContactName', dataType: 'string' },
        { field: 'Employees', dataType: 'number' },
        { field: 'ContactTitle', dataType: 'string' },
        { field: 'DateCreated', dataType: 'date' },
        { field: 'TimeCreated', dataType: 'time' },
        { field: 'Address', dataType: 'string' },
        { field: 'City', dataType: 'string' },
        { field: 'Region', dataType: 'string' },
        { field: 'PostalCode', dataType: 'string' },
        { field: 'Phone', dataType: 'string' },
        { field: 'Fax', dataType: 'string' },
        { field: 'Contract', dataType: 'boolean' }
    ];
}
