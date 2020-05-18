import { Component, Input, OnDestroy, OnInit, ViewChild, HostBinding } from "@angular/core";
import { ChartHostDirective } from "../../directives/chart-integration/chart-integration.directive";

@Component({
    selector: "dock-slot",
    templateUrl: "./dock-slot.component.html",
    styleUrls: ["./dock-slot.component.scss"]
})
export class DockSlotComponent implements OnInit, OnDestroy {

    @ViewChild(ChartHostDirective)
    public chartHost: ChartHostDirective;

    @Input()
    public id;

    @HostBinding("slot")
    public slot;
    constructor() { }

    public ngOnInit(): void {
        this.slot = this.id;
    }

    public ngOnDestroy() {
        console.log(this);
    }

}
