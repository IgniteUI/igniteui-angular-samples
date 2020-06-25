import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxCheckboxModule,
	IgxHierarchicalGridModule
 } from "igniteui-angular";
import { HGridSelectionTemplateNumbersSampleComponent } from "./hierarchical-grid/hierarchical-grid-selection-template-numbers/hierarchical-grid-selection-template-numbers.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HGridSelectionTemplateNumbersSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxCheckboxModule,
		IgxHierarchicalGridModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
