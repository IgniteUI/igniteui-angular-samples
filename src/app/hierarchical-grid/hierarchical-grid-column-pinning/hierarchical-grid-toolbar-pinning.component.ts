import { Component, OnInit, inject } from '@angular/core';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarPinningComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-toolbar-pinning',
    styleUrls: ['./hierarchical-grid-toolbar-pinning.component.scss'],
    templateUrl: 'hierarchical-grid-toolbar-pinning.component.html',
    imports: [NgClass, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarPinningComponent, IgxColumnComponent, IgxRowIslandComponent]
})
export class HGridToolbarPinningComponent implements OnInit {
    private activatedRoute = inject(ActivatedRoute);

    public localdata;
    public useDarkTheme: boolean = false;

    constructor() {
        this.localdata = CUSTOMERS;
    }

    public ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            this.useDarkTheme = params.dark === 'true';
        });
    }

}

