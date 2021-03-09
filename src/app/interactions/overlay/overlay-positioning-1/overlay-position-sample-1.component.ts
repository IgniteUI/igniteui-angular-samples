import { Component, ElementRef, Inject, OnDestroy, ViewChild } from '@angular/core';
import { ConnectedPositioningStrategy, IgxOverlayService, OverlaySettings } from 'igniteui-angular';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { MyDynamicCardComponent } from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'overlay-sample',
    styleUrls: ['./overlay-position-sample-1.component.scss'],
    templateUrl: './overlay-position-sample-1.component.html',
    providers: [IgxOverlayService]
})
export class OverlayPositionSample1Component implements OnDestroy {
    @ViewChild('buttonElement', { static: true })
    private buttonElement: ElementRef;
    private destroy$ = new Subject<boolean>();
    private _overlayId: string;

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

    public showOverlay() {
        if (!this._overlayId) {
            // Initialize and use overlay settings
            const overlaySettings: OverlaySettings = {
                // Set the target where content should be shown
                target: this.buttonElement.nativeElement,
                // Pass in the positioning strategy
                positionStrategy: new ConnectedPositioningStrategy()
            };
            this._overlayId = this.overlayService.attach(MyDynamicCardComponent, overlaySettings);
        }

        this.overlayService.show(this._overlayId);
    }

    public ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
