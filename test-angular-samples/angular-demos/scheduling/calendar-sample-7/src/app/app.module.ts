import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxCalendarModule,
	IgxDialogModule
 } from "igniteui-angular";
import { CalendarSample7Component } from "./calendar-sample-7/calendar-sample-7.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CalendarSample7Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxCalendarModule,
		IgxDialogModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
