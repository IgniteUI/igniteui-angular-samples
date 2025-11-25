import { Component } from '@angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxMaskDirective } from 'igniteui-angular/directives';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-mask-sample-5',
    templateUrl: './mask-sample-5.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxMaskDirective]
})

export class MaskSample5Component {
    public value;
}
