import { Component, ElementRef, Inject, OnDestroy, ViewChild } from '@angular/core';
import { AutoPositionStrategy, IgxOverlayService } from 'igniteui-angular';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { MyDynamicCardComponent } from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    selector: 'app-overlay-sample',
    styleUrls: ['./overlay-position-sample-3.component.scss'],
    templateUrl: './overlay-position-sample-3.component.html',
    providers: [IgxOverlayService]
})
export class OverlayPositionSample3Component implements OnDestroy {
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
            const myPositionStrategy = new AutoPositionStrategy();
            this._overlayId = this.overlayService.attach(
                MyDynamicCardComponent, {
                    target: this.buttonElement.nativeElement,
                    positionStrategy: myPositionStrategy
                });
        }

        this.overlayService.show(this._overlayId);
    }

    public ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
