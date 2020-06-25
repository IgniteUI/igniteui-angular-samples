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
import { NavDrawerRoutingComponent } from "./nav-drawer-routing/nav-drawer-routing.component";
import { NavDrawerStylingComponent } from "./nav-drawer-styling/nav-drawer-styling.component";
import { RouterModule } from "@angular/router";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		NavDrawerRoutingComponent,
		NavDrawerStylingComponent
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
		IgxToggleModule,
		RouterModule,
		RouterModule.forRoot([
                        {path: "avatar", component: NavDrawerRoutingComponent},
                        {path: "badge", component: NavDrawerRoutingComponent},
                        {path: "button-group", component: NavDrawerRoutingComponent}
                    ])
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
