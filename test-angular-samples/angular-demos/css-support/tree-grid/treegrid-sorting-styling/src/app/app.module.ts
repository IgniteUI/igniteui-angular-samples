import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxIconModule
 } from "igniteui-angular";
import { TreeGridSortingStylingComponent } from "./tree-grid-sorting-styling/tree-grid-sorting-styling.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridSortingStylingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxTreeGridModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
