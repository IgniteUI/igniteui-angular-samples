import { Component, Inject, OnDestroy, ViewContainerRef } from '@angular/core';
import { IgxOverlayService } from 'igniteui-angular';
import { MyDynamicCardComponent} from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    selector: 'app-overlay-sample',
    templateUrl: `./overlay-main-sample-1.component.html`,
    styleUrls: [`./overlay-main-sample-1.component.scss`],
    standalone: false
})
export class OverlaySampleMain1Component implements OnDestroy {
    private _overlayId: string;

    constructor(
        @Inject(IgxOverlayService) private overlayService: IgxOverlayService,
        private viewContainerRef: ViewContainerRef
    ) { }

    public showOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(MyDynamicCardComponent, this.viewContainerRef);
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
