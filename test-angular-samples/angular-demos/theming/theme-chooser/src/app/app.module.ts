import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDropDownModule,
	IgxGridModule,
	IgxDialogModule,
	IgxSnackbarModule,
	IgxLayoutModule,
	IgxCalendarModule,
	IgxToggleModule,
	IgxIconModule,
	IgxRippleModule,
	IgxButtonModule,
	IgxInputGroupModule,
	IgxDatePickerModule,
	IgxSelectModule
 } from "igniteui-angular";
import { ThemeChooserSampleComponent } from "./theme-chooser/theme-chooser-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ThemeChooserSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDropDownModule,
		IgxDialogModule,
		IgxSnackbarModule,
		IgxLayoutModule,
		IgxToggleModule,
		IgxIconModule,
		IgxRippleModule,
		IgxButtonModule,
		IgxCalendarModule,
		IgxInputGroupModule,
		IgxDatePickerModule,
		IgxGridModule,
		IgxLayoutModule,
		IgxSelectModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
