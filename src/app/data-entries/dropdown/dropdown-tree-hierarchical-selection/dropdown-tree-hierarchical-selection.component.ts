import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { IBaseChipEventArgs, IgxTreeComponent, ITreeNodeSelectionEvent } from 'igniteui-angular';
import { IBaseCancelableBrowserEventArgs } from 'igniteui-angular/lib/core/utils';
import { COUNTRIES } from './countries';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-tree-hierarchical-selection',
    styleUrls: ['./dropdown-tree-hierarchical-selection.component.scss'],
    templateUrl: './dropdown-tree-hierarchical-selection.component.html'
})
export class DropdownTreeHierarchicalSelectionComponent implements OnInit, DoCheck {
    @ViewChild('igxTree', { static: true })
    public igxTree: IgxTreeComponent;
    
    public countries!: any[];
    public selectedNodes!: any[];

    public ngOnInit(): void {
        this.countries = COUNTRIES;
    }

    public ngDoCheck(){
        this.selectedNodes = this.igxTree.nodes?.filter(node => node.selected == true);
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
        event.cancel = event.event.composedPath().some(e => (e as HTMLElement).nodeName?.toLowerCase() === 'igx-chip');
    }
}
