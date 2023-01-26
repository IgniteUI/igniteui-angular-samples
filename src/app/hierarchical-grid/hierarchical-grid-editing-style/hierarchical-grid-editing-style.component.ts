import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent } from '@infragistics/igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { Singer } from '../models';

@Component({
    selector: 'app-hierarchical-grid-editing-style',
    styleUrls: ['./hierarchical-grid-editing-style.component.scss'],
    templateUrl: 'hierarchical-grid-editing-style.component.html'
})

export class HGridEditingStyleComponent implements OnInit {
    @ViewChild(IgxHierarchicalGridComponent, { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata: Singer[];
    public singer: Singer;

    constructor() { }

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
