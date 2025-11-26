import { Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { ConnectedPositioningStrategy, IgxOverlayService, IgxButtonDirective } from 'igniteui-angular';
import { CardSample1Component } from '../../../layouts/card/card-sample-1/card-sample-1.component';
// tslint:disable:object-literal-sort-keys
@Component({
    selector: 'app-overlay-sample',
    templateUrl: `overlay-main-sample-3.component.html`,
    styleUrls: ['overlay-main-sample-3.component.scss'],
    imports: [IgxButtonDirective, CardSample1Component]
})
export class OverlaySampleMain3Component implements OnDestroy {
    private overlayService = inject<IgxOverlayService>(IgxOverlayService);

    @ViewChild('card', { static: true, read: ElementRef })
    private cardSample: ElementRef;

    @ViewChild('buttonElement', { static: true })
    private buttonElement: ElementRef;

    private _overlayId;

    public showOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(this.cardSample, {
                target: this.buttonElement.nativeElement,
                positionStrategy: new ConnectedPositioningStrategy()
            });
        }
        this.overlayService.show(this._overlayId);
    }

    public ngOnDestroy(): void {
        if (this._overlayId) {
            this.overlayService.detach(this._overlayId);
            delete this._overlayId;
        }
    }

}
