import { Component } from '@angular/core';
import { IgxToastComponent } from 'igniteui-angular';

@Component({
    selector: 'app-toast-sample-1',
    styleUrls: ['./toast-sample-1.component.scss'],
    templateUrl: './toast-sample-1.component.html'
})
export class ToastSample1Component {
    public toast: IgxToastComponent;

    openToast(toast: IgxToastComponent, toastPosition: any) {
        toast.open();
    }
}
