import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent } from '@infragistics/igniteui-angular';
import { CUSTOMERS } from '../../data/hierarchical-data';

@Component({
    selector: 'app-hierarchical-grid-validator-service',
    styleUrls: ['./hierarchical-grid-validator-service.component.scss'],
    templateUrl: './hierarchical-grid-validator-service.component.html'
})
export class HierarchicalGridValidatorServiceComponent implements OnInit {

    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public rowEdit: boolean = false;

    public ngOnInit(): void {
        this.hierarchicalGrid.data = CUSTOMERS;
    }

}
