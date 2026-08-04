import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxMaskDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-mask-sample-2',
    styleUrls: ['./mask-sample-2.component.scss'],
    templateUrl: './mask-sample-2.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxLabelDirective, IgxInputDirective, IgxMaskDirective]
})
export class MaskSample2Component {

  constructor() { }

}
