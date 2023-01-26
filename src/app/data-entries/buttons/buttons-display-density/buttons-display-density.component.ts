import { Component, OnInit } from '@angular/core';
import { DisplayDensity } from '@infragistics/igniteui-angular';

@Component({
    selector: 'app-buttons-display-density',
    styleUrls: ['./buttons-display-density.component.scss'],
    templateUrl: './buttons-display-density.component.html'
})
export class ButtonsDisplayDensityComponent implements OnInit {
    public density: DisplayDensity = 'comfortable';
    public displayDensities;

    public ngOnInit(): void {
        this.displayDensities = [
            { label: 'comfortable', selected: this.density === 'comfortable', togglable: true },
            { label: 'cosy', selected: this.density === 'cosy', togglable: true },
            { label: 'compact', selected: this.density === 'compact', togglable: true }
        ];
    }

    public selectDensity(event) {
        this.density = this.displayDensities[event.index].label;
    }
}
