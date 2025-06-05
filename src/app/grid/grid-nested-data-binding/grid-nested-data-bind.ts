import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import {EMPLOYEE_DATA} from '../../data/nested-employee-data';
import { IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-grid-nested-data-bind',
    styleUrls: ['./grid-nested-data-bind.scss'],
    templateUrl: './grid-nested-data-bind.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelDescriptionDirective, IgxExpansionPanelBodyComponent, IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, DatePipe]
})

export class GridNestedDataBindComponent implements OnInit{
    private cdr = inject(ChangeDetectorRef);

    public data;

    public ngOnInit() {
        this.data = EMPLOYEE_DATA;
        this.cdr.detectChanges();
    }
}
