import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDateRangePickerModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { BasicDateRangePickerComponent } from "./daterangepicker-basic/daterangepicker-basic";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		BasicDateRangePickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDateRangePickerModule,
		IgxInputGroupModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
