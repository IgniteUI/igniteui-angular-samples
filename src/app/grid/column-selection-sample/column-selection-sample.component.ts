import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxGridComponent, IgxGridToolbarComponent, IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent, IgxColumnComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-grid-column-selection',
    templateUrl: './column-selection-sample.component.html',
    styleUrls: ['./column-selection-sample.component.scss'],
    imports: [IgxGridComponent, IgxGridToolbarComponent, IgxSelectComponent, FormsModule, IgxLabelDirective, IgxSelectItemComponent, IgxColumnComponent]
})
export class GridColumnSelectionComponent implements OnInit, AfterViewInit {
    @ViewChild(IgxGridComponent)
    public grid: IgxGridComponent;
    public data: any[];
    public columnSelectionType: GridSelectionMode = 'single';

    constructor(private cdr: ChangeDetectorRef) {}

    public ngOnInit() {
        this.data = DATA;
    }

    public ngAfterViewInit() {
        this.grid.getColumnByName('CompanyName').selected = true;
        this.cdr.detectChanges();
    }
}
