import { Component, ElementRef, inject } from '@angular/core';
import { IgxCardModule, IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardContentDirective } from 'igniteui-angular';
@Component({
    selector: `app-overlay-dynamic-card-component`,
    templateUrl: `overlay-dynamic-card.component.html`,
    styleUrls: [`overlay-dynamic-card.component.scss`],
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardContentDirective]
})
export class MyDynamicCardComponent {    elementRef = inject(ElementRef);

}
