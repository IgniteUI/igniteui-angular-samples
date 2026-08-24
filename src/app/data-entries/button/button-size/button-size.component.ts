import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-size',
    styleUrls: ['./button-size.component.scss'],
    templateUrl: './button-size.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonSizeComponent {
    public sizes = ['large', 'medium', 'small'];
    public variants = ['contained', 'outlined', 'flat'];
}
