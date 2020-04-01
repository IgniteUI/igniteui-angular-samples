import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IgxExtrasModule } from "@infragistics/igniteui-angular-extras";
import { IgxGridModule } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "../directives/prevent-scroll.directive";
import { GridDataAnalysisRoutingModule } from "./grid-data-analysis-routing.module";
import { GridDataAnalysisComponent } from "./grid-data-analysis/grid-data-analysis.component";

@NgModule({
  declarations: [
    GridDataAnalysisComponent
  ],
  imports: [
    CommonModule,
    IgxGridModule,
    GridDataAnalysisRoutingModule,
    IgxExtrasModule,
    IgxPreventDocumentScrollModule
  ]
})
export class GridDataAnalysisModule { }
