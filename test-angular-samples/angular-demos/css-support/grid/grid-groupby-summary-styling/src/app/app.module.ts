import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxButtonGroupModule,
	IgxGridModule,
	IgxSwitchModule,
	IgxIconModule,
	IgxBadgeModule
 } from "igniteui-angular";
import { GridGroupBySummaryStylingSampleComponent } from "./grid/grid-groupby-summary-styling-sample/grid-groupby-summary-styling-sample.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridGroupBySummaryStylingSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxButtonModule,
		IgxButtonGroupModule,
		IgxGridModule,
		IgxIconModule,
		IgxBadgeModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
