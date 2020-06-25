import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDropDownModule,
	IgxInputGroupModule,
	IgxRippleModule,
	IgxIconModule,
	IgxToggleModule
 } from "igniteui-angular";
import { DropDownSample4Component } from "./dropdown-sample-4/dropdown-sample-4.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DropDownSample4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDropDownModule,
		IgxInputGroupModule,
		IgxRippleModule,
		IgxIconModule,
		IgxToggleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
