import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-buttons-tailwind-style',
    styleUrls: ['./buttons-tailwind-style.component.scss'],
    templateUrl: './buttons-tailwind-style.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonDirective]
})
export class ButtonsTailwindStyleComponent {}
