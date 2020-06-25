import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxIconModule,
	IgxNavbarModule
 } from "igniteui-angular";
import { NavbarStyleComponent } from "./navbar-style/navbar-style.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		NavbarStyleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxIconModule,
		IgxNavbarModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
