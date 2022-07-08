import { Component } from '@angular/core';
import { IgxExporterEvent } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
  selector: 'app-tree-grid-multi-column-headers-export-sample',
  styleUrls: ['./tree-grid-multi-column-headers-export.component.scss'],
  templateUrl: './tree-grid-multi-column-headers-export.component.html'
})
export class TreeGridMultiColumnHeadersExportComponent {
    public data = generateEmployeeDetailedFlatData();
    public selectionMode = 'none';
    public exportHeaders = true;

    public exportStarted(args: IgxExporterEvent) {
        args.options.ignoreMultiColumnHeaders = !this.exportHeaders;
    }
}
