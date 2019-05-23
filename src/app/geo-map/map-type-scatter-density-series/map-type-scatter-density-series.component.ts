import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
import { IgxGeographicHighDensityScatterSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-high-density-scatter-series-component";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { WorldLocations } from "../../utilities/WorldLocations";

@Component({
  selector: "app-map-type-scatter-density-series",
  templateUrl: "./map-type-scatter-density-series.component.html"
})

export class MapTypeScatterDensitySeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    constructor() {
    }

    public ngAfterViewInit(): void {
      this.addSeriesWith(WorldLocations.getCities(), "Gray");
      this.addSeriesWith(WorldLocations.getCapitals(), "rgb(32, 146, 252)");
    }

    public addSeriesWith(locations: any[], brush: string) {
        const symbolSeries = new IgxGeographicHighDensityScatterSeriesComponent ();
        symbolSeries.dataSource = locations;
        this.map.series.add(symbolSeries);
    }
}
