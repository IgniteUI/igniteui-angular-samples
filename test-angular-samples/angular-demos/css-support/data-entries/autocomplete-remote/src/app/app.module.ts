import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAutocompleteModule,
	IgxDropDownModule,
	IgxInputGroupModule,
	IgxProgressBarModule,
	IgxIconModule
 } from "igniteui-angular";
import { AutocompleteRemote } from "./data-entries/autocomplete/autocomplete-remote/autocomplete-remote.component";
import { HttpClientModule } from "@angular/common/http";
import { RemoteService } from "./grid/services/remote.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		AutocompleteRemote
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAutocompleteModule,
		IgxDropDownModule,
		IgxInputGroupModule,
		IgxProgressBarModule,
		IgxIconModule
  ],
  providers: [RemoteService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
