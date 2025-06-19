import { Component, OnInit } from '@angular/core';
import { BaseInputGroupSampleComponent } from '../base-input.component';
import { FormsModule } from '@angular/forms';
import { IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective } from 'igniteui-angular';

@Component({
    selector: 'app-input-group-sample-4',
    styleUrls: ['./input-group-sample-4.component.scss'],
    templateUrl: './input-group-sample-4.component.html',
    imports: [FormsModule, IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective]
})
export class InputGroupSample4Component extends BaseInputGroupSampleComponent { }
