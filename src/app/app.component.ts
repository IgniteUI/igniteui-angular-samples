import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Samples';
  public paths = [
    'calendar',
    'card',
    'carousel',
    'datepicker',
    'dialog',
    'grid',
    'list',
    'snackbar'
  ];
}
