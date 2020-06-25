import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxInputGroupModule,
	IgxIconModule,
	IgxTimePickerModule,
	IgxGridModule
 } from "igniteui-angular";
import { LocalizationSample2Component } from "./services/localization-sample-2/localization-sample-2.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		LocalizationSample2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxInputGroupModule,
		IgxIconModule,
		IgxTimePickerModule,
		IgxGridModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
