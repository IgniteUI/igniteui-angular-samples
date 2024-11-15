import { Component } from '@angular/core';
import { IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective } from 'igniteui-angular';

@Component({
    selector: 'app-input-group-style',
    templateUrl: 'input-group-styling.component.html',
    styleUrls: ['input-group-styling.component.scss'],
    imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective]
})
export class InputGroupStyleComponent { }
