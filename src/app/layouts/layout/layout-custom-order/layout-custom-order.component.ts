import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonGroupAlignment } from 'igniteui-angular/button-group';
import { IgxFlexDirective, IgxLayoutDirective } from 'igniteui-angular/directives';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-layout-custom-order',
    styleUrls: ['./layout-custom-order.component.scss'],
    templateUrl: './layout-custom-order.component.html',
    imports: [IgxLayoutDirective, IgxFlexDirective]
})

export class LayoutCustomOrderComponent {
}
