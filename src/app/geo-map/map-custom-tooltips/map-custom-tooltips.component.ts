import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";

@Component({
  selector: "app-map-custom-tooltips",
  templateUrl: "./map-custom-tooltips.component.html"
})

export class MapCustomTooltipsComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    constructor() {
    }

    public ngAfterViewInit(): void {
    }

    public addSeriesWith(locations: any[], brush: string) {
    }
}
