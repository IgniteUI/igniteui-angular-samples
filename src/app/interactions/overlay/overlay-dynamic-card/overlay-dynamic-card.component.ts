import { Component, ElementRef, inject } from '@angular/core';
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective, IgxCardModule } from 'igniteui-angular/card';
@Component({
    selector: `app-overlay-dynamic-card-component`,
    templateUrl: `overlay-dynamic-card.component.html`,
    styleUrls: [`overlay-dynamic-card.component.scss`],
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardContentDirective]
})
export class MyDynamicCardComponent {    elementRef = inject(ElementRef);

}
