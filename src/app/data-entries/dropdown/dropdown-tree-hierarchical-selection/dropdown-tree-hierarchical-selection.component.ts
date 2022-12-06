import { Component, OnInit } from '@angular/core';
import { ITreeNodeSelectionEvent } from 'igniteui-angular';
import { COUNTRIES } from '../../../data/countries';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-tree-hierarchical-selection',
    styleUrls: ['./dropdown-tree-hierarchical-selection.scss'],
    templateUrl: './dropdown-tree-hierarchical-selection.html'
})
export class DropdownTreeHierarchicalSelectionComponent implements OnInit {
    public countries!: any[];
    public selectedNodes!: any[];

    public ngOnInit(): void {
        this.countries = COUNTRIES;
    }

    public onNodeSelection(args: ITreeNodeSelectionEvent) {
        this.selectedNodes = args.newSelection;
    }
}