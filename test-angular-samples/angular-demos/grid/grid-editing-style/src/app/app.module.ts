import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridEditingStyleSample } from "./grid/grid-editing-style-sample/grid-editing-style-sample.component";
import { 
	IgxGridModule,
	IgxDatePickerModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridEditingStyleSample
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxDatePickerModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
