import { Component, ElementRef, inject, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';

@Component({
    selector: 'app-snackbar-style',
    styleUrls: ['./snackbar-style.component.scss'],
    templateUrl: './snackbar-style.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonDirective, IgxSnackbarComponent]
})
export class SnackbarStyleComponent {
  elem = inject(ElementRef);


  public close(element) {
    element.close();
  }
}
