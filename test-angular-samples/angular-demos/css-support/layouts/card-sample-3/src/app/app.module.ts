import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAvatarModule,
	IgxButtonModule,
	IgxCardModule,
	IgxRippleModule
 } from "igniteui-angular";
import { CardSample3Component } from "./card-sample-3/card-sample-3.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CardSample3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAvatarModule,
		IgxButtonModule,
		IgxCardModule,
		IgxRippleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
