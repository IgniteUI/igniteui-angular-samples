import { Component, ElementRef, Inject, OnDestroy, ViewChild } from "@angular/core";
import {
    AbsolutePosition,
    IgxDragDirective,
    IgxOverlayService,
    OverlaySettings,
    RelativePosition,
    RelativePositionStrategy
} from "igniteui-angular";
import { MyDynamicCardComponent } from "../overlay-dynamic-card/overlay-dynamic-card.component";
import { filter, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
// tslint:disable:object-literal-sort-keys
@Component({
    selector: "overlay-sample",
    styleUrls: ["./overlay-preset-settings-sample.component.scss"],
    templateUrl: "./overlay-preset-settings-sample.component.html",
    providers: [IgxOverlayService]
})
export class OverlayPresetSettingsSampleComponent implements OnDestroy {
    @ViewChild('buttonElement', { static: true }) public button: ElementRef;
    @ViewChild('outlet', { static: true }) public outletElement: ElementRef;
    @ViewChild(IgxDragDirective, { static: true }) public igxDrag: IgxDragDirective;

    private _overlayId: string;
    private _overlaySettings: OverlaySettings;
    private destroy$ = new Subject<boolean>();

    absStrategies = ['global', 'container'];
    absPositions = [AbsolutePosition.Center, AbsolutePosition.Top, AbsolutePosition.Bottom];

    relStrategies = [RelativePositionStrategy.Auto, RelativePositionStrategy.Connected, RelativePositionStrategy.Elastic];
    relPositions = [
        RelativePosition.Above,
        RelativePosition.Below,
        RelativePosition.Before,
        RelativePosition.After,
        RelativePosition.Default];

    absPositionStrategy = 'global';
    absPosition: AbsolutePosition = AbsolutePosition.Center;
    relPositionStrategy: RelativePositionStrategy;
    relPosition: RelativePosition;

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

    ngOnInit(): void {
        this._overlaySettings = IgxOverlayService.createAbsoluteOverlaySettings(this.absPosition);
    }

    onChange(event) {
        switch (event) {
            case 'auto':
            case 'connected':
            case 'elastic':
            case 'above':
            case 'below':
            case 'before':
            case 'after':
            case 'default':
                this.clearAbsoluteSettings();
                this.relPositionStrategy = this.relPositionStrategy || RelativePositionStrategy.Auto;
                this.relPosition = this.relPosition || RelativePosition.Default;
                this._overlaySettings = IgxOverlayService.createRelativeOverlaySettings(
                    this.button.nativeElement,
                    this.relPosition,
                    this.relPositionStrategy);
                break;
            case 'global':
            case 'container':
            case 'top':
            case 'bottom':
            case 'center':
                this.clearRelativeSettings();
                this.absPositionStrategy = this.absPositionStrategy || 'global';
                this.absPosition = this.absPosition || AbsolutePosition.Center;
                this.setAbsoluteOverlaySettings(this.absPositionStrategy);
                break;
        }
    }

    public showOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(MyDynamicCardComponent);
        }

        this.overlayService.show(this._overlayId, this._overlaySettings);
    }

    public ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    private clearAbsoluteSettings() {
        this.absPositionStrategy = null;
        this.absPosition = null;
    }

    private clearRelativeSettings() {
        this.relPositionStrategy = null;
        this.relPosition = null;
    }

    private setAbsoluteOverlaySettings(strategy: string) {
        switch (strategy) {
            case 'container':
                this._overlaySettings = IgxOverlayService.createAbsoluteOverlaySettings(this.absPosition, this.outletElement);
                break;
            case 'global':
            default:
                this._overlaySettings = IgxOverlayService.createAbsoluteOverlaySettings(this.absPosition);
                break;
        }
    }
}
