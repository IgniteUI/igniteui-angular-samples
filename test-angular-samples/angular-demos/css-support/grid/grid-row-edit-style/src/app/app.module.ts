import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridRowEditStyleComponent } from "./grid/grid-row-editing-style/grid-row-editing-style.component";
import { 
	IgxGridModule,
	IgxFocusModule,
	IgxIconModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridRowEditStyleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxFocusModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
