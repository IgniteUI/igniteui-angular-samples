import { Component, ViewChild } from "@angular/core";
import { IgxExpansionPanelComponent } from "igniteui-angular";
import { data as weatherData } from "./weather-data";
debugger;
@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-expansion-sample-7",
    styleUrls: ["./expansion-sample-7.component.scss"],
    templateUrl: "./expansion-sample-7.component.html"
})
export class ExpansionPanelSample7Component {

    @ViewChild(IgxExpansionPanelComponent)
    public panel: IgxExpansionPanelComponent;
    public data = weatherData;

    public toggleDetails() {
        this.panel.toggle();
    }
}
