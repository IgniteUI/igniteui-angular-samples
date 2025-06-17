import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { GridSelectionMode, IgxHierarchicalGridComponent, IgxGridToolbarComponent, IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hierarchical-grid-column-selection',
    templateUrl: './hierarchical-grid-column-selection.component.html',
    styleUrls: ['./hierarchical-grid-column-selection.component.scss'],
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxSelectComponent, FormsModule, IgxLabelDirective, IgxSelectItemComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})
export class HierarchicalGridColumnSelectionComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild(IgxHierarchicalGridComponent)
    public hGrid: IgxHierarchicalGridComponent;
    public data;
    public currentColumnSelection: GridSelectionMode = 'single';

    public formatter = (a) => a;

    public ngOnInit() {
        this.data = SINGERS;
    }

    public ngAfterViewInit() {
        this.hGrid.selectColumns(['Artist']);
        this.cdr.detectChanges();
    }

}
