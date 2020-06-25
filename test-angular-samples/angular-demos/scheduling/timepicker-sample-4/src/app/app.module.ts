import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxTimePickerModule,
	IgxToastModule
 } from "igniteui-angular";
import { TimePickerSample4Component } from "./timepicker-sample-4/timepicker-sample-4.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TimePickerSample4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxTimePickerModule,
		IgxToastModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
