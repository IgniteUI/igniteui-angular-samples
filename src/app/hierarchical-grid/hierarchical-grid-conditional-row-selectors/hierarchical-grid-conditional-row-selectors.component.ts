import { Component, OnInit } from '@angular/core';
import { IRowSelectionEventArgs, IgxColumnComponent, IgxRowSelectorDirective } from 'igniteui-angular/grids/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-conditional-row-selectors',
    styleUrls: ['./hierarchical-grid-conditional-row-selectors.component.scss'],
    templateUrl: 'hierarchical-grid-conditional-row-selectors.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxRowIslandComponent, IgxRowSelectorDirective, IgxCheckboxComponent]
})

export class HGridConditionalRowSelectorsComponent implements OnInit {
    public singers;
    public disabledCollection: string[] = [];

    public ngOnInit(): void {
        this.singers = SINGERS;
        this.disabledCollection =
            this.singers.filter(singer => singer.HasGrammyAward === false).map(singer => singer.Artist);
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
        event.newSelection = event.newSelection.filter(x => this.isSelectionAllowed(x.Artist));

        // cleanup selection if all conditionally selectable rows are already selected
        if (event.newSelection.length
            && !event.newSelection.filter(x => event.oldSelection.indexOf(x) === -1).length
            && originalAddedLength > 1) {
                // all selected from header, deselect instead
                event.newSelection = [];
        }
    }
}
