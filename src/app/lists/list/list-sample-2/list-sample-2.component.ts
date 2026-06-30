import { Component } from '@angular/core';
import { IgxListComponent, IgxListItemComponent } from 'igniteui-angular/list';

@Component({
    selector: 'app-igx-list-simple',
    styleUrls: ['./list-sample-2.component.scss'],
    templateUrl: './list-sample-2.component.html',
    imports: [IgxListComponent, IgxListItemComponent]
})
export class ListSample2Component {
  constructor() {}
}
