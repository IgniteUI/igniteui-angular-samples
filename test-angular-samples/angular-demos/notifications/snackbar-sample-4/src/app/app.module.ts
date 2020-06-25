import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAvatarModule,
	IgxButtonModule,
	IgxIconModule,
	IgxListModule,
	IgxRippleModule,
	IgxSnackbarModule
 } from "igniteui-angular";
import { SnackbarSample4Component } from "./snackbar-sample-4/snackbar-sample-4.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SnackbarSample4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAvatarModule,
		IgxButtonModule,
		IgxIconModule,
		IgxListModule,
		IgxRippleModule,
		IgxSnackbarModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
