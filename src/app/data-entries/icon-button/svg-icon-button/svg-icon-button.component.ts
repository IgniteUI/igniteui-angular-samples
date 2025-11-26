import { Component, OnInit, inject } from '@angular/core';
import { IgxIconService, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-svg-icon-button',
    styleUrls: ['./svg-icon-button.component.scss'],
    templateUrl: './svg-icon-button.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class SVGIconButtonComponent implements OnInit {
    private _iconService = inject(IgxIconService);


    public ngOnInit() {
        // register custom SVG icon
        this._iconService.addSvgIcon('rain', 'assets/images/card/icons/rain.svg', 'weather-icons');
    }
}
