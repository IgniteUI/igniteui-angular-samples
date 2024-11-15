import { Component } from '@angular/core';
import { IgxToastComponent, VerticalAlignment } from 'igniteui-angular';

@Component({
    selector: 'app-toast-sample-1',
    styleUrls: ['./toast-sample-1.component.scss'],
    templateUrl: './toast-sample-1.component.html',
    standalone: false
})
export class ToastSample1Component {
    public toast: IgxToastComponent;
    public position = VerticalAlignment;

    openToast(toast: IgxToastComponent, pos: VerticalAlignment) {
        toast.positionSettings.verticalDirection = pos;
        toast.open();
    }
}
