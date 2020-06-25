import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDateRangePickerModule,
	IgxSelectModule,
	IgxInputGroupModule,
	IgxIconModule
 } from "igniteui-angular";
import { 
	FlightBookingComponent,
	PipeWithoutTownFrom
 } from "./daterangepicker-flight-booking/daterangepicker-flight-booking";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		FlightBookingComponent,
		PipeWithoutTownFrom
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDateRangePickerModule,
		IgxSelectModule,
		IgxInputGroupModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
