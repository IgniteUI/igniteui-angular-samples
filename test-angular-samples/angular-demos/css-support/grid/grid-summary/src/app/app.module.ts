import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { 
	IgxButtonModule,
	IgxGridModule,
	IgxInputGroupModule,
	IgxRippleModule,
	IgxSwitchModule,
	IgxIconModule
 } from "igniteui-angular";
import { GridSample3Component } from "./grid/grid-sample-3/grid-sample-3.component";
import { LocalService } from "./grid/grid-sample-2/grid-sample-2.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridSample3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxButtonModule,
		IgxGridModule,
		IgxInputGroupModule,
		IgxRippleModule,
		HttpClientModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
