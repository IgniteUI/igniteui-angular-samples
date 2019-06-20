import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SparklineDisplayTypesComponent } from "./sparkline-display-types/sparkline-display-types.component";
import { SparklineMarkersComponent } from "./sparkline-markers/sparkline-markers.component";
import { SparklineNormalRangeComponent } from "./sparkline-normal-range/sparkline-normal-range.component";
import { SparklineTrendlinesComponent } from "./sparkline-trendlines/sparkline-trendlines.component";
import { SparklineUnknownValuesComponent } from "./sparkline-unknown-values/sparkline-unknown-values.component";

@NgModule({
    declarations: [
        SparklineMarkersComponent,
        SparklineNormalRangeComponent,
        SparklineTrendlinesComponent,
        SparklineUnknownValuesComponent,
        SparklineDisplayTypesComponent],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class SparklineSamplesModule { }
