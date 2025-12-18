import { Component } from '@angular/core';
import { IgxEmptyListTemplateDirective, IgxListComponent } from 'igniteui-angular/list';

@Component({
    selector: 'app-list-sample-5',
    styleUrls: ['./list-sample-5.component.scss'],
    templateUrl: './list-sample-5.component.html',
    imports: [IgxListComponent, IgxEmptyListTemplateDirective]
})
export class ListSample5Component {

  constructor() { }

}
