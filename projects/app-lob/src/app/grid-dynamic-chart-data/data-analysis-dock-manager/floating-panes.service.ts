/* eslint-disable max-len */
import { Injectable } from "@angular/core";
import { IgcDockManagerPoint, IgcSplitPane } from "igniteui-dockmanager";

@Injectable({
  providedIn: "root"
})
export class FloatingPanesService {

  public set initialPanePosition(point: IgcDockManagerPoint) {
    this._initialPanePosition = point;
  }

  public get initialPanePosition() {
      return this._initialPanePosition;
  }

  public floatingPanes: IgcSplitPane[] = [];

  private _initialPanePosition: IgcDockManagerPoint;
  constructor() { }

  public appendChartPane(pane: IgcSplitPane) {

        if (this.floatingPanes.length) {
            const lastPane = this.floatingPanes[this.floatingPanes.length - 1];
            pane.floatingLocation = {x: lastPane.floatingLocation.x + 10, y: lastPane.floatingLocation.y + 10}  ;
        } else {
            pane.floatingLocation = this.initialPanePosition;
        }
        this.floatingPanes.push(pane);

  }

  public removeChartPane(pane: IgcSplitPane) {
    const index = this.floatingPanes.indexOf(this.floatingPanes.find(p => p.id === pane.id));
    this.floatingPanes.splice(index, index + 1);
  }

}
