import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-button-group-sample-5",
    styleUrls: ["./button-group-sample-5.component.scss"],
    templateUrl: "./button-group-sample-5.component.html"
})
export class ButtonGroupSample5Component implements OnInit {

    public rippleColor = "grey";

    public displayDensity = "Comfrtable";
    public displayDensities;

    public ngOnInit() {
        this.displayDensities = [
            { label: "cosy", selected: this.displayDensity === "cosy", togglable: true },
            { label: "compact", selected: this.displayDensity === "compact", togglable: true },
            { label: "comfortable", selected: this.displayDensity === "comfortable", togglable: true }
        ];
    }

    public selectDensity(event) {
        this.displayDensity = this.displayDensities[event.index].label;
    }

}
