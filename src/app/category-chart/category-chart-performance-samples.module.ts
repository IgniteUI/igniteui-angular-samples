import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxButtonModule, IgxSliderModule } from "igniteui-angular";
import { IgxCategoryChartComponent } from "igniteui-angular-charts/ES5/igx-category-chart-component";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";
import { CategoryChartHighFrequencyComponent } from "./high-frequency/category-chart-high-frequency-sample.component";
import { CategoryChartHighVolumeComponent } from "./high-volume/category-chart-high-volume-sample.component";

@NgModule({
    declarations: [
        CategoryChartHighVolumeComponent,
        CategoryChartHighFrequencyComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxCategoryChartModule,
        IgxButtonModule,
        IgxSliderModule
    ]
})
export class CategoryChartPerformanceSamplesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: CategoryChartPerformanceSamplesModule
        };
    }
}
