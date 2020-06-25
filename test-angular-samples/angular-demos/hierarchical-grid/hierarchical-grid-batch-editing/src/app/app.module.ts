import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxHierarchicalGridModule,
	IgxButtonModule,
	IgxCheckboxModule,
	IgxDatePickerModule,
	IgxGridModule,
	IgxDialogModule
 } from "igniteui-angular";
import { HGridBatchEditingSampleComponent } from "./hierarchical-grid/hierarchical-grid-batch-editing/hierarchical-grid-batch-editing.component";
import { HierarchicalGridWithTransactionsComponent } from "./hierarchical-grid/hierarchical-grid-batch-editing/hierarchical-grid-transactions.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HGridBatchEditingSampleComponent,
		HierarchicalGridWithTransactionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxHierarchicalGridModule,
		IgxButtonModule,
		IgxCheckboxModule,
		IgxDatePickerModule,
		IgxGridModule,
		IgxDialogModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
