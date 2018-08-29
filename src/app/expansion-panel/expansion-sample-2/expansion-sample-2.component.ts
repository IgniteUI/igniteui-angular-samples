import { Component, ViewChild } from "@angular/core";
import {
    IgxExpansionPanelComponent
} from "igniteui-angular";
@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-expansion-sample-2",
    styleUrls: ["./expansion-sample-2.component.scss"],
    templateUrl: "./expansion-sample-2.component.html"
})
export class ExpansionPanelSample2Component {
    @ViewChild(IgxExpansionPanelComponent, { read: IgxExpansionPanelComponent })
    public panel: IgxExpansionPanelComponent;
    public readMore = "https://en.wikipedia.org/wiki/Hummingbird";
    public handleExpansion(evt?: {event: Event}) {
        console.log("Expanded event thrown ", (evt ? "with event: " + evt.event : "with no event"));
    }

    public handleCollapse(evt?: {event: Event}) {
        console.log("Collapsed event thrown ", (evt ? "with event: " + evt.event : "with no event"));
    }
}
