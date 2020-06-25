import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxIconModule
 } from "igniteui-angular";
import { TreeGridSortingSampleComponent } from "./tree-grid-sorting-sample/tree-grid-sorting-sample.component";
import { TreeGridContextmenuComponent } from "./tree-grid-sorting-sample/tree-grid-contextmenu/tree-grid-contextmenu.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridSortingSampleComponent,
		TreeGridContextmenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxTreeGridModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
