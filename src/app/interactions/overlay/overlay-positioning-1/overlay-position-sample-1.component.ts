import { Component, ElementRef, Inject, OnDestroy, ViewChild, ViewContainerRef } from '@angular/core';
import { ConnectedPositioningStrategy, IgxOverlayService, OverlaySettings, IgxButtonDirective } from 'igniteui-angular';
import { Subject } from 'rxjs';
import { MyDynamicCardComponent } from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    selector: 'app-overlay-sample',
    styleUrls: ['./overlay-position-sample-1.component.scss'],
    templateUrl: './overlay-position-sample-1.component.html',
    providers: [IgxOverlayService],
    imports: [IgxButtonDirective]
})
export class OverlayPositionSample1Component implements OnDestroy {
    @ViewChild('buttonElement', { static: true })
    private buttonElement: ElementRef;
    private _overlayId: string;

    constructor(
        @Inject(IgxOverlayService) private overlayService: IgxOverlayService,
        private viewContainerRef: ViewContainerRef
    ) { }

    public showOverlay() {
        if (!this._overlayId) {
            // Initialize and use overlay settings
            const overlaySettings: OverlaySettings = {
                // Set the target where content should be shown
                target: this.buttonElement.nativeElement,
                // Pass in the positioning strategy
                positionStrategy: new ConnectedPositioningStrategy()
            };
            this._overlayId = this.overlayService.attach(MyDynamicCardComponent, this.viewContainerRef, overlaySettings);
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
