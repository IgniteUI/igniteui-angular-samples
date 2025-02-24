import { Component } from '@angular/core';
import { BaseInputGroupSampleComponent } from '../base-input.component';
import { IGX_INPUT_GROUP_TYPE, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective, IgxPrefixDirective } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-input-group-sample-5',
    styleUrls: ['./input-group-sample-5.component.scss'],
    templateUrl: './input-group-sample-5.component.html',
    providers: [{ provide: IGX_INPUT_GROUP_TYPE, useValue: 'box' }],
    imports: [FormsModule, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective, IgxPrefixDirective]
})
export class InputGroupSample5Component extends BaseInputGroupSampleComponent { }
