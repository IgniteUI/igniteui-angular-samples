import { Component } from '@angular/core';
import { EMPLOYEE_DATA } from './data';
import { IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective, IgxTreeGridComponent, IgxGridToolbarComponent, IgxSwitchComponent, IgxButtonDirective, IgxRippleDirective, IgxColumnComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-clipboard-operations-sample',
    styleUrls: ['tree-grid-clipboard-operations-sample.component.scss'],
    templateUrl: './tree-grid-clipboard-operations-sample.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxSwitchComponent, IgxButtonDirective, IgxRippleDirective, IgxColumnComponent]
})
export class TreeGridClipboardSampleComponent {

    public data: any[];
    public options = {
        enabled: true,
        copyHeaders: true,
        copyFormatters: true,
        separator: '\t'
    };
    private frmt: Intl.DateTimeFormat;

    constructor() {
        this.data = EMPLOYEE_DATA;
    }

    public formatter = (value: any) => `** ${value} **`;
    public formatDate = (val: Date) => {
        if (!this.frmt) {
            this.frmt = new Intl.DateTimeFormat('en-US');
        }
        return this.frmt.format(val);
    };
    public initColumn(column) {
        if (column.dataType === 'date') {
            column.formatter = this.formatDate;
        } else {
            column.formatter = this.formatter;
        }
        column.header = `🎉${column.field}`;
    }
}
