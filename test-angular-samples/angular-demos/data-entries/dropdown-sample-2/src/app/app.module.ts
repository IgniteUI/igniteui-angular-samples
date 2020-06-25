import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule
 } from "igniteui-angular";
import { DropDownSample2Component } from "./dropdown-sample-2/dropdown-sample-2.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DropDownSample2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDropDownModule,
		IgxButtonModule,
		IgxToggleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
