import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ConnectedPositioningStrategy, HorizontalAlignment, IgxDropDownComponent, OverlaySettings, PositionSettings, VerticalAlignment } from 'igniteui-angular';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-sample-2',
    styleUrls: ['./dropdown-sample-2.component.scss'],
    templateUrl: './dropdown-sample-2.component.html'
})
export class DropDownSample2Component {
    @ViewChild('nestedDropdown', { read: IgxDropDownComponent }) public nestedDropdown: IgxDropDownComponent;
    @Input() parentDropdown: IgxDropDownComponent;

    @Output() selection = new EventEmitter<string>();

    private posSettings: PositionSettings = {
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Top
    }

    private overlaySettings: OverlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy(this.posSettings),
        closeOnOutsideClick: true,
        modal: false
    };

    public open(el: any) {
        this.nestedDropdown.open({ ...this.overlaySettings, target: el });
    }

    public close() {
        this.nestedDropdown.close();
    }

    public nestedSelection(ev) {
        if (!ev.newSelection) {
            return;
        }
        this.selection.emit(ev.newSelection.value);
        this.parentDropdown.close();
    }

    public clearSelection() {
        this.nestedDropdown.clearSelection();
    }
}
