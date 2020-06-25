import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxGridModule,
	IgxSwitchModule,
	IgxIconModule,
	IgxBadgeModule
 } from "igniteui-angular";
import { GridGroupBySampleComponent } from "./grid/grid-groupby-sample/grid-groupby-sample.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridGroupBySampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxButtonModule,
		IgxGridModule,
		IgxIconModule,
		IgxBadgeModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
