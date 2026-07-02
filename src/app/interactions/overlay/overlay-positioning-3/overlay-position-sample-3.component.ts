import { Component, ElementRef, OnDestroy, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { AutoPositionStrategy, IgxOverlayService } from 'igniteui-angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { MyDynamicCardComponent } from '../overlay-dynamic-card/overlay-dynamic-card.component';
@Component({
    selector: 'app-overlay-sample',
    styleUrls: ['./overlay-position-sample-3.component.scss'],
    templateUrl: './overlay-position-sample-3.component.html',
    providers: [IgxOverlayService],
    imports: [IgxButtonDirective]
})
export class OverlayPositionSample3Component implements OnDestroy {
    private overlayService = inject<IgxOverlayService>(IgxOverlayService);
    private viewContainerRef = inject(ViewContainerRef);

    @ViewChild('buttonElement', { static: true })
    private buttonElement: ElementRef;
    private _overlayId: string;

    public showOverlay() {
        if (!this._overlayId) {
            const myPositionStrategy = new AutoPositionStrategy();
            this._overlayId = this.overlayService.attach(
                MyDynamicCardComponent, this.viewContainerRef, {
                    target: this.buttonElement.nativeElement,
                    positionStrategy: myPositionStrategy
                });
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
