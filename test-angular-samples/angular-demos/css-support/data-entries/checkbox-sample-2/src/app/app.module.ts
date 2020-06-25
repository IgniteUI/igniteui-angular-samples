import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxCheckboxModule } from "igniteui-angular";
import { CheckboxSample2Component } from "./checkbox-sample-2/checkbox-sample-2.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CheckboxSample2Component
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
