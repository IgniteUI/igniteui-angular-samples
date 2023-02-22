import { Component, ElementRef } from '@angular/core';
import { CUSTOMERS } from '../../data/hierarchical-data';

@Component({
    selector: 'app-hierarchical-grid-toolbar-pinning',
    styleUrls: ['./hierarchical-grid-toolbar-pinning.component.scss'],
    templateUrl: 'hierarchical-grid-toolbar-pinning.component.html'
})
export class HGridToolbarPinningComponent {
    public localdata;

    constructor(private elRef: ElementRef) {
        this.localdata = CUSTOMERS;
    }

    private parentComponentEl() {
        return this.elRef.nativeElement.parentElement.parentElement;
    }

    public onThemeChanged() {
        const parentEl = this.parentComponentEl();
        parentEl.classList.toggle('dark-theme')
    }
}

