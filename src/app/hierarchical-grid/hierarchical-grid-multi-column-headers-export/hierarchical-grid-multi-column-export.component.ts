import { Component, OnInit } from '@angular/core';
import { IgxExporterEvent } from 'igniteui-angular';
import { HIERARCHICAL_DATA } from '../../data/hierarchical-data';

@Component({
    selector: 'app-hierarchical-grid-multi-column-export',
    styleUrls: ['./hierarchical-grid-multi-column-export.component.scss'],
    templateUrl: 'hierarchical-grid-multi-column-export.component.html',
    standalone: false
})

export class HGridMultiColumnHeadersExportComponent implements OnInit {
    public localdata = [];
    public exportHeaders = true;

    public exportStarted(args: IgxExporterEvent) {
        args.options.ignoreMultiColumnHeaders = !this.exportHeaders;
    }

    public ngOnInit(): void {
        this.localdata = HIERARCHICAL_DATA;
    }
}
