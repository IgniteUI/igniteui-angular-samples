import { Component } from "@angular/core";
import { SplitterType } from "igniteui-angular";

@Component({
    selector: "app-splitter-nested-sample",
    styleUrls: ["splitter-nested-sample.component.scss"],
    templateUrl: "splitter-nested-sample.component.html"
})
export class SplitterNestedSampleComponent {
    public typeHorizontal = SplitterType.Horizontal;
    public typeVertical = SplitterType.Vertical;
}
