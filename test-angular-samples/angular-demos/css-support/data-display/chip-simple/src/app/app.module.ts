import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxChipsModule,
	IgxIconModule
 } from "igniteui-angular";
import { ChipSimpleComponent } from "./chip/chip-simple/chip-simple.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ChipSimpleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxChipsModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
