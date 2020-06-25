import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxLayoutModule,
	IgxButtonGroupModule,
	IgxButtonModule,
	IgxRippleModule
 } from "igniteui-angular";
import { LayoutContentSpaceComponent } from "./layout/layout-content-space/layout-content-space.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		LayoutContentSpaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxLayoutModule,
		IgxButtonGroupModule,
		IgxButtonModule,
		IgxRippleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
