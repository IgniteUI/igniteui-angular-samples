import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDatePickerModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxSnackbarModule
 } from "igniteui-angular";
import { DatepickerSample7Component } from "./scheduling/datepicker/datepicker-sample-7/datepicker-sample-7.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DatepickerSample7Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDatePickerModule,
		IgxIconModule,
		IgxInputGroupModule,
		IgxSnackbarModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
