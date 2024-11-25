import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeGrid1Component } from "./tree-grid1/tree-grid1.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [TreeGrid1Component]
})
export class AppComponent {
  title = 'Home - IgniteUI for Angular';
}
