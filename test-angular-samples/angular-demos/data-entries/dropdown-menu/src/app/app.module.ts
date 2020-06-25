import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDropDownModule,
	IgxIconModule,
	IgxNavbarModule,
	IgxButtonModule,
	IgxToggleModule
 } from "igniteui-angular";
import { DropdownMenuComponent } from "./dropdown-menu/dropdown-menu.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DropdownMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDropDownModule,
		IgxIconModule,
		IgxNavbarModule,
		IgxButtonModule,
		IgxToggleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
