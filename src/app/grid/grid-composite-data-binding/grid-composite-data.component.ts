import { Component, OnInit } from '@angular/core';
import { DATA } from '../../data/customers';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxCellEditorTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxInputDirective, IgxInputGroupComponent } from 'igniteui-angular/input-group';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-grid-composite-data',
    styleUrls: ['./grid-composite-data.component.scss'],
    templateUrl: './grid-composite-data.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxCellEditorTemplateDirective, IgxInputGroupComponent, FormsModule, IgxInputDirective]
})
export class GridCompositeDataComponent implements OnInit {

    public data;
    constructor() {}

    public ngOnInit() {
        this.data = DATA;
    }
}
