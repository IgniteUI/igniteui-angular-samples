import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxCellEditorTemplateDirective } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-grid-editing-style-sample',
    styleUrls: ['./grid-editing-style-sample.component.scss'],
    templateUrl: './grid-editing-style-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxCellEditorTemplateDirective, FormsModule, DatePipe]
})
export class GridEditingStyleSampleComponent implements OnInit {

    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    constructor() { }

    public ngOnInit() {
        this.data = DATA;
    }
}
