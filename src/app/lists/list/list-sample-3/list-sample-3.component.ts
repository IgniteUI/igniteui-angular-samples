import { Component } from '@angular/core';
import { IgxListComponent, IgxListItemComponent, IgxRippleDirective, IgxListLineTitleDirective, IgxListLineSubTitleDirective } from 'igniteui-angular';
import { NgFor } from '@angular/common';
@Component({
    selector: 'app-contact-list',
    styleUrls: ['./list-sample-3.component.scss'],
    templateUrl: './list-sample-3.component.html',
    imports: [IgxListComponent, IgxListItemComponent, NgFor, IgxRippleDirective, IgxListLineTitleDirective, IgxListLineSubTitleDirective]
})
export class ListSample3Component {
  public contacts = [
    {
      name: 'Terrance Orta',
      phone: '770-504-2217'
    },
    {
      name: 'Richard Mahoney',
      phone: '423-676-2869'
    },
    {
      name: 'Donna Price',
      phone: '859-496-2817'
    },
    {
      name: 'Lisa Landers',
      phone: '901-747-3428'
    },
    {
      name: 'Dorothy H. Spencer',
      phone: '573-394-9254'
    }
  ];

  constructor() { }
}
