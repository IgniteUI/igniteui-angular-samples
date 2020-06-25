import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { TreeGridMultiCellSelectionComponent } from "./tree-grid-multi-cell-selection/tree-grid-multi-cell-selection.component";
import { 
	IgxGridModule,
	IgxTreeGridModule,
	IgxToastModule,
	IgxSnackbarModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridMultiCellSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxTreeGridModule,
		IgxToastModule,
		IgxSnackbarModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
