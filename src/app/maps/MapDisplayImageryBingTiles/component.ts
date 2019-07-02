import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { BingMapsMapImagery } from "igniteui-angular-maps/ES5/igx-bing-maps-map-imagery";
import { BingMapsImageryStyle } from "igniteui-angular-maps/ES5/BingMapsImageryStyle";
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
        // resolving BingMaps uri based on HTTP protocol of hosting website
        let tileUri = tileSource.actualBingImageryRestUri;
        console.log("tileUri " + tileSource.actualBingImageryRestUri);

        let isHttpSecured = window.location.toString().startsWith("https:");
        if (isHttpSecured) {
            tileSource.bingImageryRestUri = tileUri.replace("http:", "https:");
        } else {
            tileSource.bingImageryRestUri = tileUri.replace("https:", "http:");
        }
        console.log("tileUri " + tileSource.actualBingImageryRestUri);

        this.map.backgroundContent = tileSource;

        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.7, height: 0.7 };
    }
}
