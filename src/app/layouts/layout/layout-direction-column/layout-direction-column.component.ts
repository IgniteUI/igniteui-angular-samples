import { Component } from "@angular/core";
import { ButtonGroupAlignment } from "igniteui-angular";

@Component({
  selector: "app-layout-direction-column",
  styleUrls: ["./layout-direction-column.component.scss"],
  templateUrl: "./layout-direction-column.component.html"
})

export class LayoutDirectionColumnComponent {
    public alignment = ButtonGroupAlignment.horizontal;
    public rippleColor = "grey";
    public layout = "column";
}
