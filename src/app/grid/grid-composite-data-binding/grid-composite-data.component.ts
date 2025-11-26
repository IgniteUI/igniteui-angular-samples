import { Component, OnInit } from '@angular/core';
import { DATA } from '../../data/customers';
import { IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxCellEditorTemplateDirective, IgxInputGroupComponent, IgxInputDirective } from 'igniteui-angular';
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
