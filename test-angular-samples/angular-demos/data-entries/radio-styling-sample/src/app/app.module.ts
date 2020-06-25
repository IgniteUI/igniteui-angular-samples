import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxRadioModule } from "igniteui-angular";
import { RadioStylingSampleComponent } from "./radio-styling-sample/radio-styling-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		RadioStylingSampleComponent
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
