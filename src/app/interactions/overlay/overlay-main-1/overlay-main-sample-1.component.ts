import { Component, Inject, OnDestroy } from "@angular/core";
import { IgxOverlayService } from "igniteui-angular";
import { Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { MyDynamicCardComponent} from "../overlay-dynamic-card/overlay-dynamic-card.component";
@Component({
    selector: "overlay-sample",
    templateUrl: `./overlay-main-sample-1.component.html`,
    styleUrls: [`./overlay-main-sample-1.component.scss`]
})
export class OverlaySampleMain1Component implements OnDestroy {
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
            this._overlayId = this.overlayService.attach(MyDynamicCardComponent);
        }

        this.overlayService.show(this._overlayId);
    }

    public ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
