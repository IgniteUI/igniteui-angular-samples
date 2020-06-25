import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDatePickerModule,
	IgxIconModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { DatepickerDropdownComponent } from "./scheduling/datepicker/datepicker-dropdown/datepicker-dropdown.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DatepickerDropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDatePickerModule,
		IgxIconModule,
		IgxInputGroupModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
