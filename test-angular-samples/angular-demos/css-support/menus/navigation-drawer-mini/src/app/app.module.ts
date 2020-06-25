import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxLayoutModule,
	IgxNavigationDrawerModule,
	IgxRippleModule,
	IgxToggleModule
 } from "igniteui-angular";
import { NavDrawerMiniComponent } from "./nav-drawer-mini/nav-drawer-mini.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		NavDrawerMiniComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxIconModule,
		IgxLayoutModule,
		IgxNavigationDrawerModule,
		IgxRippleModule,
		IgxToggleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
