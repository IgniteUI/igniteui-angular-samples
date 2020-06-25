import { Component, ElementRef } from "@angular/core";
import { IgxCardModule } from "igniteui-angular";
@Component({
    selector: `overlay-dynamic-card-component`,
    templateUrl: `overlay-dynamic-card.component.html`,
    styleUrls: [`overlay-dynamic-card.component.scss`]
})
export class MyDynamicCardComponent {
    constructor(public elementRef: ElementRef) {}
}
