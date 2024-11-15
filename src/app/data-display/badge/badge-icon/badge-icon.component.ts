import { Component, OnInit } from '@angular/core';
import { heartMonitor } from '@igniteui/material-icons-extended';
import { IgxIconService } from 'igniteui-angular';

@Component({
    selector: 'app-badge-icon',
    styleUrls: ['./badge-icon.component.scss'],
    templateUrl: './badge-icon.component.html',
    standalone: false
})
export class BadgeIconComponent implements OnInit { 
    constructor (protected _iconService: IgxIconService) {}

    public ngOnInit() {
        this._iconService.addSvgIconFromText(heartMonitor.name, heartMonitor.value, 'imx-icons');
    }
}
