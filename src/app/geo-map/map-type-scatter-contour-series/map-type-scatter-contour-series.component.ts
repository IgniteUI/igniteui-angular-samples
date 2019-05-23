import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicContourLineSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-contour-line-series-component";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { WorldLocations } from "../../utilities/WorldLocations";

@Component({
  selector: "app-map-type-scatter-contour-series",
  templateUrl: "./map-type-scatter-contour-series.component.html"
})

export class MapTypeScatterContourSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    constructor() {
    }

    public ngAfterViewInit(): void {
      this.addSeriesWith(WorldLocations.getCities(), "Gray");
      this.addSeriesWith(WorldLocations.getCapitals(), "rgb(32, 146, 252)");
    }

    public addSeriesWith(locations: any[], brush: string) {
        const symbolSeries = new IgxGeographicContourLineSeriesComponent ();
        symbolSeries.dataSource = locations;
        this.map.series.add(symbolSeries);
    }
}
