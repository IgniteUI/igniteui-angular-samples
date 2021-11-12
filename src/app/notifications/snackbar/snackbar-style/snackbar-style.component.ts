import { Component } from '@angular/core';

@Component({
  selector: 'app-snackbar-style',
  styleUrls: ['./snackbar-style.component.scss'],
  templateUrl: './snackbar-style.component.html'
})
export class SnackbarStyleComponent {

  constructor() { }

  public close(element) {
    element.close();
  }
}
