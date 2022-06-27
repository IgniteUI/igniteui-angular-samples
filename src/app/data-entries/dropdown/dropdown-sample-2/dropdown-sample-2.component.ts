import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { ConnectedPositioningStrategy, IgxDropDownComponent, OverlaySettings } from 'igniteui-angular';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-sample-2',
    styleUrls: ['./dropdown-sample-2.component.scss'],
    templateUrl: './dropdown-sample-2.component.html'
})
export class DropDownSample2Component {
    @ViewChild('nestedDropdown', { read: IgxDropDownComponent }) public nestedDropdown: IgxDropDownComponent;
    @Input() parentDropdown: IgxDropDownComponent;

    @Output() shouldClose = new EventEmitter<void>();

    public isHovered = false;

    public ngAfterViewInit() {
        document.getElementById(this.nestedDropdown.id + '-list').addEventListener('mouseenter', () => {
            this.isHovered = true;
        });

        document.getElementById(this.nestedDropdown.id + '-list').addEventListener('mouseleave', () => {
            this.isHovered = false;
            this.shouldClose.emit();
        });
    }

    private overlaySettings: OverlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy(),
        closeOnOutsideClick: true,
        modal: false
    };

    public open(el: any) {
        this.nestedDropdown.open({...this.overlaySettings, target: el});
    }

    public close() {
        this.nestedDropdown.close();
    }

    public nestedSelection(ev) {
        this.nestedDropdown.close();
    }

    public onClosing(ev) {
        // console.log(this.isHovered);
        if(this.isHovered) {
            ev.cancel = true;
        }
    }
}
