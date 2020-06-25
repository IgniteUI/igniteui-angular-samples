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
import { GridGroupBySummarySampleComponent } from "./grid/grid-groupby-summary-sample/grid-groupby-summary-sample.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridGroupBySummarySampleComponent
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
