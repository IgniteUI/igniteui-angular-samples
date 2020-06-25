import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxCalendarModule,
	IgxCardModule
 } from "igniteui-angular";
import { MonthpickerSample1Component } from "./monthpicker-sample-1/monthpicker-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		MonthpickerSample1Component
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
