import { Component, OnInit } from '@angular/core';
import { IgxIconService } from 'igniteui-angular';

@Component({
    selector: 'app-svg-icon-button',
    styleUrls: ['./svg-icon-button.component.scss'],
    templateUrl: './svg-icon-button.component.html',
    standalone: false
})
export class SVGIconButtonComponent implements OnInit {
    constructor(private _iconService: IgxIconService) { }

    public ngOnInit() {
        // register custom SVG icon
        this._iconService.addSvgIcon('rain', 'assets/images/card/icons/rain.svg', 'weather-icons');
    }
}
