import { AfterViewInit, Directive, HostListener, Input } from '@angular/core';
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

    constructor(private host: IgxDropDownItemComponent) { }

    @HostListener('click', ['$event'])
    public onClick(ev) {
        if (this.triggerFor.collapsed) {
            this.triggerFor.open({
                ...this.overlaySettings,
                target: this.host.element.nativeElement
            });
        } else {
            this.triggerFor.close();
        }
        ev.preventDefault();
        ev.stopPropagation();
    }

    ngAfterViewInit() {
        this.hostDropDown = (this.host as any).dropDown;

        Object.defineProperty(this.triggerFor, 'shouldCollapseAll', {
            value: false,
            writable: true
        });

        (this.host as any).dropDown.selectionChanging.subscribe(ev => {
            if ((ev.newSelection.element.nativeElement as any).attributes.getNamedItem('ng-reflect-trigger-for')) {
                ev.cancel = true;
            }
        });

        this.triggerFor.closing.subscribe(ev => {
            if ((this.triggerFor as any).shouldCollapseAll) {
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
