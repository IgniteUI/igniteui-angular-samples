import { Component } from '@angular/core';
import { IgxToastComponent } from 'igniteui-angular';

@Component({
    selector: 'app-toast-style',
    styleUrls: ['./toast-style.component.scss'],
    templateUrl: './toast-style.component.html'
})
export class ToastStyleComponent {
    public toast: IgxToastComponent;
    //public toastPosition: IgxToastPosition;

    openToast(toast: IgxToastComponent, toastPosition: any) {
        //toast.position = toastPosition;
        toast.open();
    }
}

