import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxRippleModule,
	IgxButtonGroupModule
 } from "igniteui-angular";
import { ButtonsDisplayDensityComponent } from "./buttons-display-density/buttons-display-density.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ButtonsDisplayDensityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxIconModule,
		IgxRippleModule,
		IgxButtonGroupModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
