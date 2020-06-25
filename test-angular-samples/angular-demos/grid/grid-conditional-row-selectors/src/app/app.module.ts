import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxGridModule,
	IgxCheckboxModule
 } from "igniteui-angular";
import { GridConditionalRowSelectorsComponent } from "./grid/grid-conditional-row-selectors/grid-conditional-row-selectors-sample.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridConditionalRowSelectorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxCheckboxModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
