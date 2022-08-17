import { Component, ElementRef, ViewChild } from '@angular/core';
import { DATA } from '../../data/customers';

@Component({
    selector: 'grid-column-autosizing-sample',
    styleUrls: ['./grid-column-autosizing.component.scss'],
    templateUrl: 'grid-column-autosizing.component.html'
})

export class GridColumnAutosizingComponent {
    @ViewChild('widthValue', { static: true }) public widthValue: ElementRef;

    public data: any[];

    constructor() {
        this.data = DATA;
        }


    public autosizeAllColumns(){
        this.widthValue.nativeElement.value = "auto"
    }
}
