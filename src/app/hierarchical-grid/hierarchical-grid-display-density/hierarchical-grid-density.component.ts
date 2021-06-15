import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-hierarchical-grid-density',
    styleUrls: ['./hierarchical-grid-density.component.scss'],
    templateUrl: 'hierarchical-grid-density.component.html'
})

export class HGridDisplayDensitySampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;
    public density = 'compact';
    public displayDensities;

    constructor() {

    }
    public ngOnInit(): void {
        this.localdata = DATA;
        this.displayDensities = [
            {
                label: 'compact',
                selected: this.density === 'compact',
                togglable: true
            },
            {
                label: 'cosy',
                selected: this.density === 'cosy',
                togglable: true
            },
            {
                label: 'comfortable',
                selected: this.density === 'comfortable',
                togglable: true
            }
        ];
    }

    public selectDensity(event) {
        this.density = this.displayDensities[event.index].label;
        this.hierarchicalGrid.displayDensity = this.displayDensities[event.index].label;
        this.hierarchicalGrid.reflow();
    }

}
