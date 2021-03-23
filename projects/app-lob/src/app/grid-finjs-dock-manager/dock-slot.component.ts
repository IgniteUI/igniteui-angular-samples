import { AfterViewInit, Component, Directive, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild, ViewContainerRef } from "@angular/core";
import { Subject } from "rxjs";

@Directive({
    selector: "[gridHost]"
})
export class GridHostDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
    selector: "dock-slot",
    template: `
    <div style="width: 100%; height: 100%; overflow-x: hidden;">
        <ng-template gridHost></ng-template>
    </div>`
})
export class DockSlotComponent implements OnInit, AfterViewInit {
    public destroy$ = new Subject<any>();

    @Output()
    public viewInit = new EventEmitter();

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

    public ngAfterViewInit() {
        this.viewInit.emit();
    }
    public ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}