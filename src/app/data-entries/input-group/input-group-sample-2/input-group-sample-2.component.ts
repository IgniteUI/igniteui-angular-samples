import { Component } from '@angular/core';
import { BaseInputGroupSampleComponent } from '../base-input.component';
import { FormsModule } from '@angular/forms';
import { IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective } from 'igniteui-angular';

@Component({
    selector: 'app-input-group-sample-2',
    styleUrls: ['./input-group-sample-2.component.scss'],
    templateUrl: './input-group-sample-2.component.html',
    imports: [FormsModule, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective]
})
export class InputGroupSample2Component extends BaseInputGroupSampleComponent { }
