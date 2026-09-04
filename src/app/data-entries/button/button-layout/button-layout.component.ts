import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-layout',
    styleUrls: ['./button-layout.component.scss'],
    templateUrl: './button-layout.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonLayoutComponent {
}
