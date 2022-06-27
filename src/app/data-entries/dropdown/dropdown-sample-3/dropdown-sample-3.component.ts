import { AfterViewInit, Directive, Input, OnDestroy, Renderer2 } from '@angular/core';
import { ConnectedPositioningStrategy, HorizontalAlignment, IgxDropDownComponent, IgxDropDownItemComponent, OverlaySettings, PositionSettings, VerticalAlignment } from 'igniteui-angular';

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

    @Input()
    public triggerFor: IgxDropDownComponent;

    private isRoot = false;

    constructor(private host: IgxDropDownItemComponent, private renderer: Renderer2) { }

    ngAfterViewInit() {
        if ((this.host as any).dropDown.id === 'root') {
            this.isRoot = true;
        }

        if (this.isRoot) {
            (this.host as any).dropDown.closing.subscribe(ev => {
                if (((this.host as any).dropDown.selectedItem.element.nativeElement as any).attributes.getNamedItem('ng-reflect-trigger-for')) {
                    ev.cancel = true;
                }
            });
        }

        this.globalInstance = this.renderer.listen(this.host.element.nativeElement, 'click', () => {
            if (this.triggerFor.collapsed) {
                this.triggerFor.open({
                    ...this.overlaySettings,
                    target: this.host.element.nativeElement
                });
            }
        });

        // child dropdown
        this.triggerFor.closing.subscribe(ev => {
            if ((this.triggerFor.selectedItem?.element.nativeElement as any).attributes.getNamedItem('ng-reflect-trigger-for')) {
                if (!this.triggerFor.collapsed) {
                    ev.cancel = true;
                } else {
                    (this.host as any).dropDown.close();
                }
            }
        });

        this.triggerFor.closed.subscribe(ev => {
            console.log(ev);
            (this.host as any).dropDown.close();
        });

        // parent dropdown
        // (this.host as any).dropDown.selectionChanging.subscribe(ev => {
        //     if (!(ev.newSelection.element.nativeElement as any).attributes.getNamedItem('ng-reflect-trigger-for')) {
        //         this.shouldCloseParent.emit(true);
        //     } else {
        //         ev.cancel = true;
        //         if (this.triggerFor.collapsed) {
        //             this.triggerFor.open({
        //                 ...this.overlaySettings,
        //                 target: this.host.element.nativeElement
        //             });
        //         } else {
        //             this.shouldCloseParent.emit(false);
        //         }
        //     }
        // });

        // (this.host as any).dropDown.selectionChanging.subscribe(ev => {
        //     if (ev.newSelection === this.host) {
        //         ev.cancel = true;
        //     }
        // });
    }

    ngOnDestroy() {
        this.globalInstance.unlisten();
    }

}
