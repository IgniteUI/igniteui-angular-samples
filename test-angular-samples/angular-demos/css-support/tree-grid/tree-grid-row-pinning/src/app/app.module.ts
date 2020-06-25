import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { TreeGridRowPinningSampleComponent } from "./tree-grid/tree-grid-row-pinning/tree-grid-row-pinning.component";
import { 
	IgxActionStripModule,
	IgxSwitchModule,
	IgxTreeGridModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridRowPinningSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxActionStripModule,
		IgxSwitchModule,
		IgxTreeGridModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
