import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent
} from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicPolylineSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-polyline-series-component";

@Component({
  selector: "app-map-type-shape-polyline-series",
  templateUrl: "./map-type-shape-polyline-series.component.html"
})
export class MapTypeShapePolylineSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    constructor() {
    }

    public ngAfterViewInit(): void {
    }

    public addSeriesWith(locations: any[], brush: string) {
        const polylineSeries = new IgxGeographicPolylineSeriesComponent ();
        polylineSeries.dataSource = locations;
        this.map.series.add(polylineSeries);
    }

}
