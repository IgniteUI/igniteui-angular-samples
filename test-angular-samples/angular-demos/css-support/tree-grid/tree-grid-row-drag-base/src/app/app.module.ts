import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxButtonModule,
	IgxInputGroupModule,
	IgxDragDropModule
 } from "igniteui-angular";
import { TreeGridRowDragBase } from "./tree-grid-row-drag-base/tree-grid-row-drag-base.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridRowDragBase
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxTreeGridModule,
		IgxButtonModule,
		IgxInputGroupModule,
		IgxDragDropModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
