import { Component, OnInit } from '@angular/core';
import { IgxIconService } from 'igniteui-angular';

@Component({
    selector: 'app-material-symbols',
    templateUrl: './material-symbols.component.html',
    styleUrls: ['./material-symbols.component.scss'],
    standalone: false
})
export class MaterialSymbolsComponent implements OnInit {
    constructor(private iconService: IgxIconService) { }

    public ngOnInit() {
        this.iconService.registerFamilyAlias('material-symbols', 'material-symbols-outlined');
    }
}
