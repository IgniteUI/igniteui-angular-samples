import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { 
	IgxButtonModule,
	IgxGridModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxRippleModule,
	IgxChipsModule
 } from "igniteui-angular";
import { GridSearchSampleComponent } from "./grid/grid-search-sample/grid-search-sample.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridSearchSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxButtonModule,
		IgxGridModule,
		IgxIconModule,
		IgxInputGroupModule,
		IgxRippleModule,
		IgxChipsModule,
		HttpClientModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
