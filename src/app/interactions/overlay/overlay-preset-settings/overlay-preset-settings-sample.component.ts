import {
    Component,
    ElementRef,
    Inject,
    OnDestroy,
    ViewChild
} from "@angular/core";
import {
    AbsolutePosition,
    IgxOverlayService,
    OverlaySettings,
    RelativePosition,
    RelativePositionStrategy,
    IButtonGroupEventArgs
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
    @ViewChild("anchor", { static: true })
    public anchor: ElementRef;

    @ViewChild("outlet", { static: true })
    public outlet: ElementRef;

    private _overlayId: string;
    private _overlaySettings: OverlaySettings;
    private destroy$ = new Subject<boolean>();

    public positionStrategies = ["relative", "absolute"];
    public positionStrategy = this.positionStrategies[0];

    public absStrategies = ["container", "global"];

    public absPositions = [
        AbsolutePosition.Center,
        AbsolutePosition.Top,
        AbsolutePosition.Bottom
    ];

    public relStrategies = [
        RelativePositionStrategy.Auto,
        RelativePositionStrategy.Connected,
        RelativePositionStrategy.Elastic
    ];

    public relPositions = [
        RelativePosition.Default,
        RelativePosition.Above,
        RelativePosition.Below,
        RelativePosition.Before,
        RelativePosition.After
    ];

    public absPositionStrategy = this.absStrategies[0];
    public absPosition = AbsolutePosition.Center;
    public relPositionStrategy = RelativePositionStrategy.Auto;
    public relPosition = RelativePosition.Default;

    constructor(
        @Inject(IgxOverlayService) public overlayService: IgxOverlayService
    ) {
        //  overlay service deletes the id when onClosed is called. We should clear our id
        //  also in same event
        this.overlayService.onClosed
            .pipe(
                filter((x) => x.id === this._overlayId),
                takeUntil(this.destroy$)
            )
            .subscribe(() => delete this._overlayId);
    }

    ngOnInit() {
        this.setRelativeOverlaySettings();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    public showOverlay() {
        if (!this._overlayId) {
            this._overlayId = this.overlayService.attach(
                MyDynamicCardComponent
            );
        }

        this.overlayService.show(this._overlayId, this._overlaySettings);
    }

    private setAbsoluteOverlaySettings(strategy: string) {
        switch (strategy) {
            case "container":
                this._overlaySettings = IgxOverlayService.createAbsoluteOverlaySettings(
                    this.absPosition,
                    this.outlet
                );
                break;
            case "global":
            default:
                this._overlaySettings = IgxOverlayService.createAbsoluteOverlaySettings(
                    this.absPosition
                );
                break;
        }
    }

    private setRelativeOverlaySettings() {
        this._overlaySettings = IgxOverlayService.createRelativeOverlaySettings(
            this.anchor.nativeElement,
            this.relPosition,
            this.relPositionStrategy
        );
    }

    public selectPositionStrategy(event: IButtonGroupEventArgs) {
        this.positionStrategy = this.positionStrategies[event.index];
    }

    public selectAbsStrategy(event: IButtonGroupEventArgs) {
        this.absPositionStrategy = this.absStrategies[event.index];
        this.setAbsoluteOverlaySettings(this.absPositionStrategy);
    }

    public selectRelStrategy(event: IButtonGroupEventArgs) {
        this.relPositionStrategy = this.relStrategies[event.index];
        this.setRelativeOverlaySettings();
    }

    public selectAbsPosition(event: IButtonGroupEventArgs) {
        this.absPosition = this.absPositions[event.index];
        this.setAbsoluteOverlaySettings(this.absPositionStrategy);
    }

    public selectRelPosition(event: IButtonGroupEventArgs) {
        this.relPosition = this.relPositions[event.index];
        this.setRelativeOverlaySettings();
    }
}
