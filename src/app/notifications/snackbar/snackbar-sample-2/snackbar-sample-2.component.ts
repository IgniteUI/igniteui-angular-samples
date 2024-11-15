import { Component } from '@angular/core';
import { IgxButtonDirective, IgxSnackbarComponent, IgxIconComponent } from 'igniteui-angular';

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
