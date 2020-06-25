import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxCheckboxModule } from "igniteui-angular";
import { CheckboxSample3Component } from "./checkbox-sample-3/checkbox-sample-3.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CheckboxSample3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxCheckboxModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
