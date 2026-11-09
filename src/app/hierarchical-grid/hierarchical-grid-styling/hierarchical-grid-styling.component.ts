import { Component, signal } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-styling',
    styleUrls: ['./hierarchical-grid-styling.component.scss'],
    templateUrl: 'hierarchical-grid-styling.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxButtonGroupComponent, IgxButtonDirective]
})

export class HGridStylingComponent {
    public localdata;
    public col: IgxColumnComponent;
    public pWidth: string;
    public nWidth: string;
    public themes = [
        { label: 'Studio', class: 'theme-studio', swatch: 'theme-swatch--studio' },
        { label: 'Ledger', class: 'theme-ledger', swatch: 'theme-swatch--ledger' },
        { label: 'Editorial', class: 'theme-editorial', swatch: 'theme-swatch--editorial' },
        { label: 'Midnight', class: 'theme-midnight', swatch: 'theme-swatch--midnight' }
    ];

    public activeTheme = signal(this.themes[0].class);

    constructor() {
        this.localdata = SINGERS;
    }

    public selectTheme(args: { index: number }) {
        this.activeTheme.set(this.themes[args.index].class);
    }

    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }

    public formatter = (a) => a;
}
