import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent, IgxColumnActionsComponent, IgxColumnHidingDirective, IgxRadioComponent, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-custom-hiding',
    styleUrls: ['./hierarchical-grid-custom-hiding.component.scss'],
    templateUrl: 'hierarchical-grid-custom-hiding.component.html',
    imports: [IgxColumnActionsComponent, IgxColumnHidingDirective, IgxRadioComponent, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridCostumHidingSampleComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;
    public localdata;

    public ngOnInit(): void {
        this.localdata = SINGERS;
    }
    public ngAfterViewInit(): void {
        this.hierarchicalGrid.columnList.forEach((col) => col.width = '20%');
        this.cdr.detectChanges();
    }

    public formatter = (a) => a;

}
