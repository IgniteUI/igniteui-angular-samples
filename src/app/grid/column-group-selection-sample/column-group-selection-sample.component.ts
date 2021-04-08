import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../../data/customers';

@Component({
    selector: "gird-column-group-selection",
    templateUrl: "./column-group-selection-sample.component.html",
    styleUrls: ["./column-group-selection-sample.component.scss"]
})
export class GridColumnGroupSelectionComponent implements OnInit, AfterViewInit {
    public data: any[];

    @ViewChild(IgxGridComponent)
    public grid: IgxGridComponent;

    constructor(private cdr: ChangeDetectorRef) { }

    public ngOnInit() {
        this.data = DATA;
    }

    public ngAfterViewInit() {
        this.grid.selectColumns(['City', 'PostalCode']);
        this.cdr.detectChanges();
    }
}
