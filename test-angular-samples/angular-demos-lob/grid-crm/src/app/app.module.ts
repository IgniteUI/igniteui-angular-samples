import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { HttpClientModule } from "@angular/common/http";
import { 
	IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxGridModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxProgressBarModule,
	IgxRippleModule,
	IgxSwitchModule,
	IgxToggleModule,
	IgxCheckboxModule,
	IgxExcelExporterService
 } from "igniteui-angular";
import { GridCRMComponent } from "./grid-crm/grid-crm.component";
import { 
	IgxSparklineCoreModule,
	IgxSparklineModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridCRMComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxAvatarModule,
		IgxBadgeModule,
		IgxButtonModule,
		IgxGridModule,
		IgxIconModule,
		IgxInputGroupModule,
		IgxProgressBarModule,
		IgxRippleModule,
		IgxSwitchModule,
		IgxToggleModule,
		IgxCheckboxModule,
		HttpClientModule,
		IgxSparklineCoreModule,
		IgxSparklineModule
  ],
  providers: [IgxExcelExporterService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
