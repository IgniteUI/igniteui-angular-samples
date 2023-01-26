import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent } from '@infragistics/igniteui-angular';
import { SINGERS } from '../../data/singersData';

@Component({
  selector: 'app-hierarchical-grid-column-hiding-toolbar-style',
  styleUrls: ['./hierarchical-grid-column-hiding-toolbar-style.component.scss'],
  templateUrl: './hierarchical-grid-column-hiding-toolbar-style.component.html'
})
export class HierarchicalGridColumnHidingToolbarStyleComponent implements OnInit {
    public localdata;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }
}
