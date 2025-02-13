import { Component } from '@angular/core';
import { IRowSelectionEventArgs, IgxGridComponent, IgxPaginatorComponent, IgxColumnComponent, IgxRowSelectorDirective, IgxCheckboxComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-conditional-row-selectors',
    styleUrls: ['./grid-conditional-row-selectors-sample.component.scss'],
    templateUrl: 'grid-conditional-row-selectors-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxRowSelectorDirective, IgxCheckboxComponent]
})

export class GridConditionalRowSelectorsComponent {
    public data: any[];
    public disabledCollection: string[] = [];

    constructor() {
        this.data = DATA;
        this.data.filter(dataItem => dataItem.ID.indexOf('A') === -1).map((item) => {
            this.disabledCollection.push(item.ID);
        });
    }

    public isSelectionAllowed(newRowID: string) {
        return this.disabledCollection.indexOf(newRowID) === -1;
    }

    public onRowSelect(event: IRowSelectionEventArgs) {
        if (!event.added.length && event.removed.length) {
            // ignore deselect
            return;
        }
        const originalAddedLength = event.added.length;

        // update selection to contain only allowed rows
        event.newSelection = event.newSelection.filter(x => this.isSelectionAllowed(x.ID));

        // cleanup selection if all conditionally selectable rows are already selected
        if (event.newSelection.length
            && !event.newSelection.filter(x => event.oldSelection.indexOf(x) === -1).length
            && originalAddedLength > 1) {
                // all selected from header, deselect instead
                event.newSelection = [];
        }
    }
}
