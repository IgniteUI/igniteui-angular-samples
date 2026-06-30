import { Component } from '@angular/core';
import { VerticalAlignment } from 'igniteui-angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxToastComponent } from 'igniteui-angular/toast';
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
