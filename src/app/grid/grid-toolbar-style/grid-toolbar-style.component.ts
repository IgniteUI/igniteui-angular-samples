import { Component, OnInit, ViewChild } from "@angular/core";
import { athletesData } from "../services/data";

@Component({
  selector: "app-grid-toolbar-style",
  styleUrls: ["./grid-toolbar-style.component.scss"],
  templateUrl: "./grid-toolbar-style.component.html"
})
export class GridToolbarStyleComponent implements OnInit {

    public data: any[];

    public ngOnInit() {
        this.data = athletesData;
    }
}
