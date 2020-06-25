import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { TGridKeyboardnavGuide } from "./tree-grid/tgrid-keyboard-guide/tgrid-keyboardnav-guide.component";
import { 
	IgxTreeGridModule,
	IgxListModule,
	IgxOverlayService
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TGridKeyboardnavGuide
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxTreeGridModule,
		IgxListModule
  ],
  providers: [IgxOverlayService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
