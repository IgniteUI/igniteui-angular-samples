import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { OpenStreetMapImagery } from "igniteui-angular-maps/ES5/igx-open-street-map-imagery";

@Component({
  selector: "app-MapDisplayImageryOSM",
  styleUrls: ["./component.scss"],
  templateUrl: "./component.html"
})

export class MapDisplayImageryOSM implements AfterViewInit {

    @ViewChild("map", {static: true})
    public map: IgxGeographicMapComponent;

    constructor() {
    }

    public ngAfterViewInit(): void {
        const tileSource = new OpenStreetMapImagery();
        this.map.backgroundContent = tileSource;

        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.7, height: 0.7 };
    }
}
