import { Component } from '@angular/core';

@Component({
  selector: 'app-toast-sample-5',
  styleUrls: ['./toast-sample-5.component.scss'],
  templateUrl: './toast-sample-5.component.html'
})

export class ToastSample5Component {

  public open(toast) {
    toast.open();
  }
}
