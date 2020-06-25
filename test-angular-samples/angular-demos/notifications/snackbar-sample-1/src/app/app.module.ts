import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxRippleModule,
	IgxSnackbarModule
 } from "igniteui-angular";
import { SnackbarSample1Component } from "./snackbar-sample-1/snackbar-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SnackbarSample1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxRippleModule,
		IgxSnackbarModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
