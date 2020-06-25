import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxBadgeModule,
	IgxAvatarModule
 } from "igniteui-angular";
import { BadgeSample2Component } from "./badge-sample-2/badge-sample-2.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		BadgeSample2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxBadgeModule,
		IgxAvatarModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
