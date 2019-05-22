import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";

@Component({
  selector: "app-map-binding-data-model",
  templateUrl: "./map-binding-data-model.component.html"
})

export class MapBindingDataModelComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    constructor() {
    }

    public ngAfterViewInit(): void {
    }

    public addSeriesWith(locations: any[], brush: string) {
    }
}
