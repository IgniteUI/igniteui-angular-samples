import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { FOODS_DATA } from '../../../tree-grid/data/foods';

@Component({
  selector: 'app-csv-export-tree-grid-sample',
  styleUrls: ['./csv-export-tree-grid-sample.component.scss'],
  templateUrl: './csv-export-tree-grid-sample.component.html'
})
export class TreeGridCsvExportSample1Component implements OnInit {

  @ViewChild('igxTreeGrid1', { static: true })
  public igxTreeGrid1: IgxTreeGridComponent;

  public data: any[];

  constructor() {
  }

  public ngOnInit(): void {
    this.data = FOODS_DATA();
  }

    /*
    The following code demonstrates how to attach event handlers to exporter specific events
    and also how to customize the column export process.
    this.csvExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
      if (args.header == 'Age' && args.columnIndex == 1) {
        args.cancel = true;
      }
    });
    this.csvExportService.rowExporting.subscribe((args: IRowExportingEventArgs) => {
    });
    this.csvExportService.exportEnded.subscribe((args: ICsvExportEndedEventArgs) => {
    });
    */

}
