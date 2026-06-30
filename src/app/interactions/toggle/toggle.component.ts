import { Component, ElementRef, ViewChild } from '@angular/core';

import { ConnectedPositioningStrategy, HorizontalAlignment, OverlaySettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxButtonDirective, IgxToggleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-toggle',
    styleUrls: ['./toggle-samples.scss'],
    templateUrl: './toggle.component.html',
    imports: [IgxButtonDirective, IgxToggleDirective]
})
export class ToggleComponent {
    @ViewChild(IgxToggleDirective, { static: true }) public igxToggle: IgxToggleDirective;
    @ViewChild('button', { static: true }) public igxButton: ElementRef;

    public _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom
    };

    public _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: false,
        modal: false,
        closeOnEscape: true,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings)
    };

    public toggle() {
        this._overlaySettings.target = this.igxButton.nativeElement;
        this.igxToggle.toggle(this._overlaySettings);
    }
}
