import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { ArcGISOnlineMapImagery } from "igniteui-angular-maps/ES5/igx-arc-gis-online-map-imagery";

import { EsriStyle, EsriUtility } from "../../utilities/EsriUtility";

@Component({
  selector: "app-MapDisplayImageryEsriTiles",
  styleUrls: ["./component.scss"],
  templateUrl: "./component.html"
})

export class MapDisplayImageryEsriTiles implements AfterViewInit {

    @ViewChild("map", {static: true})
    public map: IgxGeographicMapComponent;

    constructor() {
    }

    public ngAfterViewInit(): void {
        const tileSource = new ArcGISOnlineMapImagery();
        tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldOceansMap);
        // or
        // tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer";
        this.map.backgroundContent = tileSource;

        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.7, height: 0.7 };
    }
}
