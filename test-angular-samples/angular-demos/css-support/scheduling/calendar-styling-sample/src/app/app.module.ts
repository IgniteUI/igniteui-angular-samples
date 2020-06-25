import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxCalendarModule } from "igniteui-angular";
import { CalendarStylingSample } from "./calendar-styling-sample/calendar-styling-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CalendarStylingSample
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
