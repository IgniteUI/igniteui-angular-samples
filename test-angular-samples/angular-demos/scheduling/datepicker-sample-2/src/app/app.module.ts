import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxDatePickerModule } from "igniteui-angular";
import { DatepickerSample2Component } from "./datepicker-sample-2/datepicker-sample-2.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DatepickerSample2Component
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
