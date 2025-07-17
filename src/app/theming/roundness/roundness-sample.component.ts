import { Component } from "@angular/core";
import {
    IgxCardComponent,
    IgxCardContentDirective,
    IgxCardHeaderComponent,
    IgxChipComponent,
    IgxIconComponent,
    IgxPrefixDirective,
} from "igniteui-angular";

@Component({
    selector: "app-chip-simple",
    styleUrls: ["./roundness-sample.component.scss"],
    templateUrl: "./roundness-sample.component.html",
    imports: [
        IgxCardComponent,
        IgxCardHeaderComponent,
        IgxCardContentDirective,
        IgxChipComponent,
        IgxIconComponent,
        IgxPrefixDirective,
    ],
})
export class RoundnessComponent {}
