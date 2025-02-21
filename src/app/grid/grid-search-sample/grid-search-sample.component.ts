import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxInputDirective, IgxSuffixDirective, IgxChipsAreaComponent, IgxChipComponent, IgxIconButtonDirective, IgxRippleDirective, IgxColumnComponent } from 'igniteui-angular';
import { MARKET_DATA } from './data';

import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-search-sample',
    styleUrls: ['./grid-search-sample.component.scss'],
    templateUrl: './grid-search-sample.component.html',
    imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, FormsModule, IgxInputDirective, IgxSuffixDirective, IgxChipsAreaComponent, IgxChipComponent, IgxIconButtonDirective, IgxRippleDirective, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class GridSearchSampleComponent implements OnInit {

    @ViewChild('grid1', { static: true }) public grid: IgxGridComponent;
    public data: any[];
    public searchText = '';
    public caseSensitive = false;
    public exactMatch = false;

    public ngOnInit(): void {
        this.data = MARKET_DATA;
    }

    public clearSearch() {
        this.searchText = '';
        this.grid.clearSearch();
    }

    public searchKeyDown(ev) {
        if (ev.key === 'Enter' || ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
            ev.preventDefault();
            this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
        } else if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
            ev.preventDefault();
            this.grid.findPrev(this.searchText, this.caseSensitive, this.exactMatch);
        }
    }

    public updateSearch() {
        this.caseSensitive = !this.caseSensitive;
        this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    }

    public updateExactSearch() {
        this.exactMatch = !this.exactMatch;
        this.grid.findNext(this.searchText, this.caseSensitive, this.exactMatch);
    }
}
