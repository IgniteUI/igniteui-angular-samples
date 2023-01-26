import { Component, OnInit } from '@angular/core';
import { DisplayDensity } from '@infragistics/igniteui-angular';

@Component({
    selector: 'app-button-group-sample-5',
    styleUrls: ['./button-group-sample-5.component.scss'],
    templateUrl: './button-group-sample-5.component.html'
})
export class ButtonGroupSample5Component implements OnInit {

    public rippleColor = 'grey';

    public displayDensity: DisplayDensity = 'comfortable';
    public displayDensities;

    public ngOnInit() {
        this.displayDensities = [
            { label: 'compact', selected: this.displayDensity === 'compact', togglable: true },
            { label: 'cosy', selected: this.displayDensity === 'cosy', togglable: true },
            { label: 'comfortable', selected: this.displayDensity === 'comfortable', togglable: true }
        ];
    }

    public selectDensity(event) {
        this.displayDensity = this.displayDensities[event.index].label;
    }

}
