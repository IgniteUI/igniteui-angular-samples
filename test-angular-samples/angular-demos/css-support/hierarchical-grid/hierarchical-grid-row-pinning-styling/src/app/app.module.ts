import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HGridRowPinningStylingSampleComponent } from "./hierarchical-grid/hierarchical-grid-row-pinning-styling/hierarchical-grid-row-pinning-styling.component";
import { 
	IgxHierarchicalGridModule,
	IgxActionStripModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HGridRowPinningStylingSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxActionStripModule,
		IgxHierarchicalGridModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
