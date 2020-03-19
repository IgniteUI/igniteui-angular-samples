import { Component, OnInit } from "@angular/core";
import { SINGERS } from "../data";

@Component({
  selector: "hierarchical-grid-column-selection",
  styleUrls: ["./hierarchical-grid-column-selection.component.scss"],
  templateUrl: "./hierarchical-grid-column-selection.component.html"
})
export class HierarchicalGridColumnSelectionComponent implements OnInit {
  public data: any[];

  public ngOnInit() {
    this.data = SINGERS;
  }
}
