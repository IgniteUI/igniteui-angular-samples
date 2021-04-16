import { Component, OnInit } from '@angular/core';
import { DATA } from './local-data';

@Component({
    selector: 'app-tree-basic-sample',
    templateUrl: './tree-basic-sample.component.html',
    styleUrls: ['./tree-basic-sample.component.scss']
})
export class TreeBasicSampleComponent implements OnInit {
    public data = DATA;

    constructor() { }

    ngOnInit(): void {
    }

}
