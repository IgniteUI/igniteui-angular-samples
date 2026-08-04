import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { GridSelectionMode, IgxColumnComponent, IgxGridToolbarComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { DATA } from '../../data/customers';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-grid-column-selection',
    templateUrl: './column-selection-sample.component.html',
    styleUrls: ['./column-selection-sample.component.scss'],
    imports: [IgxGridComponent, IgxGridToolbarComponent, IgxSelectComponent, FormsModule, IgxLabelDirective, IgxSelectItemComponent, IgxColumnComponent]
})
export class GridColumnSelectionComponent implements OnInit, AfterViewInit {
    private cdr = inject(ChangeDetectorRef);

    @ViewChild(IgxGridComponent)
    public grid: IgxGridComponent;
    public data: any[];
    public columnSelectionType: GridSelectionMode = 'single';

    public ngOnInit() {
        this.data = DATA;
    }

    public ngAfterViewInit() {
        this.grid.getColumnByName('CompanyName').selected = true;
        this.cdr.detectChanges();
    }
}
