import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxCalendarModule } from "igniteui-angular";
import { CalendarSample4Component } from "./scheduling/calendar/calendar-sample-4/calendar-sample-4.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CalendarSample4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxCalendarModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
