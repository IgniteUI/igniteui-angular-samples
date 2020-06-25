import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxTimePickerModule,
	IgxInputGroupModule,
	IgxIconModule,
	IgxButtonModule
 } from "igniteui-angular";
import { TimePickerSample6Component } from "./timepicker-sample-6/timepicker-sample-6.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TimePickerSample6Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxTimePickerModule,
		IgxInputGroupModule,
		IgxIconModule,
		IgxButtonModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
