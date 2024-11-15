import { Component, OnInit } from '@angular/core';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'app-hierarchical-grid-add-row',
    styleUrls: ['./hierarchical-grid-add-row.component.scss'],
    templateUrl: './hierarchical-grid-add-row.component.html',
    standalone: false
})

export class HGridAddRowSampleComponent implements OnInit {
    public localdata;


    public ngOnInit(): void {
        this.localdata = SINGERS;
    }
}
