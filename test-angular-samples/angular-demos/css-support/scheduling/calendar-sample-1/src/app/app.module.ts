import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxCalendarModule } from "igniteui-angular";
import { CalendarSample1Component } from "./calendar-sample-1/calendar-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CalendarSample1Component
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
