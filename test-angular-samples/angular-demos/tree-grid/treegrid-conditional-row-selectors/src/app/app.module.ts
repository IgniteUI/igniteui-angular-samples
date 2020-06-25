import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxCheckboxModule
 } from "igniteui-angular";
import { TreeGridConditionalRowSelectorsSampleComponent } from "./tree-grid/tree-grid-conditional-row-selectors/tree-grid-conditional-row-selectors.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridConditionalRowSelectorsSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxTreeGridModule,
		IgxCheckboxModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
