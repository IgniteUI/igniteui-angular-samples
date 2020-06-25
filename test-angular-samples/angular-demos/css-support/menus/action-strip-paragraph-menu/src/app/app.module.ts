import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxActionStripModule,
	IgxRippleModule,
	IgxButtonModule,
	IgxIconModule
 } from "igniteui-angular";
import { ActionStripParagraphMenuComponent } from "./action-strip-paragraph-menu/action-strip-paragraph-menu.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ActionStripParagraphMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxActionStripModule,
		IgxRippleModule,
		IgxButtonModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
