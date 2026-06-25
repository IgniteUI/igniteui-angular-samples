import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ButtonGroupAlignment } from 'igniteui-angular/button-group';
import { IgxFlexDirective, IgxLayoutDirective } from 'igniteui-angular/directives';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-custom-order',
    styleUrls: ['./layout-custom-order.component.scss'],
    templateUrl: './layout-custom-order.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutCustomOrderComponent {
}
