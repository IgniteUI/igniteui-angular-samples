import { Component, ElementRef } from '@angular/core';
import { IgxButtonDirective, IgxSnackbarComponent } from 'igniteui-angular';

@Component({
    selector: 'app-snackbar-style',
    styleUrls: ['./snackbar-style.component.scss'],
    templateUrl: './snackbar-style.component.html',
    imports: [IgxButtonDirective, IgxSnackbarComponent]
})
export class SnackbarStyleComponent {

  constructor(public elem: ElementRef) { }

  public close(element) {
    element.close();
  }
}
