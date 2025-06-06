import { Component, ElementRef, OnDestroy, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { ConnectedPositioningStrategy, IgxOverlayService, IgxButtonDirective } from 'igniteui-angular';
import { CardSample1Component } from '../../../layouts/card/card-sample-1/card-sample-1.component';
// tslint:disable:object-literal-sort-keys
@Component({
    selector: 'app-overlay-sample',
    templateUrl: `./overlay-main-sample-2.component.html`,
    styleUrls: [`./overlay-main-sample-2.component.scss`],
    imports: [IgxButtonDirective]
})
export class OverlaySampleMain2Component implements OnDestroy {
    private overlayService = inject<IgxOverlayService>(IgxOverlayService);
    private viewContainerRef = inject(ViewContainerRef);


    @ViewChild('buttonElement', { static: true })
    private buttonElement: ElementRef;
    private _overlayId: string;
    private _cardHidden = true;

    public toggleOverlay() {
        if (this._cardHidden) {
            if (!this._overlayId) {
                const positionStrategy = new ConnectedPositioningStrategy();
                this._overlayId = this.overlayService.attach(CardSample1Component, this.viewContainerRef, {
                    target: this.buttonElement.nativeElement,
                    positionStrategy,
                    modal: false,
                    closeOnOutsideClick: false
                });
            }
            this.overlayService.show(this._overlayId);
        } else {
            this.overlayService.hide(this._overlayId);
        }
        this._cardHidden = !this._cardHidden;
    }

    public ngOnDestroy(): void {
        if (this._overlayId) {
            this.overlayService.detach(this._overlayId);
            delete this._overlayId;
        }
    }
}
