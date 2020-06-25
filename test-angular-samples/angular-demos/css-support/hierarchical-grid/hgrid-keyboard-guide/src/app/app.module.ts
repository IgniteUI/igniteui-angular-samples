import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HGridKeyboardnavGuide } from "./hierarchical-grid/hgrid-keybarod-nav-guide-sample/hgrid-keyboard-guide.component";
import { 
	IgxHierarchicalGridModule,
	IgxListModule,
	IgxOverlayService
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HGridKeyboardnavGuide
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxHierarchicalGridModule,
		IgxListModule
  ],
  providers: [IgxOverlayService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
