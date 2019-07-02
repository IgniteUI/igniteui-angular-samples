/* tslint:disable:object-literal-sort-keys */
// tslint:disable:object-literal-shorthand
// tslint:disable:max-line-length
// tslint:disable:member-ordering
// tslint:disable:prefer-const
import { IgxSliderModule } from "igniteui-angular";
import { IgxCategoryChartModule } from "igniteui-angular-charts/ES5/igx-category-chart-module";

import { CategoryChartAnnotationsComponent } from "../../src/app/charts/category-chart/annotations/category-chart-annotations.component";
import { CategoryChartAxisOptionsComponent } from "../../src/app/charts/category-chart/axis-options/category-chart-axis-options-sample.component";
import { CategoryChartConfigOptionsComponent } from "../../src/app/charts/category-chart/config-options/category-chart-config-options-sample.component";
import { CategoryChartHighFrequencyComponent } from "../../src/app/charts/category-chart/high-frequency/category-chart-high-frequency-sample.component";
import { CategoryChartHighVolumeComponent } from "../../src/app/charts/category-chart/high-volume/category-chart-high-volume-sample.component";
import { CategoryChartHighlightingComponent } from "../../src/app/charts/category-chart/highlighting/category-chart-highlighting.component";
import { CategoryChartOverlapColumnsComponent } from "../../src/app/charts/category-chart/overlap-columns/category-chart-overlap-columns.component";
import { CategoryChartOverviewComponent } from "../../src/app/charts/category-chart/overview/category-chart-overview-sample.component";
import { CategoryChartTooltipTemplateComponent } from "../../src/app/charts/category-chart/tooltip-template/category-chart-tooltip-template.component";
import { CategoryChartTooltipTypesComponent } from "../../src/app/charts/category-chart/tooltip-types/category-chart-tooltip-types.component";
import { CategoryChartTrendlinesComponent } from "../../src/app/charts/category-chart/trendline/category-chart-trendlines.component";

import { DependenciesType } from "../services/DependenciesType";
import { Config } from "./core/Config";
import { BaseConfigGenerator } from "./core/BaseConfigGenerator";

export class CategoryChartConfigGenerator extends BaseConfigGenerator {

    constructor() {
        super(DependenciesType.Charts, "/charts/category-chart/");
    }

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(this.getConfig(
            CategoryChartOverviewComponent,
            [IgxCategoryChartModule]));

        configs.push(this.getConfig(
            CategoryChartHighVolumeComponent,
            [IgxCategoryChartModule, IgxSliderModule]));

        configs.push(this.getConfig(
            CategoryChartHighFrequencyComponent,
            [IgxCategoryChartModule, IgxSliderModule]));

        configs.push(this.getConfig(
            CategoryChartTooltipTemplateComponent,
            [IgxCategoryChartModule]));

        configs.push(this.getConfig(
            CategoryChartConfigOptionsComponent,
            [IgxCategoryChartModule]));

        configs.push(this.getConfig(
            CategoryChartAxisOptionsComponent,
            [IgxCategoryChartModule]));

        configs.push(this.getConfig(
            CategoryChartAnnotationsComponent,
            [IgxCategoryChartModule]));

        configs.push(this.getConfig(
            CategoryChartHighlightingComponent,
            [IgxCategoryChartModule]));

        configs.push(this.getConfig(
            CategoryChartTooltipTypesComponent,
            [IgxCategoryChartModule]));

        configs.push(this.getConfig(
            CategoryChartOverlapColumnsComponent,
            [IgxCategoryChartModule]));

        configs.push(this.getConfig(
            CategoryChartTrendlinesComponent,
            [IgxCategoryChartModule]));

        return configs;
    }
}
