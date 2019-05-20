import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { geomaproutesdata } from "./geo-map-routes-data";
import { MapTypeScatterSymbolSeriesComponent } from './map-type-scatter-symbol-series/map-type-scatter-symbol-series.component';

const routes: Routes = [
    {
        component: MapTypeScatterSymbolSeriesComponent,
        data: geomaproutesdata["map-type-scatter-symbol-series"],
        path: "map-type-scatter-symbol-series"
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class GeoMapRoutingModule { }
