import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';

@Component({
    selector: 'app-avatar-sample-2',
    styleUrls: ['./avatar-sample-2.component.scss'],
    templateUrl: './avatar-sample-2.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxAvatarComponent]
})
export class AvatarSample2Component {

  constructor() { }

}
