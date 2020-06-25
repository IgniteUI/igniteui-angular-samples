import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxButtonModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxRippleModule,
	IgxChipsModule
 } from "igniteui-angular";
import { TreeGridSearchSampleComponent } from "./tree-grid-search-sample/tree-grid-search-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridSearchSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxTreeGridModule,
		IgxButtonModule,
		IgxIconModule,
		IgxInputGroupModule,
		IgxRippleModule,
		IgxChipsModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
