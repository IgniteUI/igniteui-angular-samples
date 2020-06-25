import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxHierarchicalGridModule,
	IgxDragDropModule,
	IgxButtonModule
 } from "igniteui-angular";
import { HGridMultiRowDragComponent } from "./hierarchical-grid/hierarchical-grid-multi-row-drag/hierarchical-grid-multi-row-drag.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HGridMultiRowDragComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxHierarchicalGridModule,
		IgxDragDropModule,
		IgxButtonModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
