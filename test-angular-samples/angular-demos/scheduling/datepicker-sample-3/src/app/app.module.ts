import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxDatePickerModule } from "igniteui-angular";
import { DatepickerSample3Component } from "./datepicker-sample-3/datepicker-sample-3.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DatepickerSample3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDatePickerModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
