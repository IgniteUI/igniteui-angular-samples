import { Component } from '@angular/core';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-input-group-tailwind-style',
    templateUrl: 'input-group-tailwind-styling.component.html',
    styleUrls: ['input-group-tailwind-styling.component.scss'],
    imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective]
})
export class InputGroupTailwindStyleComponent { }
