import { Component } from '@angular/core';
import { VerticalAlignment, IgxButtonDirective, IgxToastComponent } from 'igniteui-angular';
@Component({
    selector: 'app-toast-sample-5',
    styleUrls: ['./toast-sample-5.component.scss'],
    templateUrl: './toast-sample-5.component.html',
    imports: [IgxButtonDirective, IgxToastComponent]
})

export class ToastSample5Component {
  public open(toast) {
    toast.positionSettings.verticalDirection = VerticalAlignment.Top;
    toast.open();
  }
}
