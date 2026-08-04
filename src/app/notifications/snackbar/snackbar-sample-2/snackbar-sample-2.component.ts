import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-snackbar-sample-2',
    styleUrls: ['./snackbar-sample-2.component.scss'],
    templateUrl: './snackbar-sample-2.component.html',
    imports: [IgxButtonDirective, IgxSnackbarComponent, IgxIconComponent]
})
export class SnackbarSample2Component {
  public close(element) {
    element.close();
  }
}
