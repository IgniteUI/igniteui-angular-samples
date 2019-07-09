import { Component, ViewChild } from "@angular/core";

import { HeatTileGenerator } from "igniteui-angular-core/ES5/igx-heat-tile-generator";
import { ShapeDataSource } from "igniteui-angular-core/ES5/igx-shape-data-source";

import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { TileGeneratorMapImagery } from "igniteui-angular-maps/ES5/igx-tile-generator-map-imagery";

@Component({
    selector: "app-map-display-imagery-heat-tiles",
    templateUrl: "./map-display-imagery-heat-tiles.component.html",
    styleUrls: ["./map-display-imagery-heat-tiles.component.scss"]
})
export class MapDisplayImageryHeatTilesComponent {

    @ViewChild("map", { static: true })
    public map: IgxGeographicMapComponent;

    public data: any[];
    public tileImagery: TileGeneratorMapImagery;

    constructor() {
        this.data = this.initData();

        this.tileImagery = new TileGeneratorMapImagery();

        const con: ShapeDataSource = new ShapeDataSource();

        con.importCompleted.subscribe((s, e) => {
            const data = con.getPointData();
            const lat: number[] = [];
            const lon: number[] = [];
            const val: number[] = [];

            for (let i = 0; i < data.length; i++) {
                const item = data[i];
                for (let j = 0; j < item.points.length; j++) {
                    const pointsList = item.points[j];
                    for (let k = 0; k < pointsList.length; k++) {
                        lat.push(pointsList[k].y);
                        lon.push(pointsList[k].x);
                    }
                }
                const value = item.fieldValues["POP_2010"];
                if (value >= 0) {
                    val.push(value);
                } else {
                    val.push(0);
                }
            }

            const gen = new HeatTileGenerator();
            gen.xValues = lon;
            gen.yValues = lat;
            gen.values = val;
            gen.blurRadius = 6;
            gen.maxBlurRadius = 20;
            gen.useBlurRadiusAdjustedForZoom = true;
            gen.minimumColor = "rgba(100,255, 0, 0.3922)";
            gen.maximumColor = "rgba(255, 255, 0, 0.9412)";
            gen.useGlobalMinMax = true;
            gen.useGlobalMinMaxAdjustedForZoom = true;
            gen.useLogarithmicScale = true;
            gen.useWebWorkers = true;
            gen.webWorkerInstance = new Worker("../heatworker.worker", { type: "module" });

            gen.scaleColors = [
                "rgba(0, 0, 255, 64)",
                "rgba(0, 255, 255, 96)",
                "rgba(0, 255, 0, 160)",
                "rgba(255, 255, 0, 180)",
                "rgba(255, 0, 0, 200)"
            ];

            this.tileImagery.tileGenerator = gen;
        });

        con.shapefileSource = "assets/Shapes/AmericanCities.shp";
        con.databaseSource = "assets/Shapes/AmericanCities.dbf";
        con.dataBind();
    }

    public initData(): any {
        const rows: any[] = [];
        for (let i = 0; i < 5; i++) {
            rows.push({
                index: i,
                name: "row" + i,
                state: "Initial... Initial... Initial... Initial... ",
                value: i * 10
            });
        }
        rows.push({
            index: 5,
            name: "row5",
            state: "Initial",
            value: undefined
        });
        return rows;
    }
}
