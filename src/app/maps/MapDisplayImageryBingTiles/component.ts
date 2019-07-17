import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { BingMapsImageryStyle } from "igniteui-angular-maps/ES5/BingMapsImageryStyle";
import { BingMapsMapImagery } from "igniteui-angular-maps/ES5/igx-bing-maps-map-imagery";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";

import { MapUtility } from "../../utilities/MapUtility";

@Component({
  selector: "app-MapDisplayImageryEsriTiles",
  styleUrls: ["./component.scss"],
  templateUrl: "./component.html"
})

export class MapDisplayImageryBingTiles implements AfterViewInit {

    @ViewChild("map", {static: true})
    public map: IgxGeographicMapComponent;

    constructor() {
    }

    public ngAfterViewInit(): void {
        const tileSource = new BingMapsMapImagery();
        tileSource.apiKey = MapUtility.getBingKey();
        tileSource.imageryStyle = BingMapsImageryStyle.AerialWithLabels;
        let tileUri = tileSource.actualBingImageryRestUri;

        // resolving BingMaps uri based on HTTP protocol of hosting website
        const isHttpSecured = window.location.toString().startsWith("https:");
        if (isHttpSecured) {
            tileUri = tileUri.replace("http:", "https:");
        } else {
            tileUri = tileUri.replace("https:", "http:");
        }
        tileSource.bingImageryRestUri = tileUri;

        this.map.backgroundContent = tileSource;

        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.7, height: 0.7 };
    }
}
