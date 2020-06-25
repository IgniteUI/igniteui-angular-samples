import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxHierarchicalGridModule,
	IgxDialogModule,
	IgxButtonModule,
	IgxCheckboxModule,
	IgxDatePickerModule
 } from "igniteui-angular";
import { HGridEditingSampleComponent } from "./hierarchical-grid/hierarchical-grid-editing/hierarchical-grid-editing.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HGridEditingSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxHierarchicalGridModule,
		IgxDialogModule,
		IgxButtonModule,
		IgxCheckboxModule,
		IgxDatePickerModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
