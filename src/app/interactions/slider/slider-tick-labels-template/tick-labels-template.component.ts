import { Component } from "@angular/core";

@Component({
    selector: "app-tick-labels-template",
    styleUrls: ["./tick-labels-template.component.scss"],
    templateUrl: "./tick-labels-template.component.html"
})
export class TickLabelsTemplateComponent {
    public tickLabel(value, primary, index) {
        if (primary) {
            return Math.round(value);
        }

        return value;
    }
}
