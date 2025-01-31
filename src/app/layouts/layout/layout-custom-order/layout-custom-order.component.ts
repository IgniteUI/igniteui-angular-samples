import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment, IgxLayoutDirective, IgxFlexDirective } from 'igniteui-angular';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-custom-order',
    styleUrls: ['./layout-custom-order.component.scss'],
    templateUrl: './layout-custom-order.component.html',
    imports: [IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutCustomOrderComponent {
}
