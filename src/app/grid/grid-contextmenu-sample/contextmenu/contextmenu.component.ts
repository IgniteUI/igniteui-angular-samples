import { Component, EventEmitter, Inject, Input, Output, DOCUMENT } from '@angular/core';
import { IgxIconComponent } from 'igniteui-angular';
import { NgStyle } from '@angular/common';

interface ICopyData {
    data: any;
}
@Component({
    selector: 'app-contextmenu',
    styleUrls: ['./contextmenu.component.scss'],
    templateUrl: './contextmenu.component.html',
    imports: [NgStyle, IgxIconComponent]
})
export class ContextmenuComponent {

    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public cell;

    @Input()
    public selectedCells;

    @Output()
    public cellValueCopy = new EventEmitter<ICopyData>();

    public selectedData: ICopyData;

    constructor(@Inject(DOCUMENT) private document: Document) { }

    public copySelectedCellData(event) {
        const selectedData = { [this.cell.column.field]: this.cell.value };
        this.copyData(JSON.stringify({ [this.cell.column.field]: this.cell.value }));
        this.cellValueCopy.emit({ data: selectedData });
    }

    public copyRowData(event) {
        const selectedData = this.cell.row.data ;
        this.copyData(JSON.stringify(this.cell.row.data));
        this.cellValueCopy.emit({ data: selectedData });
    }

    public copySelectedCells(event) {
        const selectedData = this.selectedCells.data;
        this.copyData(JSON.stringify(selectedData));
        this.cellValueCopy.emit({ data: selectedData });
    }

    public hasMultiCellSelection() {
        return this.selectedCells && Object.entries(this.selectedCells).length !== 0;
    }

    private copyData(data) {
        const tempElement = this.document.createElement('input');
        this.document.body.appendChild(tempElement);
        tempElement.setAttribute('id', 'temp_id');
        (this.document.getElementById('temp_id') as HTMLInputElement).value = data;
        tempElement.select();
        this.document.execCommand('copy');
        this.document.body.removeChild(tempElement);
    }
}
