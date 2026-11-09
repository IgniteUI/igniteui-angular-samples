import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxChipComponent, IgxChipsAreaComponent } from 'igniteui-angular/chips';
import { IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { generateEmployeeFlatData } from '../data/employees-flat';

import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-search-sample',
    styleUrls: ['./tree-grid-search-sample.component.scss'],
    templateUrl: './tree-grid-search-sample.component.html',
    imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, FormsModule, IgxInputDirective, IgxSuffixDirective, IgxChipsAreaComponent, IgxChipComponent, IgxIconButtonDirective, IgxRippleDirective, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridSearchSampleComponent implements OnInit {

    @ViewChild('treeGrid1', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];
    public searchText = '';
    public caseSensitive = false;
    public exactMatch = false;

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }

    public clearSearch() {
        this.searchText = '';
        this.treeGrid.clearSearch();
    }

    public searchKeyDown(ev) {
        if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
            ev.preventDefault();
            this.treeGrid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
        } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
            ev.preventDefault();
            this.treeGrid.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
        }
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.treeGrid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public updateExactSearch() {
        this.exactMatch = !this.exactMatch;
        this.treeGrid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
