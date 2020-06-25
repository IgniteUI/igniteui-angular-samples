import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxDateRangePickerModule } from "igniteui-angular";
import { DateRangePickerModeComponent } from "./daterangepicker-mode/daterangepicker-mode";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DateRangePickerModeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDateRangePickerModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
