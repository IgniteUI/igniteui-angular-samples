import { Component, ElementRef, ViewChild } from '@angular/core';
import { CloseScrollStrategy, ConnectedPositioningStrategy, IgxDropDownComponent, OverlaySettings } from 'igniteui-angular';
import { DropDownSample2Component } from '../dropdown-sample-2/dropdown-sample-2.component';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-sample-1',
    styleUrls: ['./dropdown-sample-1.component.scss'],
    templateUrl: './dropdown-sample-1.component.html'
})
export class DropDownSample1Component {
    @ViewChild('dropdown', { read: IgxDropDownComponent }) public dropDown: IgxDropDownComponent;
    @ViewChild('nested', { read: DropDownSample2Component }) public nested: DropDownSample2Component;

    private isHovered = false;

    public items: { field: string }[] = [
        { field: 'Option 1' },
        { field: 'Option 2' },
        { field: 'Option 3' }
    ];

    public ngAfterViewInit() {
        this.dropDown.selectionChanging.subscribe(ev => {
           if (ev.newSelection.id === 'igx-drop-down-item-0') {
            ev.cancel = true;
           }
        });
    }

    public onMouseEnter(ev) {
        console.log('MouseEnter');
        // debugger;
        this.isHovered = true;
        if(this.nested.nestedDropdown.collapsed) {
            this.nested.open(ev.target);
        }
    }

    public shouldClose() {
        setTimeout(() => {

            console.log('ShouldClose');
            console.log(this.isHovered);
            if(!this.isHovered) {

                this.nested.nestedDropdown.close();
            }
        }, 150);
    }

    public onMouseLeave(ev) {
        this.isHovered = false;
        setTimeout(() => {

            if(!this.nested.isHovered) {
                this.nested.nestedDropdown.close();
            }
        }, 50);
    }
}
