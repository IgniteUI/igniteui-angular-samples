import { Component } from '@angular/core';
import { IgxButtonDirective, IgxSnackbarComponent } from 'igniteui-angular';

@Component({
    selector: 'app-snackbar-sample-1',
    styleUrls: ['./snackbar-sample-1.component.scss'],
    templateUrl: './snackbar-sample-1.component.html',
    imports: [IgxButtonDirective, IgxSnackbarComponent]
})
export class SnackbarSample1Component { }
