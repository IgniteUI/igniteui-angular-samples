import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxHierarchicalGridModule,
	IgxCheckboxModule
 } from "igniteui-angular";
import { HGridConditionalRowSelectorsComponent } from "./hierarchical-grid/hierarchical-grid-conditional-row-selectors/hierarchical-grid-conditional-row-selectors.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HGridConditionalRowSelectorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxHierarchicalGridModule,
		IgxCheckboxModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
