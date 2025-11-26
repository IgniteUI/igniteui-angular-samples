import { Component, OnDestroy, ViewContainerRef, inject } from '@angular/core';
import { IgxOverlayService, IgxButtonDirective } from 'igniteui-angular';
import { MyDynamicCardComponent} from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    selector: 'app-overlay-sample',
    templateUrl: `./overlay-main-sample-1.component.html`,
    styleUrls: [`./overlay-main-sample-1.component.scss`],
    imports: [IgxButtonDirective]
})
export class OverlaySampleMain1Component implements OnDestroy {
    private overlayService = inject<IgxOverlayService>(IgxOverlayService);
    private viewContainerRef = inject(ViewContainerRef);

    private _overlayId: string;

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
