import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxGeographicMapModule } from 'igniteui-angular-maps/ES5/igx-geographic-map-module';
import { GeoMapRoutingModule } from './geo-map-routing.module';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps/ES5/igx-geographic-map-component';
import { IgxGeographicSymbolSeriesComponent } from 'igniteui-angular-maps/ES5/igx-geographic-symbol-series-component';
import { MarkerType } from 'igniteui-angular-charts/ES5/MarkerType';

import { MapTypeScatterSymbolSeriesComponent } from './map-type-scatter-symbol-series/map-type-scatter-symbol-series.component';


@NgModule({
  declarations: [MapTypeScatterSymbolSeriesComponent],
  imports: [
    CommonModule,
    FormsModule,
    IgxGeographicMapModule,
    GeoMapRoutingModule,
    IgxGeographicMapComponent,
    IgxGeographicSymbolSeriesComponent
  ]
})
export class GeoMapModule { }
