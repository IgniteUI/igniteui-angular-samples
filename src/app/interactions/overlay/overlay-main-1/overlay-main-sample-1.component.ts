import { Component, Inject, OnDestroy } from '@angular/core';
import { IgxOverlayService } from 'igniteui-angular';
import { MyDynamicCardComponent} from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    selector: 'app-overlay-sample',
    templateUrl: `./overlay-main-sample-1.component.html`,
    styleUrls: [`./overlay-main-sample-1.component.scss`]
})
export class OverlaySampleMain1Component implements OnDestroy {
    private _overlayId: string;

    constructor(@Inject(IgxOverlayService) public overlayService: IgxOverlayService) {}

    public showOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(MyDynamicCardComponent);
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
