import { Component, OnInit } from "@angular/core";
import { EMPLOYEE_FLAT_AVATARS_DATA } from "../data/employees-flat-avatars";

@Component({
  selector: "tree-grid-toolbar-sample-1",
  styleUrls: ["./tree-grid-toolbar-sample-1.component.scss"],
  templateUrl: "./tree-grid-toolbar-sample-1.component.html"
})
export class TreeGridToolbarSample1Component implements OnInit {

    public data: any[];

    public ngOnInit() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
    }
}
