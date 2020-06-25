import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxRippleModule
 } from "igniteui-angular";
import { ButtonsDisabledComponent } from "./buttons-disabled-sample/buttons-disabled-sample";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ButtonsDisabledComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxIconModule,
		IgxRippleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
