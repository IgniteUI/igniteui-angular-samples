import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxInputGroupModule,
	IgxGridModule,
	IgxIconModule
 } from "igniteui-angular";
import { LocalizationSample1Component } from "./services/localization-sample-1/localization-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		LocalizationSample1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxInputGroupModule,
		IgxGridModule,
		IgxGridModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
