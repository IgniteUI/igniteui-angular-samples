import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxSwitchComponent, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxRowIslandComponent, IgxColumnMinValidatorDirective, IgxColumnMaxValidatorDirective } from 'igniteui-angular';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hierarchical-grid-validator-service',
    styleUrls: ['./hierarchical-grid-validator-service.component.scss'],
    templateUrl: './hierarchical-grid-validator-service.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxHierarchicalGridComponent, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxRowIslandComponent, IgxColumnMinValidatorDirective, IgxColumnMaxValidatorDirective]
})
export class HierarchicalGridValidatorServiceComponent implements OnInit {

    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public rowEdit: boolean = false;

    public ngOnInit(): void {
        this.hierarchicalGrid.data = CUSTOMERS;
    }

}
