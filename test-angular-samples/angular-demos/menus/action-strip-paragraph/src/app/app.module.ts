import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxActionStripModule,
	IgxRippleModule,
	IgxButtonGroupModule,
	IgxButtonModule,
	IgxIconModule
 } from "igniteui-angular";
import { ActionStripParagraphComponent } from "./action-strip-paragraph/action-strip-paragraph.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ActionStripParagraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxActionStripModule,
		IgxRippleModule,
		IgxButtonGroupModule,
		IgxButtonModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
