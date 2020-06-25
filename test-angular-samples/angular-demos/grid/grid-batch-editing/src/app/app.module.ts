import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridBatchEditingSampleComponent } from "./grid/grid-batch-editing/grid-batch-editing-sample.component";
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
		GridBatchEditingSampleComponent,
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
