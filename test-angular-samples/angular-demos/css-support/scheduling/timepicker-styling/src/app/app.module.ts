import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxTimePickerModule } from "igniteui-angular";
import { TimePickerStylingComponent } from "./timepicker-styling/timepicker-styling.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TimePickerStylingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxTimePickerModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
