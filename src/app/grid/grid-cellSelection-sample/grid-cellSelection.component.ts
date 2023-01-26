import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxGridComponent, IgxSnackbarComponent } from '@infragistics/igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-cell-selection',
    styleUrls: ['./grid-cellSelection.component.scss'],
    templateUrl: 'grid-cellSelection.component.html'
})
export class GridCellSelectionComponent implements OnInit {
    @ViewChild('grid', { static: true }) public grid: IgxGridComponent;
    @ViewChild(IgxSnackbarComponent, { static: true }) public snackbar: IgxSnackbarComponent;
    @ViewChild('logger') public logger: ElementRef;
    public data: any[];
    public selection = true;
    public selectionMode: GridSelectionMode = 'multiple';
    public selectionModes = [];

    constructor(private renderer: Renderer2) { }

    public ngOnInit(): void {
        this.data = DATA;
        this.selectionModes = [
            { label: 'none', selected: this.selectionMode === 'none', togglable: true },
            { label: 'single', selected: this.selectionMode === 'single', togglable: true },
            { label: 'multiple', selected: this.selectionMode === 'multiple', togglable: true }
        ];
        this.snackbar.autoHide = false;
        this.snackbar.open();
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbar.open();
    }

    public onRangeSelected() {
        const selectedData = JSON.stringify(this.grid.getSelectedData());
        this.logAnEvent(`=> 'rangeSelected' with value: ` + selectedData);
    }

    public onCellSelected(event) {
        this.logAnEvent(`=> 'selected' with value: ` + event.cell.value);
    }

    public clearLog() {
        const  elements = this.logger.nativeElement.querySelectorAll('p');
        for (let index = 0; index < elements.length; index++) {
            this.renderer.removeChild(this.logger.nativeElement, elements[index]);
        }
    }

    private logAnEvent(msg: string, canceled?: boolean) {
        const createElem = this.renderer.createElement('p');

        if (canceled) {
            msg = msg.concat(': has been canceled ');
        }

        const text = this.renderer.createText(msg);
        this.renderer.appendChild(createElem, text);
        const container = this.logger.nativeElement;
        this.renderer.insertBefore(container, createElem, container.children[0]);
    }
}
