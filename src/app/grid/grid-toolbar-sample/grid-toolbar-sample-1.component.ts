import { Component} from "@angular/core";
import { athletesData } from "../../data/athletesData";

@Component({
  selector: "grid-toolbar-sample-1",
  styleUrls: ["./grid-toolbar-sample-1.component.scss"],
  templateUrl: "./grid-toolbar-sample-1.component.html"
})
export class GridToolbarSample1Component {

    public data: any[];

    constructor() {
        this.data = athletesData;
    }
}
