import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../../data/hierarchical-data';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-hierarchical-grid-toolbar-pinning',
    styleUrls: ['./hierarchical-grid-toolbar-pinning.component.scss'],
    templateUrl: 'hierarchical-grid-toolbar-pinning.component.html'
})
export class HGridToolbarPinningComponent implements OnInit {
    public localdata;
    public dark: boolean = false;

    constructor(private activatedRoute: ActivatedRoute) {
        this.localdata = CUSTOMERS;
    }

    public ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(params => {
            console.log(this.activatedRoute.queryParams);
            this.dark = params.dark === 'true' ? true : false;
        });
    }

}

