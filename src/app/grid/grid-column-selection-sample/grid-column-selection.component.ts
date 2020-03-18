import { Component, OnInit } from "@angular/core";
import { DATA } from "../../data/customers";

@Component({
  selector: "grid-column-selection",
  styleUrls: ["./grid-column-selection.component.scss"],
  templateUrl: "./grid-column-selection.component.html"
})
export class GridColumnSelectionComponent implements OnInit {
  public columns: any[];
  public data: any[];

  public ngOnInit() {
    this.data = DATA;
    this.columns = [
      { field: "ID", width: 150, groupable: true, summary: true, selectable: true,  type: "string" },
      { field: "CompanyName", width: 150, groupable: true, summary: true, selectable: true, type: "string",  },
      { field: "ContactName", width: 150, resizable: true, movable: true,
        selectable: false, summary: true, type: "string" },
      { field: "ContactTitle", width: 150, movable: true,
        sortable: true, selectable: true, summary: true, type: "string" },
      { field: "Address", width: 150, resizable: true, movable: true,
        sortable: true, selectable: true, type: "string" },
      { field: "City", width: 150, movable: true, sortable: false, selectable: true,   type: "string" },
      { field: "Region", width: 150, movable: true, sortable: true, selectable: true, type: "string" },
      { field: "PostalCode", width: 150, movable: true, selectable: true, type: "string" },
      { field: "Phone", width: 150, resizable: true, movable: true, sortable: true,  type: "string" },
      { field: "Fax", width: 150, resizable: true, movable: true, selectable: true, type: "string" },
      { field: "Employees", width: 150, resizable: true, summary: false, selectable: true, type: "number" },
      { field: "DateCreated", width: 150, resizable: true, selectable: true, type: "date" },
      { field: "Contract", width: 150, resizable: true, selectable: true, type: "boolean" }
    ];
  }
}
