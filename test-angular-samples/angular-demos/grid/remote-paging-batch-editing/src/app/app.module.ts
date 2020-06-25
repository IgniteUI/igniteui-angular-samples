import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { RemotePagingBatchEditingComponent } from "./grid/grid-batchEditing-remotePaging/batch-editing-remote-paging.component";
import { 
	IgxGridModule,
	IgxDialogModule,
	IgxButtonModule,
	IgxFocusModule
 } from "igniteui-angular";
import { GridWithTransactionsComponent } from "./grid/grid-batch-editing/grid-transaction.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		RemotePagingBatchEditingComponent,
		GridWithTransactionsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxDialogModule,
		IgxButtonModule,
		IgxFocusModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
