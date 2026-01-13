import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-resizing-sample',
    styleUrls: ['./grid-resizing-sample.component.scss'],
    templateUrl: 'grid-resizing-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})

export class ResizingSampleComponent {
    public data: any[];

    public col: IgxColumnComponent;
    public pWidth: string;
    public nWidth: string;

    constructor() {
        this.data = DATA;
    }

    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }
}
