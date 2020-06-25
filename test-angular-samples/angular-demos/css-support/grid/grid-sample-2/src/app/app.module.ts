import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
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
	IgxSwitchModule
 } from "igniteui-angular";
import { 
	FinancialSampleComponent,
	LocalService
 } from "./grid/grid-sample-2/grid-sample-2.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		FinancialSampleComponent
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
		HttpClientModule
  ],
  providers: [LocalService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
