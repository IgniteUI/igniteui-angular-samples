import { Component, OnInit } from '@angular/core';
import { HIERARCHICAL_DATA } from '../../data/hierarchical-data';

@Component({
    selector: 'app-hierarchical-grid-multi-column-export',
    styleUrls: ['./hierarchical-grid-multi-column-export.component.scss'],
    templateUrl: 'hierarchical-grid-multi-column-export.component.html'
})

export class HGridMultiColumnHeadersExportComponent implements OnInit {
    public localdata = [];

    public ngOnInit(): void {
        this.localdata = HIERARCHICAL_DATA;
    }
}
