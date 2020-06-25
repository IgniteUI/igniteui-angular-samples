import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxTimePickerModule,
	IgxInputGroupModule,
	IgxIconModule
 } from "igniteui-angular";
import { TimepickerDropdownComponent } from "./timepicker-dropdown/timepicker-dropdown.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TimepickerDropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxTimePickerModule,
		IgxInputGroupModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
