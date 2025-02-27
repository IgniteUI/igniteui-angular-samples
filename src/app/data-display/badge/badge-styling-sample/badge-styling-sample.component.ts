import { Component } from '@angular/core';
import { Member } from '../model/member.model';
import { IgxListComponent, IgxListItemComponent, IgxAvatarComponent, IgxBadgeComponent } from 'igniteui-angular';


@Component({
    selector: 'app-badge-styling-sample',
    styleUrls: ['./badge-styling-sample.component.scss'],
    templateUrl: './badge-styling-sample.component.html',
    imports: [IgxListComponent, IgxListItemComponent, IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeStylingSampleComponent {
  public members: Member[] = [
    new Member('Terrance Orta', 'online'),
    new Member('Donna Price', 'online'),
    new Member('Lisa Landers', 'away'),
    new Member('Dorothy H. Spencer', 'offline')
  ];
}
