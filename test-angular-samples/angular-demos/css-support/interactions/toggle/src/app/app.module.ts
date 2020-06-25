import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxToggleModule
 } from "igniteui-angular";
import { ToggleComponent } from "./toggle/toggle.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ToggleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxToggleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
