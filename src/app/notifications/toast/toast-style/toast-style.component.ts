import { Component, ElementRef } from '@angular/core';
import { IgxToastComponent, VerticalAlignment } from 'igniteui-angular';

@Component({
    selector: 'app-toast-style',
    styleUrls: ['./toast-style.component.scss'],
    templateUrl: './toast-style.component.html',
    standalone: false
})
export class ToastStyleComponent {
    public toast: IgxToastComponent;
    public position = VerticalAlignment;

    constructor(public elem: ElementRef) { }

    openToast(toast: IgxToastComponent, pos: VerticalAlignment) {
        toast.positionSettings.verticalDirection = pos;
        toast.open();
    }
}

