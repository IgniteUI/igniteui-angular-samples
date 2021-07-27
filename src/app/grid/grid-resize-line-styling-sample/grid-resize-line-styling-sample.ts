    import { Component, OnInit } from '@angular/core';
import { athletesData } from '../../data/athletesData';

@Component({
    selector: 'app-grid-resize-line-styling-sample',
    styleUrls: ['./grid-resize-line-styling-sample.scss'],
    templateUrl: './grid-resize-line-styling-sample.html'
})

export class GridResizeLineStylingSampleComponent implements OnInit {
    public data: any[];
    public ngOnInit() {
        this.data = athletesData;
    }
}
