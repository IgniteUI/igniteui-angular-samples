import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxListModule,
	IgxCardModule,
	IgxIconModule,
	IgxButtonModule,
	IgxTransactionService
 } from "igniteui-angular";
import { TransactionBaseComponent } from "./services/transaction/transaction-base/transaction-base.component";
import { TransactionBasePipe } from "./services/transaction/pipes/transaction-base.pipe";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TransactionBaseComponent,
		TransactionBasePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxListModule,
		IgxCardModule,
		IgxButtonModule,
		IgxIconModule
  ],
  providers: [IgxTransactionService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
