/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxColumnComponent, IgxColumnMaxValidatorDirective, IgxColumnMinValidatorDirective, IgxColumnRequiredValidatorDirective } from 'igniteui-angular/grids/core';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-validator-service-component',
    styleUrls: ['tree-grid-validator-service.component.scss'],
    templateUrl: 'tree-grid-validator-service.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxColumnMinValidatorDirective, IgxColumnMaxValidatorDirective]
})
export class TreeGridValidatorServiceComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;

    public data: IEmployee[];

    public rowEdit: boolean = false;

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }
}
