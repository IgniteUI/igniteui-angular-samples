    import { Component, OnInit } from '@angular/core';
import { athletesData } from '../../data/athletesData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-resize-line-styling-sample',
    styleUrls: ['./grid-resize-line-styling-sample.scss'],
    templateUrl: './grid-resize-line-styling-sample.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})

export class GridResizeLineStylingSampleComponent implements OnInit {
    public data: any[];
    public ngOnInit() {
        this.data = athletesData;
    }
}
