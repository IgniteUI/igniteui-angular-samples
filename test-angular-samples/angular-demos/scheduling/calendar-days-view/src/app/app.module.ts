import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxCalendarModule,
	IgxCardModule
 } from "igniteui-angular";
import { CalendarDaysViewComponent } from "./calendar-days-view/calendar-days-view.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CalendarDaysViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxCalendarModule,
		IgxCardModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
