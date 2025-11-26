import { Component, ViewChild, OnInit, inject } from '@angular/core';
import { IgxTreeGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarPinningComponent, IgxColumnComponent } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    providers: [],
    selector: 'app-grid-sample',
    styleUrls: ['tree-grid-toolbar-pinning.component.scss'],
    templateUrl: 'tree-grid-toolbar-pinning.component.html',
    imports: [NgClass, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarPinningComponent, IgxColumnComponent]
})

export class TreeGridPinningToolbarSampleComponent implements OnInit {
    private activatedRoute = inject(ActivatedRoute);

    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public data: any[];
    public useDarkTheme: boolean = false;

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }

    public ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            this.useDarkTheme = params.dark === 'true';
        });
    }
}
