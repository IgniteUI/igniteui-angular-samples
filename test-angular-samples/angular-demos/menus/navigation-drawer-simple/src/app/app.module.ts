import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxNavigationDrawerModule,
	IgxRippleModule,
	IgxToggleModule
 } from "igniteui-angular";
import { NavDrawerSimpleComponent } from "./nav-drawer-simple/nav-drawer-simple.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		NavDrawerSimpleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxIconModule,
		IgxNavigationDrawerModule,
		IgxRippleModule,
		IgxToggleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
