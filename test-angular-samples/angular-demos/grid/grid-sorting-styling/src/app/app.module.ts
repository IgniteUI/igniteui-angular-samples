import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxGridModule,
	IgxIconModule,
	IgxRippleModule,
	IgxInputGroupModule,
	IgxSelectModule
 } from "igniteui-angular";
import { SortingStylingComponent } from "./grid/grid-sorting-styling/grid-sorting-styling.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SortingStylingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxRippleModule,
		IgxIconModule,
		IgxInputGroupModule,
		IgxSelectModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
