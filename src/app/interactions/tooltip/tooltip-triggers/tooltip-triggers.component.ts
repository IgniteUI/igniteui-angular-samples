import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import {
    IgxTooltipTargetDirective,
    IgxTooltipDirective,
    IgxButtonDirective,
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxCardHeaderTitleDirective,
    IgxCardContentDirective
} from "igniteui-angular";
import { defineComponents, IgcInputComponent } from 'igniteui-webcomponents';

defineComponents(IgcInputComponent);

@Component({
    selector: "app-tooltip-triggers",
    styleUrls: ["./tooltip-triggers.component.scss"],
    templateUrl: "./tooltip-triggers.component.html",
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
    IgxTooltipTargetDirective,
    IgxTooltipDirective,
    IgxButtonDirective,
    IgxCardComponent,
    IgxCardHeaderComponent,
    IgxCardHeaderTitleDirective,
    IgxCardContentDirective
]
})
export class TooltipTriggersComponent { }
