import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';

@Component({
    selector: 'app-snackbar-sample-5',
    styleUrls: ['./snackbar-sample-5.component.scss'],
    templateUrl: './snackbar-sample-5.component.html',
    imports: [IgxButtonDirective, IgxSnackbarComponent]
})
export class SnackbarSample5Component { }
