import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxSelectModule,
	IgxButtonModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { SelectSample3Component } from "./select-sample-3/select-sample-3.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SelectSample3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxSelectModule,
		IgxButtonModule,
		IgxInputGroupModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
