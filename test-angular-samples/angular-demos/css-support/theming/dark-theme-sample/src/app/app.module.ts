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
	IgxDatePickerModule
 } from "igniteui-angular";
import { DarkThemeSampleComponent } from "./dark-theme-sample/dark-theme-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DarkThemeSampleComponent
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
		IgxLayoutModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
