import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxRadioModule } from "igniteui-angular";
import { RadioSample1Component } from "./radio-sample-1/radio-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		RadioSample1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxRadioModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
