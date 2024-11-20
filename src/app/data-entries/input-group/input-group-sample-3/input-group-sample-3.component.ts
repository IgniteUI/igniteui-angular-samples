import { Component } from '@angular/core';
import { BaseInputGroupSampleComponent } from '../base-input.component';
import { FormsModule } from '@angular/forms';
import { IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxIconComponent, IgxSuffixDirective } from 'igniteui-angular';

@Component({
    selector: 'app-input-group-sample-3',
    styleUrls: ['./input-group-sample-3.component.scss'],
    templateUrl: './input-group-sample-3.component.html',
    imports: [FormsModule, IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxIconComponent, IgxSuffixDirective]
})
export class InputGroupSample3Component extends BaseInputGroupSampleComponent { }
