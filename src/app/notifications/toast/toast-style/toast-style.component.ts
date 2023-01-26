import { Component } from '@angular/core';
import { IgxToastComponent, VerticalAlignment } from '@infragistics/igniteui-angular';

@Component({
    selector: 'app-toast-style',
    styleUrls: ['./toast-style.component.scss'],
    templateUrl: './toast-style.component.html'
})
export class ToastStyleComponent {
    public toast: IgxToastComponent;
    public position = VerticalAlignment;

    openToast(toast: IgxToastComponent, pos: VerticalAlignment) {
        toast.positionSettings.verticalDirection = pos;
        toast.open();
    }
}

