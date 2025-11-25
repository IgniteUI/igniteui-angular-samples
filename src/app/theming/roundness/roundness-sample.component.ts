import { Component } from "@angular/core";
import { IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent } from 'igniteui-angular/card';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective } from 'igniteui-angular/input-group';

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
        IgxPrefixDirective
    ]
})
export class RoundnessComponent {}
