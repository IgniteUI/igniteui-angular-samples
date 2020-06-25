import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDropDownModule,
	IgxButtonModule,
	IgxSwitchModule,
	IgxToggleModule
 } from "igniteui-angular";
import { DropDownSample5Component } from "./dropdown-sample-5/dropdown-sample-5.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DropDownSample5Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDropDownModule,
		IgxButtonModule,
		IgxSwitchModule,
		IgxToggleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
