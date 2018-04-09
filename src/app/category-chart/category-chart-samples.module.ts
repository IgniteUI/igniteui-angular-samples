import { NgModule, ModuleWithProviders  } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { CategoryChartOverviewComponent } from "./overview/category-chart-overview-sample.component"
import { DataService } from "./services/data.service"
import { IgxCategoryChartComponent } from "igniteui-angular-charts/ES5/igx-category-chart-component"
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module"

@NgModule({
	imports: [ CommonModule, FormsModule, IgxCategoryChartModule ],
	declarations: [
		CategoryChartOverviewComponent
	],
	providers: [ DataService ],
	exports: [ CategoryChartOverviewComponent ]
})
export class CategoryChartSamplesModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: CategoryChartSamplesModule,
			providers: [ DataService ]
		}
	}
}