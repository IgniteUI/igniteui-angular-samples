import { Component } from '@angular/core';
import { IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxMaskDirective } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-mask-sample-5',
    templateUrl: './mask-sample-5.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxMaskDirective]
})

export class MaskSample5Component {
    public value;
}
