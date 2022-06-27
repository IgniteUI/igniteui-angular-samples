import { Component, ViewChild } from '@angular/core';
import { IgxDropDownComponent } from 'igniteui-angular';
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

    public selectedItem = 'Home';

    public items: { field: string }[] = [
        { field: 'Option 1' },
        { field: 'Option 2' },
        { field: 'Option 3' }
    ];

    private shouldSelect = false;

    public ngAfterViewInit() {
        this.dropDown.selectionChanging.subscribe(ev => {
            if (ev.newSelection.id === 'igx-drop-down-item-0') {
                if (this.shouldSelect) {
                    this.shouldSelect = false;
                    return;
                }
                ev.cancel = true;
                if (this.nested.nestedDropdown.collapsed) {
                    this.nested.open(ev.newSelection.element.nativeElement);
                } else {
                    this.nested.close();
                }
            } else {
                this.selectedItem = ev.newSelection.value;
                this.nested.clearSelection();
            }
        });
    }

    public onNestedSelection(ev) {
        this.selectedItem = ev;
        this.shouldSelect = true;
        this.dropDown.setSelectedItem(3);
    }
}
