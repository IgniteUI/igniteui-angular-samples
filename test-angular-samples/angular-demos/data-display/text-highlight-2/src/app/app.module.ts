import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxInputGroupModule,
	IgxIconModule,
	IgxRippleModule,
	IgxTextHighlightModule
 } from "igniteui-angular";
import { TextHighlightSample2Component } from "./text-highlight-sample-2/text-highlight-sample-2.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TextHighlightSample2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxIconModule,
		IgxInputGroupModule,
		IgxRippleModule,
		IgxTextHighlightModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
