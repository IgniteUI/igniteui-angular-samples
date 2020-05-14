// tslint:disable: max-line-length
import { Injectable } from "@angular/core";
import { IgcDockManagerPoint, IgcSplitPane } from "dockmanager-webcomponent/dist/types/components/dockmanager/dockmanager.public-interfaces";
import { DataAnalysisDockManagerComponent } from "./data-analysis-dock-manager.component";

@Injectable({
  providedIn: DataAnalysisDockManagerComponent
})
export class FloatingPanesService {
  public set initialPosition(point: IgcDockManagerPoint) {
    this._initialPosition = point;
  }

  public get initialPosition() {
      return this._initialPosition;
  }

  public floatingPanes: IgcSplitPane[];

  private _initialPosition: IgcDockManagerPoint;
  constructor() { }

  public appendChartPane(pane: IgcSplitPane) {
      pane.floatingLocation = this.initialPosition;
      this.floatingPanes.push(pane);
      this.initialPosition.x++;
      this.initialPosition.y--;
  }

  public removeChartPane(pane: IgcSplitPane) {
    const index = this.floatingPanes.indexOf(pane);
    this.floatingPanes = this.floatingPanes.slice(index, index + 1);
    if (index !== this.floatingPanes.length - 1) {
        this.floatingPanes.filter((p, i) => i >= index).forEach(p => {
            p.floatingLocation.x--;
            p.floatingLocation.y++;
        });
    }

    const lastPane = this.floatingPanes[this.floatingPanes.length - 1];
    this.initialPosition.x = lastPane.floatingLocation.x + 1;
    this.initialPosition.y = lastPane.floatingLocation.y - 1;
  }

}
