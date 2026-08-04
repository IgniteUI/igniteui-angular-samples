import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { SINGERS } from '../../data/singersData';
import { Singer } from '../models';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-editing-style',
    styleUrls: ['./hierarchical-grid-editing-style.component.scss'],
    templateUrl: 'hierarchical-grid-editing-style.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
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
