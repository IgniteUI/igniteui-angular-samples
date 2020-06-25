import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxGridModule,
	IgxRippleModule,
	IgxSwitchModule,
	IgxSelectModule
 } from "igniteui-angular";
import { GridPagerSampleComponent } from "./grid/grid-pager-sample/grid-pager-sample.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridPagerSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxRippleModule,
		IgxSwitchModule,
		IgxSelectModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
