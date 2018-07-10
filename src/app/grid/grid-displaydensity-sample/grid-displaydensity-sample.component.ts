import { Component, OnInit, ViewChild } from "@angular/core";
import { CloseScrollStrategy, ConnectedPositioningStrategy,
    HorizontalAlignment, IgxButtonGroupComponent, IgxGridComponent, VerticalAlignment } from "igniteui-angular";
import { DATA } from "./data";

@Component({
  selector: "app-grid-displaydensity-sample",
  styleUrls: ["./grid-displaydensity-sample.component.scss"],
  templateUrl: "./grid-displaydensity-sample.component.html"
})
export class GridDisplayDensitySampleComponent implements OnInit {

    @ViewChild("grid", { read: IgxGridComponent })
    public grid: IgxGridComponent;
    @ViewChild(IgxButtonGroupComponent) public buttonGroup: IgxButtonGroupComponent;
    public data;
    public density = "comfortable";
    public displayDensities;

    public ngOnInit() {
        this.data = DATA;
        this.displayDensities = [
            {
                label: "compact",
                selected: this.density === "compact",
                togglable: true
            },
            {
                label: "cosy",
                selected: this.density === "cosy",
                togglable: true
            },
            {
                label: "comfortable",
                selected: this.density === "comfortable",
                togglable: true
            }
        ];
    }

    public selectDensity(event) {
        console.log(this.displayDensities[event.index].label);
        this.density = this.displayDensities[event.index].label;
        this.grid.displayDensity = this.displayDensities[event.index].label;
        this.grid.reflow();
    }

}
