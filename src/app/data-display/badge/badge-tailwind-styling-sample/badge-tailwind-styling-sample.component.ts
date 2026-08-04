import { Component } from '@angular/core';
import { Member } from '../model/member.model';
import { IgxListComponent, IgxListItemComponent } from 'igniteui-angular/list';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxBadgeComponent } from 'igniteui-angular/badge';


@Component({
    selector: 'app-badge-tailwind-styling-sample',
    styleUrls: ['./badge-tailwind-styling-sample.component.scss'],
    templateUrl: './badge-tailwind-styling-sample.component.html',
    imports: [IgxListComponent, IgxListItemComponent, IgxAvatarComponent, IgxBadgeComponent]
})
export class BadgeTailwindStylingSampleComponent {
  public members: Member[] = [
    new Member('Terrance Orta', 'online'),
    new Member('Donna Price', 'online'),
    new Member('Lisa Landers', 'away'),
    new Member('Dorothy H. Spencer', 'offline')
  ];
}
