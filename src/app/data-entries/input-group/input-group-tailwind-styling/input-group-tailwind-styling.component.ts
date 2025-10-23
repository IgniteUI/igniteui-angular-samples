import { Component } from '@angular/core';
import { IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective } from 'igniteui-angular';

@Component({
    selector: 'app-input-group-tailwind-style',
    templateUrl: 'input-group-tailwind-styling.component.html',
    styleUrls: ['input-group-tailwind-styling.component.scss'],
    imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective]
})
export class InputGroupTailwindStyleComponent { }
