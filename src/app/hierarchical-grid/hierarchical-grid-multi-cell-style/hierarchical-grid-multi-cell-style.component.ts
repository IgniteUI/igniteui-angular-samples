import { Component, OnInit } from '@angular/core';
import { DATA } from '../../data/customers';

@Component({
    selector: 'app-hierarchical-grid-multi-cell-style',
    styleUrls: ['./hierarchical-grid-multi-cell-style.component.scss'],
    templateUrl: 'hierarchical-grid-multi-cell-style.component.html'
})

export class HGridMultiCellStyleComponent implements OnInit {
    public localdata;
    public ngOnInit(): void {
        this.localdata = DATA;
    }
}
