import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxDatePickerModule } from "igniteui-angular";
import { DatepickerSample1Component } from "./datepicker-sample-1/datepicker-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DatepickerSample1Component
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
