import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent, IgxColumnGroupComponent } from 'igniteui-angular/grids/core';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-column-group-selection',
    templateUrl: './hierarchical-grid-column-group-selection.component.html',
    styleUrls: ['./hierarchical-grid-column-group-selection.component.scss'],
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnGroupComponent, IgxRowIslandComponent]
})
export class HierarchicalGridColumnGroupSelectionComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild(IgxHierarchicalGridComponent, { static: true })
    private hGrid: IgxHierarchicalGridComponent;

    public data;

    public ngOnInit(): void {
        this.data = CUSTOMERS;
    }

    public ngAfterViewInit() {
        this.hGrid.selectColumns(['CompanyName', 'ContactName', 'ContactTitle', 'City']);
        this.cdr.detectChanges();
    }

}
