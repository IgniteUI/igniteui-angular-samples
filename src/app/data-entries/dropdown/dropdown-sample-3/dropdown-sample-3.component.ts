import { AfterViewInit, Directive, Input, OnDestroy, Renderer2 } from '@angular/core';
import { thisMonth } from '@igniteui/material-icons-extended';
import { ConnectedPositioningStrategy, HorizontalAlignment, IgxDropDownComponent, IgxDropDownItemComponent, OverlaySettings, PositionSettings, VerticalAlignment } from 'igniteui-angular';

@Directive({
    selector: '[triggerFor]'
})
export class TriggerForDirective implements AfterViewInit {

    private hostDropDown: any;

    private posSettings: PositionSettings = {
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalStartPoint: VerticalAlignment.Top
    }
    private overlaySettings: OverlaySettings = {
        positionStrategy: new ConnectedPositioningStrategy(this.posSettings),
        closeOnOutsideClick: true,
        modal: false
    };

    @Input()
    public triggerFor: IgxDropDownComponent;

    constructor(private host: IgxDropDownItemComponent, private renderer: Renderer2) { }

    ngAfterViewInit() {
        this.hostDropDown = (this.host as any).dropDown;

        Object.defineProperty(this.triggerFor, 'shouldCollapseAll', {
            value: false,
            writable: true
        });

        (this.host as any).dropDown.selectionChanging.subscribe(ev => {
            if ((ev.newSelection.element.nativeElement as any).attributes.getNamedItem('ng-reflect-trigger-for')) {
                if (this.hostDropDown.shouldCollapse) {
                    return;
                }
                ev.cancel = true;
                if (this.triggerFor.collapsed) {
                    this.triggerFor.open({
                        ...this.overlaySettings,
                        target: this.host.element.nativeElement
                    });
                } else {
                    this.triggerFor.close();
                }
            }
        });

        this.triggerFor.closing.subscribe(ev => {
            if((this.triggerFor as any).shouldCollapseAll) {
                (this.triggerFor as any).shouldCollapseAll = false;
                (this.hostDropDown as any).shouldCollapseAll = true;
                this.hostDropDown.close();
            }
        });

        this.triggerFor.selectionChanging.subscribe(ev => {
            if (!(ev.newSelection.element.nativeElement as any).attributes.getNamedItem('ng-reflect-trigger-for')) {
                (this.triggerFor as any).shouldCollapseAll = true;
                requestAnimationFrame(() => {
                    this.hostDropDown.close();
                });
            }
        });
    }
}
