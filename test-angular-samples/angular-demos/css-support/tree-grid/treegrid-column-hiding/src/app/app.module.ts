import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxRadioModule,
	IgxColumnHidingModule
 } from "igniteui-angular";
import { TreeGridColumnHidingSampleComponent } from "./tree-grid-column-hiding-sample/tree-grid-column-hiding-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridColumnHidingSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxTreeGridModule,
		IgxRadioModule,
		IgxColumnHidingModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
