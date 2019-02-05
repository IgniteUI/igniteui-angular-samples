import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxToastComponent } from "igniteui-angular";
import { employeesData } from "./localData";
import { IgxGridStateDirective } from "./state.directive";

@Component({
  selector: "app-grid",
  styleUrls: ["./grid-state.component.scss"],
  templateUrl: "./grid-state.component.html"
})

export class GridSaveStateComponent implements OnInit {
  public localData: any[];

  @ViewChild(IgxGridStateDirective) public state;

  constructor() {
  }

  public ngOnInit() {
    this.localData = employeesData;
  }

  public onChange(event: any, action: string) {
   this.state.toggleAction(event.checked, action);
  }

  public clearStorage(toast: IgxToastComponent) {
    this.state.clearStorage();
    toast.show();
  }

  public reloadPage() {
      window.location.reload();
  }
}
