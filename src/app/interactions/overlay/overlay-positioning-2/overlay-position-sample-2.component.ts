import { Component, ElementRef, OnDestroy, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { ConnectedPositioningStrategy, HorizontalAlignment, IgxOverlayService, OverlaySettings, PositionSettings, VerticalAlignment, IgxButtonDirective } from 'igniteui-angular';
import { MyDynamicCardComponent } from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    selector: 'app-overlay-sample',
    styleUrls: ['./overlay-position-sample-2.component.scss'],
    templateUrl: './overlay-position-sample-2.component.html',
    providers: [IgxOverlayService],
    imports: [IgxButtonDirective]
})
export class OverlayPositionSample2Component implements OnDestroy {
    private overlayService = inject<IgxOverlayService>(IgxOverlayService);
    private viewContainerRef = inject(ViewContainerRef);

    @ViewChild('buttonElement', { static: true })
    private buttonElement: ElementRef;
    private _overlayId: string;

    public showOverlay() {
        if (!this._overlayId) {
            const positionSettings: PositionSettings = {
                horizontalDirection: HorizontalAlignment.Left,
                verticalDirection: VerticalAlignment.Top,
                horizontalStartPoint: HorizontalAlignment.Right,
                verticalStartPoint: VerticalAlignment.Top
            };
            const strategy = new ConnectedPositioningStrategy(positionSettings);

            // Initialize and use overlay settings
            const overlaySettings: OverlaySettings = {
                target: this.buttonElement.nativeElement,
                // Pass in the positioning strategy
                positionStrategy: strategy
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
