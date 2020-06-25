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
import { TextHighlightStyleComponent } from "./text-highlight-style/text-highlight-style.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TextHighlightStyleComponent
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
