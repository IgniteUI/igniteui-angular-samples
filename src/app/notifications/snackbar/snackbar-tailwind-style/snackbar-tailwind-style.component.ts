import { Component, ElementRef, inject, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';

@Component({
    selector: 'app-snackbar-tailwind-style',
    styleUrls: ['./snackbar-tailwind-style.component.scss'],
    templateUrl: './snackbar-tailwind-style.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonDirective, IgxSnackbarComponent]
})
export class SnackbarTailwindStyleComponent {
  elem = inject(ElementRef);


  public close(element) {
    element.close();
  }
}
