import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxButtonModule,
	IgxDialogModule,
	IgxGridModule
 } from "igniteui-angular";
import { TreeGridBatchEditingSampleComponent } from "./tree-grid/tree-grid-batch-editing/tree-grid-batch-editing-sample.component";
import { TreeGridWithTransactionsComponent } from "./tree-grid/tree-grid-batch-editing/tree-grid-with-transactions.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridBatchEditingSampleComponent,
		TreeGridWithTransactionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxTreeGridModule,
		IgxButtonModule,
		IgxDialogModule,
		IgxGridModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
