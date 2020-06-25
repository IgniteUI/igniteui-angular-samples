import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAvatarModule,
	IgxIconModule,
	IgxListModule,
	IgxSliderModule,
	IgxToastModule,
	IgxButtonModule
 } from "igniteui-angular";
import { ListSample7Component } from "./list-sample-7/list-sample-7.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ListSample7Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAvatarModule,
		IgxIconModule,
		IgxListModule,
		IgxSliderModule,
		IgxToastModule,
		IgxButtonModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
