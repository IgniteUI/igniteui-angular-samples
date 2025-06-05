import { Component, ElementRef, inject } from '@angular/core';
import { IgxButtonDirective, IgxSnackbarComponent } from 'igniteui-angular';

@Component({
    selector: 'app-snackbar-style',
    styleUrls: ['./snackbar-style.component.scss'],
    templateUrl: './snackbar-style.component.html',
    imports: [IgxButtonDirective, IgxSnackbarComponent]
})
export class SnackbarStyleComponent {
  elem = inject(ElementRef);


  public close(element) {
    element.close();
  }
}
