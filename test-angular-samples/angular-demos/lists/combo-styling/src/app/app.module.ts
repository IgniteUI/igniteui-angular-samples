import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxComboModule } from "igniteui-angular";
import { ComboStyling } from "./lists/combo/combo-styling/combo-styling.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ComboStyling
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxComboModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
