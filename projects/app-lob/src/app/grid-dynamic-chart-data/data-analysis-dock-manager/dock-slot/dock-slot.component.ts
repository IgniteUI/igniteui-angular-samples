import { Component, HostBinding, Input, OnInit, ViewChild } from '@angular/core';
import { ChartHostDirective } from '../../directives/chart-integration/chart-integration.directive';

@Component({
    selector: 'app-dock-slot',
    templateUrl: './dock-slot.component.html',
    styleUrls: ['./dock-slot.component.scss'],
    standalone: false
})
export class DockSlotComponent implements OnInit {

    @ViewChild(ChartHostDirective)
    public chartHost: ChartHostDirective;

    @Input()
    public id;

    @HostBinding('slot')
    public slot;
    constructor() { }

    public ngOnInit(): void {
        this.slot = this.id;
    }
}
