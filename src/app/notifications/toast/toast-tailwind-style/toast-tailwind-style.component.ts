import { Component, ElementRef, inject } from '@angular/core';
import { IgxToastComponent, VerticalAlignment, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';

@Component({
    selector: 'app-toast-tailwind-style',
    styleUrls: ['./toast-tailwind-style.component.scss'],
    templateUrl: './toast-tailwind-style.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective, IgxToastComponent]
})
export class ToastTailwindStyleComponent {
    elem = inject(ElementRef);

    public toast: IgxToastComponent;
    public position = VerticalAlignment;

    openToast(toast: IgxToastComponent, pos: VerticalAlignment) {
        toast.positionSettings.verticalDirection = pos;
        toast.open();
    }
}

