import { Component, ElementRef, Inject, OnDestroy, ViewChild } from '@angular/core';
import { ConnectedPositioningStrategy, IgxOverlayService } from 'igniteui-angular';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { CardSample1Component } from '../../../layouts/card/card-sample-1/card-sample-1.component';
// tslint:disable:object-literal-sort-keys
@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'overlay-sample',
    templateUrl: `./overlay-main-sample-2.component.html`,
    styleUrls: [`./overlay-main-sample-2.component.scss`]
})
export class OverlaySampleMain2Component implements OnDestroy {

    @ViewChild('buttonElement', { static: true })
    private buttonElement: ElementRef;
    private destroy$ = new Subject<boolean>();
    private _overlayId: string;
    private _cardHidden = true;


    constructor(
        @Inject(IgxOverlayService) public overlayService: IgxOverlayService
    ) {
        //  overlay service deletes the id when onClosed is called. We should clear our id
        //  also in same event
        this.overlayService
            .onClosed
            .pipe(
                filter((x) => x.id === this._overlayId),
                takeUntil(this.destroy$))
            .subscribe(() => delete this._overlayId);
    }

    public toggleOverlay() {
        if (this._cardHidden) {
            if (!this._overlayId) {
                const positionStrategy = new ConnectedPositioningStrategy();
                this._overlayId = this.overlayService.attach(CardSample1Component, {
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

    public ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
