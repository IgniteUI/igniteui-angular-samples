import { Component, OnInit, inject } from '@angular/core';
import { IgxIconService, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-material-symbols',
    templateUrl: './material-symbols.component.html',
    styleUrls: ['./material-symbols.component.scss'],
    imports: [IgxIconComponent]
})
export class MaterialSymbolsComponent implements OnInit {
    private iconService = inject(IgxIconService);


    public ngOnInit() {
        this.iconService.registerFamilyAlias('material-symbols', 'material-symbols-outlined');
    }
}
