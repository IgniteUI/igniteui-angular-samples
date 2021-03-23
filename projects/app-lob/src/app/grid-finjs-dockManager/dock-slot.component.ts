import { Component, Directive, ElementRef, HostBinding, Input, OnInit, ViewChild, ViewContainerRef } from "@angular/core";

@Directive({
    selector: "[gridHost]"
})
export class GridHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
    selector: "dock-slot",
    template: `
    <div style="width: 100%; height: 100%; padding: 7px; overflow-x: hidden;">
        <ng-template gridHost></ng-template>
        test
    </div>`
})
export class DockSlotComponent implements OnInit {

    @ViewChild(GridHostDirective)
    public gridHost: GridHostDirective;

    @Input()
    public id;

    @HostBinding("slot")
    public slot;
    constructor() { }

    public ngOnInit(): void {
        this.slot = this.id;
    }
}