import { AfterViewInit, Directive, Input, OnDestroy, Renderer2 } from '@angular/core';
import { ConnectedPositioningStrategy, HorizontalAlignment, IgxDropDownComponent, IgxDropDownItemComponent, OverlaySettings, PositionSettings, VerticalAlignment } from 'igniteui-angular';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
    selector: '[triggerFor]'
})
export class TriggerForDirective implements AfterViewInit, OnDestroy {
    private globalInstance: any;

    private posSettings: PositionSettings = {
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Top
    }
    private overlaySettings: OverlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy(this.posSettings),
        closeOnOutsideClick: true,
        modal: false
    };

    private sub = new Subject();

    @Input()
    public triggerFor: IgxDropDownComponent;

    constructor(private host: IgxDropDownItemComponent, private renderer: Renderer2) { }

    ngAfterViewInit() {
        // debugger;
        this.subToMouseOver();
        (this.host as any).dropDown.closing.subscribe(() => {
            this.sub.next();
        });

        (this.host as any).dropDown.closed.subscribe(() => {
            this.subToMouseOver();
        });

        this.triggerFor.closed.subscribe(ev => {
            console.log(ev);
            (this.host as any).dropDown.close();
        });
    }

    ngOnDestroy() {
        this.sub.next();
        this.sub.complete();
        this.globalInstance();
    }

    private subToMouseOver() {
        fromEvent(this.host.element.nativeElement, 'mouseover').pipe(takeUntil(this.sub)).subscribe(() => {
            this.overlaySettings.positionStrategy.settings.closeAnimation = null;
            if (this.triggerFor.collapsed) {
                this.triggerFor.open({
                    ...this.overlaySettings,
                    target: this.host.element.nativeElement
                });
            }
        });
    }
}
