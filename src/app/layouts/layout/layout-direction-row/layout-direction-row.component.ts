import { Component } from "@angular/core";
import { ButtonGroupAlignment } from "igniteui-angular";

@Component({
  selector: "app-layout-direction-row",
  styleUrls: ["./layout-direction-row.component.scss"],
  templateUrl: "./layout-direction-row.component.html"
})

export class LayoutDirectionRowComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = "grey";
    public layout = "row";
}
