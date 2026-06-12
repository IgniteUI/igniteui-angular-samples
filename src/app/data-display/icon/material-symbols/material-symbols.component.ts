import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';

@Component({
    selector: 'app-material-symbols',
    templateUrl: './material-symbols.component.html',
    styleUrls: ['./material-symbols.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxIconComponent]
})
export class MaterialSymbolsComponent implements OnInit {
    private iconService = inject(IgxIconService);


    public ngOnInit() {
        this.iconService.registerFamilyAlias('material-symbols', 'material-symbols-outlined');
    }
}
