import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxInputDirective, IgxInputGroupComponent } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-button-overview',
    styleUrls: ['./button-overview.component.scss'],
    templateUrl: './button-overview.component.html',
    imports: [IgxAvatarComponent, IgxButtonDirective, IgxInputGroupComponent, IgxInputDirective]
})
export class ButtonOverviewComponent { }
