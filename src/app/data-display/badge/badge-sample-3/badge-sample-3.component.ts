import { Component } from '@angular/core';
import { Member } from '../model/member.model';
import { IgxListComponent, IgxListItemComponent } from 'igniteui-angular/list';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';


@Component({
    selector: 'app-badge-sample-3',
    styleUrls: ['./badge-sample-3.component.scss'],
    templateUrl: './badge-sample-3.component.html',
    imports: [IgxListComponent, IgxListItemComponent, IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeSample3Component {
  public members: Member[] = [
    new Member('Terrance Orta', 'online'),
    new Member('Donna Price', 'online'),
    new Member('Lisa Landers', 'away'),
    new Member('Dorothy H. Spencer', 'offline')
  ];
}
