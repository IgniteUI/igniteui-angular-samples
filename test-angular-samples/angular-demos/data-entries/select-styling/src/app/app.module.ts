import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxSelectModule } from "igniteui-angular";
import { SelectStylingComponent } from "./data-entries/select/select-styling/select-styling.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SelectStylingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxSelectModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
