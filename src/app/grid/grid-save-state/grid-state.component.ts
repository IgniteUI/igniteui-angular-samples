import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxToastComponent } from "igniteui-angular";
import { employeesData } from "./localData";
import { IgxGridStateDirective } from "./state.directive";

interface IColumnState {
    field: string;
    header: string;
    width?: string;
    dataType?: string;
    pinned?: boolean;
    sortable?: boolean;
    filterable?: boolean;
    movable?: true;
    hidden?: boolean;
}

// tslint:disable:object-literal-sort-keys
@Component({
  selector: "app-grid",
  styleUrls: ["./grid-state.component.scss"],
  templateUrl: "./grid-state.component.html"
})

export class GridSaveStateComponent implements OnInit {
  public localData: any[];
  public columns: IColumnState[];
  public gridId = "grid1";
  public state;

  public initialColumns: IColumnState[] = [
    { field: "FirstName", header: "First Name", width: "150px", dataType: "string", pinned: true},
    { field: "LastName", header: "Last Name", width: "150px", dataType: "string", pinned: true },
    { field: "Country", header: "Country", width: "140px", dataType: "string" },
    { field: "Age", header: "Age", width: "110px", dataType: "number"},
    { field: "RegistererDate", header: "Registerer Date", width: "180px", dataType: "date" },
    { field: "IsActive", header: "Is Active", width: "140px", dataType: "boolean" }
  ];

  constructor() {
  }

  public ngOnInit() {
    this.localData = employeesData;
    const columnsFromState =  this.state.getColumnsForGrid(this.gridId);
    this.columns = this.state.columns && columnsFromState ?
        columnsFromState : this.initialColumns;
  }

  public onChange(event: any, action: string) {
   this.state.toggleAction(event.checked, action);
  }

  public clearStorage(toast: IgxToastComponent) {
    this.state.clearStorageForGrid(this.gridId);
    toast.show();
  }

  public reloadPage() {
      window.location.reload();
  }
}
