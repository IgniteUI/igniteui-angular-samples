import { Component, OnInit, signal } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../data/employees-flat-avatars';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-style',
    styleUrls: ['./tree-grid-style.component.scss'],
    templateUrl: './tree-grid-style.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent, IgxButtonGroupComponent, IgxButtonDirective]
})
export class TreeGridStyleComponent implements OnInit {

    public data: any[];
    public themes = [
        { label: 'Studio', class: 'theme-studio', swatch: 'theme-swatch--studio' },
        { label: 'Ledger', class: 'theme-ledger', swatch: 'theme-swatch--ledger' },
        { label: 'Editorial', class: 'theme-editorial', swatch: 'theme-swatch--editorial' },
        { label: 'Midnight', class: 'theme-midnight', swatch: 'theme-swatch--midnight' }
    ];

    public activeTheme = signal(this.themes[0].class);

    public ngOnInit() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
    }

    public selectTheme(args: { index: number }) {
        this.activeTheme.set(this.themes[args.index].class);
    }
}
