import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxSnackbarModule
 } from "igniteui-angular";
import { SnackbarSample5Component } from "./snackbar-sample-5/snackbar-sample-5.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SnackbarSample5Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxSnackbarModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
