import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { AbsolutePosition, IgxOverlayService, OverlaySettings, RelativePosition, RelativePositionStrategy, IButtonGroupEventArgs, IgxIconComponent, IgxButtonGroupComponent, IgxButtonDirective } from 'igniteui-angular';
import { MyDynamicCardComponent } from '../overlay-dynamic-card/overlay-dynamic-card.component';
import { NgTemplateOutlet } from '@angular/common';

// tslint:disable:object-literal-sort-keys
@Component({
    selector: 'app-overlay-sample',
    styleUrls: ['./overlay-preset-settings-sample.component.scss'],
    templateUrl: './overlay-preset-settings-sample.component.html',
    providers: [IgxOverlayService],
    imports: [IgxIconComponent, NgTemplateOutlet, IgxButtonGroupComponent, IgxButtonDirective]
})
export class OverlayPresetSettingsSampleComponent implements OnInit, OnDestroy {
    private overlayService = inject<IgxOverlayService>(IgxOverlayService);
    private viewContainerRef = inject(ViewContainerRef);

    @ViewChild('anchor', { static: true })
    public anchor: ElementRef;

    @ViewChild('outlet', { static: true })
    public outlet: ElementRef;

    public positionStrategies = ['relative', 'absolute'];
    public positionStrategy = this.positionStrategies[0];

    public absStrategies = ['container', 'global'];

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
    private _overlayId: string;
    private _overlaySettings: OverlaySettings;

    public ngOnInit(): void {
        this.setRelativeOverlaySettings();
    }

    public ngOnDestroy(): void {
        if (this._overlayId) {
            this.overlayService.detach(this._overlayId);
            delete this._overlayId;
        }
    }

    public showOverlay() {
        if (this._overlayId) {
            this.overlayService.detach(this._overlayId);
            delete this._overlayId;
        }
        this._overlayId = this.overlayService.attach(
            MyDynamicCardComponent,
            this.viewContainerRef,
            this._overlaySettings
        );
        this.overlayService.show(this._overlayId);
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

    private setAbsoluteOverlaySettings(strategy: string) {
        switch (strategy) {
            case 'container':
                this._overlaySettings = IgxOverlayService.createAbsoluteOverlaySettings(
                    this.absPosition,
                    this.outlet
                );
                break;
            case 'global':
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
}
