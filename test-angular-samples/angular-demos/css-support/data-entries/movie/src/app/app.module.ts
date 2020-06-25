import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAutocompleteModule,
	IgxButtonModule,
	IgxDropDownModule,
	IgxInputGroupModule,
	IgxDatePickerModule,
	IgxDialogModule,
	IgxIconModule,
	IgxSelectModule,
	IgxTimePickerModule
 } from "igniteui-angular";
import { 
	MovieComponent,
	AutocompletePipeContains,
	AutocompleteGroupPipeContains
 } from "./data-entries/autocomplete/movie/movie.component";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		MovieComponent,
		AutocompletePipeContains,
		AutocompleteGroupPipeContains
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAutocompleteModule,
		IgxButtonModule,
		IgxDatePickerModule,
		IgxDropDownModule,
		IgxInputGroupModule,
		IgxDialogModule,
		IgxIconModule,
		IgxSelectModule,
		IgxTimePickerModule,
		ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
