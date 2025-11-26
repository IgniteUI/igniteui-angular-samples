import { Component } from '@angular/core';
import { IgxSwitchComponent, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxMaskDirective } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-mask-sample-3',
    styleUrls: ['./mask-sample-3.component.scss'],
    templateUrl: './mask-sample-3.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxMaskDirective]
})
export class MaskSample3Component {
  public socialSecurityNumber = '123-45-6789';
  public includeLiterals = true;

  public clear() {
    if (this.includeLiterals === false){
        this.socialSecurityNumber = '123-45-6789';
    } else {
        this.socialSecurityNumber = '';
    }
  }
}
