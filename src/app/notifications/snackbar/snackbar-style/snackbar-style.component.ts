import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-snackbar-style',
    styleUrls: ['./snackbar-style.component.scss'],
    templateUrl: './snackbar-style.component.html',
    standalone: false
})
export class SnackbarStyleComponent {

  constructor(public elem: ElementRef) { }

  public close(element) {
    element.close();
  }
}
