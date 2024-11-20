import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { localData } from './local-data';

@Component({
    selector: 'app-combo-template',
    styleUrls: ['./combo-template.component.scss'],
    templateUrl: './combo-template.component.html',
    standalone: false
})
export class ComboTemplateComponent implements OnInit {
    public lData: any[];

    constructor(public cdr: ChangeDetectorRef) {}

    public ngOnInit() {
        this.lData = localData;
    }
}
