import { Component, OnInit, ViewChild } from '@angular/core';
import { IBaseChipEventArgs, IgxChipComponent, IgxTreeComponent, ITreeNodeSelectionEvent } from 'igniteui-angular';
import { IBaseCancelableBrowserEventArgs } from 'igniteui-angular/lib/core/utils';
import { COUNTRIES } from '../../../data/countries';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-tree-hierarchical-selection',
    styleUrls: ['./dropdown-tree-hierarchical-selection.component.scss'],
    templateUrl: './dropdown-tree-hierarchical-selection.component.html'
})
export class DropdownTreeHierarchicalSelectionComponent implements OnInit {
    @ViewChild('igxTree', { static: true })
    public igxTree: IgxTreeComponent;
    
    public countries!: any[];
    public selectedNodes!: any[];

    public ngOnInit(): void {
        this.countries = COUNTRIES;
    }

    public onNodeSelection(args: ITreeNodeSelectionEvent) {
        this.selectedNodes = args.newSelection;
    }

    public chipRemoved(event: IBaseChipEventArgs) {
        this.selectedNodes = this.selectedNodes.filter((node) => {
            if (node.data.ID === event.owner.id){
                this.igxTree.deselectAll([node]);
            }
            return node.data.ID !== event.owner.id;
        });
    }

    public handleClosing(event: IBaseCancelableBrowserEventArgs) {
        var eventTarget = event.event.target as HTMLElement;
        if (eventTarget.parentElement.classList.contains('igx-chip__remove')) {
            event.cancel = true;
        }
    }
}
