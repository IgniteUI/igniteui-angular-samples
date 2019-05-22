import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicShapeSeriesComponent  } from "igniteui-angular-maps/ES5/igx-geographic-shape-series-component";

@Component({
  selector: "app-map-type-shape-polygon-series",
  templateUrl: "./map-type-shape-polygon-series.component.html"
})
export class MapTypeShapePolygonSeriesComponent implements AfterViewInit {

  @ViewChild ("map")
  public map: IgxGeographicMapComponent;
  constructor() {
  }

  public ngAfterViewInit(): void {
  }

  public addSeriesWith(locations: any[], brush: string) {
      const polygonSeries = new IgxGeographicShapeSeriesComponent ();
      polygonSeries.dataSource = locations;
      this.map.series.add(polygonSeries);
  }

}
