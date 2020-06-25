import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxCalendarModule,
	IgxDialogModule
 } from "igniteui-angular";
import { CalendarSample3Component } from "./calendar-sample-3/calendar-sample-3.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CalendarSample3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxCalendarModule,
		IgxDialogModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
