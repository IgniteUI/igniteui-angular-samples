import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { GridMasterDetailSampleComponent } from "./grid/grid-master-detail/grid-master-detail.component";
import { 
	IgxGridModule,
	IgxAvatarModule,
	IgxTabsModule,
	IgxIconModule,
	IgxDividerModule
 } from "igniteui-angular";
import { 
	IgxCategoryChartModule,
	IgxPieChartModule,
	IgxLegendModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridMasterDetailSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxCategoryChartModule,
		IgxPieChartModule,
		IgxLegendModule,
		IgxAvatarModule,
		IgxTabsModule,
		IgxIconModule,
		IgxDividerModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
