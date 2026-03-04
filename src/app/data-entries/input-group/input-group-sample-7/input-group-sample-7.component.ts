import { Component } from '@angular/core';
import { BaseInputGroupSampleComponent } from '../base-input.component';
import { FormsModule } from '@angular/forms';
import { IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective, IgxIconComponent, IgxSuffixDirective } from 'igniteui-angular';

@Component({
    selector: 'app-input-group-sample-7',
    styleUrls: ['./input-group-sample-7.component.scss'],
    templateUrl: './input-group-sample-7.component.html',
    imports: [FormsModule, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective, IgxIconComponent, IgxSuffixDirective]
})
export class InputGroupSample7Component extends BaseInputGroupSampleComponent { }
