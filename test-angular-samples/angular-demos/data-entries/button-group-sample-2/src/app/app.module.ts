import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonGroupModule,
	IgxButtonModule,
	IgxRippleModule
 } from "igniteui-angular";
import { ButtonGroupSample2Component } from "./button-group-sample-2/button-group-sample-2.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ButtonGroupSample2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonGroupModule,
		IgxButtonModule,
		IgxRippleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
