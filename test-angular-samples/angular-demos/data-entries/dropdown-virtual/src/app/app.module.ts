import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule,
	IgxForOfModule
 } from "igniteui-angular";
import { DropDownVirtualComponent } from "./drop-down-virtual/drop-down-virtual.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DropDownVirtualComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDropDownModule,
		IgxButtonModule,
		IgxToggleModule,
		IgxForOfModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
