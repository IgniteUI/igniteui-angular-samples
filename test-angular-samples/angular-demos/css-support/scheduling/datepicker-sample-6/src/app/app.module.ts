import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDatePickerModule,
	IgxIconModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { DatepickerSample6Component } from "./scheduling/datepicker/datepicker-sample-6/datepicker-sample-6.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DatepickerSample6Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDatePickerModule,
		IgxIconModule,
		IgxInputGroupModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
