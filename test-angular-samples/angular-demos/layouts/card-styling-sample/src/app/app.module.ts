import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxCardModule,
	IgxRippleModule
 } from "igniteui-angular";
import { CardStylingSampleComponent } from "./card-styling-sample/card-styling-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CardStylingSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxIconModule,
		IgxCardModule,
		IgxRippleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
