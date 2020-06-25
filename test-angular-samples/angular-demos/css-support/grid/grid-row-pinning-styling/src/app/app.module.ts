import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridRowPinningStylingSampleComponent } from "./grid/grid-row-pinning-styling/grid-row-pinning-styling.component";
import { 
	IgxActionStripModule,
	IgxGridModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridRowPinningStylingSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxActionStripModule,
		IgxGridModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
