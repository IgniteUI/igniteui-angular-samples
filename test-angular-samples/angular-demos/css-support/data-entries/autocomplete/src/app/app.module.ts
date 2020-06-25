import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAutocompleteModule,
	IgxDropDownModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { 
	AutocompleteBasic,
	AutocompletePipeStartsWith
 } from "./autocomplete/autocomplete.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		AutocompleteBasic,
		AutocompletePipeStartsWith
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAutocompleteModule,
		IgxDropDownModule,
		IgxInputGroupModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
