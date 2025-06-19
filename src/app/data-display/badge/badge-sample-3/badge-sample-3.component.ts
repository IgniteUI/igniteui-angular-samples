import { Component } from '@angular/core';
import { Member } from '../model/member.model';
import { IgxListComponent, IgxListItemComponent, IgxAvatarComponent, IgxBadgeComponent } from 'igniteui-angular';


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
