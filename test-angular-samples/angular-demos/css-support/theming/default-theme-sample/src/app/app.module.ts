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
	IgxToggleModule,
	IgxIconModule,
	IgxRippleModule,
	IgxButtonModule,
	IgxCalendarModule,
	IgxInputGroupModule,
	IgxDatePickerModule
 } from "igniteui-angular";
import { DefaultThemeSampleComponent } from "./default-theme-sample/default-theme-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DefaultThemeSampleComponent
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
