import { Component, ViewChild } from '@angular/core';
import { IgxButtonDirective, IgxToggleDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-toggle-sample-1',
    styleUrls: ['./toggle-sample-1.component.scss', '../toggle-samples.scss'],
    templateUrl: './toggle-sample-1.component.html',
    imports: [IgxButtonDirective, IgxToggleDirective]
})
export class ToggleSample1Component {

  @ViewChild(IgxToggleDirective, { static: true })
  public toggle: IgxToggleDirective;

  public toggleContent() {
    if (this.toggle.collapsed) {
      this.toggle.open();
    } else {
      this.toggle.close();
    }
  }
}
