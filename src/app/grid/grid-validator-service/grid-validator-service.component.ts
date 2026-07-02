import { Component } from '@angular/core';
import { employeesData } from '../../data/employeesData';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxColumnEmailValidatorDirective, IgxColumnMinValidatorDirective, IgxColumnRequiredValidatorDirective } from 'igniteui-angular/grids/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-grid-validator-service',
    styleUrls: ['./grid-validator-service.component.scss'],
    templateUrl: './grid-validator-service.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent, IgxColumnRequiredValidatorDirective, IgxColumnEmailValidatorDirective, IgxColumnMinValidatorDirective, DatePipe]
})
export class GridValidatorServiceComponent {
    public data: any[];
    public employeesData: any[];
    public rowEdit: boolean = true;

    constructor() {
        this.data = employeesData;
    }
}
