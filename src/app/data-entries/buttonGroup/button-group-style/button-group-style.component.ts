import { Component } from '@angular/core';
import { ButtonGroupAlignment } from '@infragistics/igniteui-angular';

@Component({
    selector: 'app-button-group-style',
    styleUrls: ['./button-group-style.component.scss'],
    templateUrl: './button-group-style.component.html'
})
export class ButtonGroupStyleComponent {
    public alignment = ButtonGroupAlignment.vertical;
}
