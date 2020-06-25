import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DisplayDensityComponent } from "./display-density/display-density.component";
import { 
	IgxInputGroupModule,
	IgxButtonGroupModule,
	IgxIconModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DisplayDensityComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxInputGroupModule,
		IgxButtonGroupModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
